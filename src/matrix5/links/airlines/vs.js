import {
  printNotification,
  monthnumberToName,
  to2digits,
  to4digits,
} from "../../utils";
import { validatePax, register, anyCarriers } from "..";
import { currentItin } from "../../../matrix5/parse/itin";

function printVS() {
  if (!anyCarriers("AF", "DL", "KL", "VS")) {
    return;
  }

  var createUrl = function () {
    var pax = validatePax({
      maxPaxcount: 9,
      countInf: true,
      childAsAdult: 12,
      sepInfSeat: false,
      childMinAge: 2,
    });
    if (!pax) {
      printNotification("Error: Failed to validate Passengers in printVS");
      return;
    }
    let url =
      "https://www.virginatlantic.com/air-shopping/priceTripAction.action?";
    url += `paxCounts[0]=${pax.adults}`;
    url += `&paxCounts[1]=${pax.children.length}`;
    url += `&paxCounts[2]=${pax.infSeat}`;
    url += `&paxCounts[3]=${pax.infLap}`;
    url += `&exitCountry=US`;
    url += `&currencyCd=${currentItin.cur || "USD"}`;

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
          to4digits(seg.fnr),
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

  var url = createUrl();
  if (!url) {
    return;
  }

  return {
    url,
    title: "Virgin Atlantic",
  };
}

register("airlines", printVS);
