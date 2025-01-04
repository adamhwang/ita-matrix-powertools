import mptUserSettings, { registerSetting } from "../../settings/userSettings";
import {
  printNotification,
  monthnumberToName,
  to2digits,
  to4digits,
} from "../../utils";
import { validatePax, register, anyCarriers } from "..";
import { currentItin } from "../../../matrix5/parse/itin";

const dlEditions = [
  { value: "de_de", name: "Germany" },
  { value: "www_us", name: "US" },
];

function printDL() {
  if (!anyCarriers("AF", "DL", "KL", "VS")) {
    return;
  }

  var createUrl = function (edition) {
    var pax = validatePax({
      maxPaxcount: 9,
      countInf: true,
      childAsAdult: 12,
      sepInfSeat: false,
      childMinAge: 2,
    });
    if (!pax) {
      printNotification("Error: Failed to validate Passengers in printDL");
      return;
    }
    let url = `https://${edition[0]}.delta.com/flight-search/search?tripType=multiCity`;
    url += `&paxCount=${pax.adults + pax.children.length}`;
    url += "&price=" + currentItin.price;
    url += "&currencyCd=" + currentItin.cur;
    url += "&exitCountry=" + edition[1].toUpperCase();

    const fares = [];

    let segnum = 0;
    currentItin.itin.forEach((itin, legnum) => {
      itin.seg.forEach((seg) => {
        const hour = seg.dep.time24.split(":")[0];
        const time =
          to2digits(+hour - (+hour < 12 ? 0 : 12)) + (+hour < 12 ? "A" : "P");
        const values = [
          legnum,
          seg.bookingclass,
          seg.orig,
          seg.dest,
          seg.carrier,
          seg.fnr,
          monthnumberToName(seg.dep.month),
          to2digits(seg.dep.day),
          seg.dep.year,
          time,
        ];
        url += `&itinSegment[${segnum}]=${values.join(":")}`;

        fares.push(seg.farebase);
        segnum++;
      });
    });

    url += `&fareBasis=${fares.join(":")}`;
    url += `&numOfSegments=${segnum}`;

    return url;
  };
  // get edition
  var edition = mptUserSettings.dlEdition.split("_");
  if (edition.length != 2) {
    printNotification("Error:Invalid Delta-Edition");
    return;
  }
  var url = createUrl(edition);
  if (!url) {
    return;
  }
  var extra =
    ' <span class="pt-hover-container">[+]<span class="pt-hover-menu">';
  extra += dlEditions
    .map(function (obj, i) {
      return (
        '<a href="' +
        createUrl(obj.value.split("_")) +
        '" target="_blank">' +
        obj.name +
        "</a>"
      );
    })
    .join("<br/>");
  extra += "</span></span>";

  return {
    url,
    title: "Delta",
    extra,
  };
}

register("airlines", printDL);
registerSetting("Delta", "dlEdition", dlEditions, "www_us");
