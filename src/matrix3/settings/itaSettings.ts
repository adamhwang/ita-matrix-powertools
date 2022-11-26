import { findtarget } from "../utils";

let _bookingDetails: any = undefined;
(function _waitHijack() {
  setTimeout(() => {
    let _window;
    try {
      _window = unsafeWindow || window;
    } catch {
      _window = window;
    }
    document.body.insertAdjacentHTML(
      "beforeend",
      `<div>found keys(_window).length: ${Object.keys(_window).length}</div>`
    );
    for (const key of Object.keys(_window)) {
      if (typeof _window[key] !== "function") continue;
      if (_window[key].toString().includes("Copy itinerary as JSON")) {
        const oldFunc = _window[key];
        // hijack render function
        _window[key] = function() {
          oldFunc.apply(this, Array.prototype.slice.call(arguments));

          const funcContents = oldFunc.toString();

          // get itin variable names
          const contextMatches = funcContents.match(/var (\w+)=(\w+)\(\);/); // var c = Ud();
          const cVar = contextMatches && (contextMatches[1] as string);
          const Ud = contextMatches && (contextMatches[2] as string);

          const bookingDetailsMatches = funcContents.match(
            /(\w+).bookingDetails/
          ); // return Wd(xla(e, d.bookingDetails))
          const bookingDetailsVar =
            bookingDetailsMatches && (bookingDetailsMatches[1] as string);

          const itinMatches = funcContents.match(
            new RegExp(`var ${bookingDetailsVar}=(\\w+)\\(${cVar}\\)\\.(\\w+)`)
          ); // var d = Vd(c).Rd
          const Vd = itinMatches && (itinMatches[1] as string);
          const Rd = itinMatches && (itinMatches[2] as string);

          // re-build itin call
          const c = Ud && _window[Ud] && _window[Ud]();
          _bookingDetails =
            (Vd &&
              c &&
              Rd &&
              _window[Vd] &&
              _window[Vd](c)[Rd]?.bookingDetails) ||
            _bookingDetails;
        };
        return;
      }
    }
    _waitHijack();
  }, 200);
})();

// ITA Matrix CSS class definitions:
const itaSettings = [
  {
    matrixVersion: 5,
    startpage: {
      maindiv: "mat-app-background"
    },
    resultpage: {
      getBookingDetails: () => _bookingDetails,
      mcDiv: "info-container",
      mcHeader: "info-title"
    }
  },
  {
    matrixVersion: 3,
    startpage: {
      maindiv: "KIR33AB-w-d", //Container of main content. Unfortunately id "contentwrapper" is used twice
      tabBarItem: "gwt-TabBarItem-wrapper" // Round trip, One-way and Multi-city tab wrapper class
    },
    resultpage: {
      itin: "KIR33AB-v-d", //Container with headline: "Itinerary"
      itinRow: "KIR33AB-j-i", // TR in itin with Orig, Dest and date
      milagecontainer: "KIR33AB-v-e", // TD-Container on the right
      rulescontainer: "KIR33AB-k-d", // First container before rulelinks (the one with Fare X:)
      htbContainer: "KIR33AB-k-k", // full "how to buy"-container inner div (td=>div=>div)
      htbLeft: "KIR33AB-k-g", // Left column in the "how to buy"-container
      htbRight: "KIR33AB-k-f", // Class for normal right column
      htbGreyBorder: "KIR33AB-k-l", // Class for right cell with light grey border (used for subtotal of passenger)
      //inline
      mcDiv: "KIR33AB-y-d", // Right menu sections class (3 divs surrounding entire Mileage, Emissions, and Airport Info)
      mcHeader: "KIR33AB-y-b", // Right menu header class ("Mileage", etc.)
      mcLinkList: "KIR33AB-y-c" // Right menu ul list class (immediately following header)
    }
  },
  {
    matrixVersion: 3,
    startpage: {
      maindiv: "IR6M2QD-w-d", //Container of main content. Unfortunately id "contentwrapper" is used twice
      tabBarItem: "gwt-TabBarItem-wrapper" // Round trip, One-way and Multi-city tab wrapper class
    },
    resultpage: {
      itin: "IR6M2QD-v-d", //Container with headline: "Itinerary"
      itinRow: "IR6M2QD-j-i", // TR in itin with Orig, Dest and date
      milagecontainer: "IR6M2QD-v-e", // TD-Container on the right
      rulescontainer: "IR6M2QD-k-d", // First container before rulelinks (the one with Fare X:)
      htbContainer: "IR6M2QD-k-k", // full "how to buy"-container inner div (td=>div=>div)
      htbLeft: "IR6M2QD-k-g", // Left column in the "how to buy"-container
      htbRight: "IR6M2QD-k-f", // Class for normal right column
      htbGreyBorder: "IR6M2QD-k-l", // Class for right cell with light grey border (used for subtotal of passenger)
      //inline
      mcDiv: "IR6M2QD-y-d", // Right menu sections class (3 divs surrounding entire Mileage, Emissions, and Airport Info)
      mcHeader: "IR6M2QD-y-b", // Right menu header class ("Mileage", etc.)
      mcLinkList: "IR6M2QD-y-c" // Right menu ul list class (immediately following header)
    }
  }
];

const classSettings = itaSettings[0];

export function findTargetSetVersion(classSelector, nth) {
  for (let setting of itaSettings) {
    const className = classSelector(setting);
    const target = findtarget(className, nth);
    if (target) {
      console.log(`ITA Version detected: ${className}`);
      Object.assign(classSettings, setting);
      return target;
    }
  }
}

export default classSettings;
