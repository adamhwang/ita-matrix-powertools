import mptSettings, { getForcedCabin } from "../settings/appSettings";
import { currentItin } from "../../matrix5/parse/itin";

const cabins = ["ECONOMY", "PREMIUM_ECONOMY", "BUSINESS", "FIRST"];

function mapLang(code) {
  // Editions historically used "gb" for English
  if (!code || code.toLowerCase() === "gb") {
    return "en";
  }
  return code.toLowerCase();
}

function formatDate(dep) {
  return (
    dep.year +
    "-" +
    ("0" + dep.month).slice(-2) +
    "-" +
    ("0" + dep.day).slice(-2)
  );
}

/**
 * Build a deep link into the Lufthansa Group shop booking engine
 * (replaces the retired book.*.com Amadeus availThenFare hosts).
 *
 * @param {string} host e.g. "shop.lufthansa.com"
 * @param {string[]} edition [country, language] e.g. ["US","gb"]
 * @param {{adults:number, children:number[], infLap:number}} pax
 */
export function createLhGroupUrl(host, edition, pax) {
  var mincabin = 3;
  var itineraries = [];
  for (var i = 0; i < currentItin.itin.length; i++) {
    var leg = currentItin.itin[i];
    itineraries.push({
      originLocationCode: leg.orig,
      destinationLocationCode: leg.dest,
      departureDateTime: formatDate(leg.dep),
    });
    for (var j = 0; j < leg.seg.length; j++) {
      if (leg.seg[j].cabin < mincabin) {
        mincabin = leg.seg[j].cabin;
      }
    }
  }

  var travelers = [];
  var a;
  for (a = 0; a < pax.adults; a++) {
    travelers.push({ passengerTypeCode: "ADT" });
  }
  for (a = 0; a < pax.children.length; a++) {
    travelers.push({ passengerTypeCode: "CHD" });
  }
  for (a = 0; a < pax.infLap; a++) {
    travelers.push({ passengerTypeCode: "INF" });
  }
  if (!travelers.length) {
    travelers.push({ passengerTypeCode: "ADT" });
  }

  var cabin =
    cabins[mptSettings.cabin === "Auto" ? mincabin : getForcedCabin()];
  var country = edition[0].toUpperCase();
  var lang = mapLang(edition[1]);
  var search = {
    cabin: cabin,
    travelers: travelers,
    itineraries: itineraries,
  };

  return (
    "https://" +
    host +
    "/booking/availability?lang=" +
    lang +
    "-" +
    country +
    "&portalCountry=" +
    country +
    "&search=" +
    encodeURIComponent(JSON.stringify(search))
  );
}
