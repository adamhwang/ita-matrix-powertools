import { printNotification, to2digits } from "../../utils";
import { validatePax, register } from "..";
import { currentItin } from "../../parse/itin";

const editions = [
  { name: "English", url: "" },
  { name: "Español", url: "es" },
  { name: "Português", url: "pt" },
  { name: "Deutsch", url: "de" },
  { name: "Italiano", url: "it" },
  { name: "Dansk", url: "da" },
  { name: "Svenska", url: "sv" },
  { name: "Norsk", url: "no" },
  { name: "Nederlands", url: "nl" },
  { name: "Finnish", url: "fi" },
  { name: "Polish", url: "pl" },
  { name: "Turkish", url: "tk" }
];

function printFN() {
  var pax = validatePax({
    maxPaxcount: 9,
    countInf: false,
    childAsAdult: 12,
    sepInfSeat: false,
    childMinAge: 2
  });
  if (!pax) {
    printNotification("Error: Failed to validate Passengers in printFN");
    return;
  }

  const createUrl = function(edition) {
    const tty = currentItin.itin.length === 2 ? 1 : 0;
    let search = `cref=fnbwmint&tty=${tty}&curr=${currentItin.cur ||
      "USD"}&nativecurr=${currentItin.cur || "USD"}&cls=0&adt=${
      pax.adults
    }&chd=${pax.children.length}&inf=${
      pax.infLap
    }&tot=0.00&tax=0.00&chdtot=0.00&chdtax=0.00&inftot=0.00&inftax=0.00&`;

    let segCount = 0;
    search += currentItin.itin
      .map((leg, i) => {
        const key = currentItin.itin.length === 2 && i === 1 ? "ib" : "ob";
        const legNum = currentItin.itin.length > 2 ? 0 : i;
        return leg.seg
          .map((seg, j) => {
            const segNum = currentItin.itin.length > 2 ? segCount++ : j;
            return `${key}${legNum + 1}${segNum ? segNum : ""}=${seg.carrier}${
              seg.fnr
            }${seg.bookingclass}!${formatDate(seg.dep)}!${seg.orig}${
              seg.dest
            }!${formatDate(seg.arr)}`;
          })
          .join("&");
      })
      .join("&");

    return `https://www.flightnetwork.com/${edition.url}${
      edition.url ? "/" : ""
    }flights/showflight?enc=${btoa(search)}`;
  };

  var url = createUrl(editions[0]);
  if (!url) return;

  let extra =
    ' <span class="pt-hover-container">[+]<span class="pt-hover-menu">';
  extra += editions
    .map(function(obj, i) {
      return (
        '<a href="' + createUrl(obj) + '" target="_blank">' + obj.name + "</a>"
      );
    })
    .join("<br/>");
  extra += "</span></span>";

  return {
    url,
    title: "FlightNetwork",
    extra
  };
}

function formatDate(date) {
  return (
    "" +
    date.year +
    to2digits(date.month) +
    to2digits(date.day) +
    date.time24.replace(":", "")
  );
}

register("otas", printFN);
