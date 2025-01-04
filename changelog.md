# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.56.0] - 2025-01-04

Edited by IAkH

- removed matrix3-specific code and settings
- updated to manifest3

## [0.55.14] - 2023-11-09

Edited by IAkH

- kind of fixed Priceline link

## [0.55.13] - 2023-09-09

Edited by reedy

- added EI to BA links

## [0.55.12] - 2023-03-23

Edited by IAkH

- fixed SN setting

## [0.55.11] - 2023-03-17

Edited by IAkH

- fixed preliminary Matrix 5 support (only links and link settings work)
- fixed LX, OS and added SN link

## [0.55.9] - 2023-03-08

Edited by IAkH

- added JustFly and OneTravel
- small update to EY

## [0.55.8] - 2022-11-26

Edited by IAkH

- fixed mobile layout in Matrix 5

## [0.55.7] - 2022-11-03

Edited by IAkH

- removed Google Flights (broken)
- replaced affiliate link script

## [0.55.6] - 2022-09-09

Edited by dja852

- fixed Amadeus URL generator to use 24-hour time as this was causing itin display issues on Air Canada

## [0.55.5] - 2022-08-28

Edited by IAkH

- fixed web extension rendering bug

## [0.55.4] - 2022-06-30

Edited by IAkH

- fixed Turkish Airlines link
- added GotoGate and FlightHub links

## [0.55.3] - 2022-06-20

Edited by IAkH

- fixed preliminary Matrix 5 support for web extensions
- split out: Orbitz, Travelocity, Hotwire, CheapTickets, Ebookers, and MrJet
- removed FlightNetwork and Vayama (USA)

## [0.55.2] - 2022-06-20

Edited by IAkH

- fixed preliminary Matrix 5 support itinerary detection

## [0.55.1] - 2022-04-08

Edited by IAkH

- fixed preliminary Matrix 5 support itinerary detection

## [0.55.0] - 2022-02-07

Edited by IAkH

- added preliminary Matrix 5 support

## [0.54.1] - 2022-01-26

Edited by IAkH

- added support for oldmatrix.itasoftware.com

## [0.54.0] - 2021-06-13

Edited by IAkH

- remove and pin search history

## [0.53.3] - 2020-12-04

Edited by IAkH

- search history performance improvements
- fixed loading issue in new tabs (userscript)

## [0.53.1] - 2020-09-26

Edited by IAkH

- fixed Delta link
- search history improvements

## [0.53] - 2020-09-15

Edited by IAkH

- added search history
- improved shareable link generation performance

## [0.52] - 2020-09-15

Edited by IAkH

- added multi-tab/window searches
- added deeplinks directly to calendar and search results (for userscript and browser extensions)
- auto-detect passengers and cabin class from search
- improved page change detection performance

## [0.51.2] - 2020-09-06

Edited by IAkH

- fixed Delta passenger counts (and stopped supporting infants in lap)

## [0.51.1] - 2020-08-15

Edited by IAkH

- added CheapTickets, BudgetAir, Vayama, Vliegwinkel and Flugladen urls
- added additional Expedia family urls

## [0.50.2] - 2020-07-05

Edited by IAkH

- minor Priceline url changes

## [0.50] - 2020-07-05

Edited by IAkH

- added Virgin Atlantic link (thanks @CosmicGirl!)
- show Air France, Delta, KLM and Virgin Atlantic links for each airline

## [0.49] - 2020-07-03

Edited by IAkH

- added Austrian link
- added affiliate disclosure

## [0.48.6] - 2020-03-04

Edited by IAkH

- added a package-lock.json file for reproducible builds

## [0.48.4] - 2020-03-04

Edited by IAkH

- fixed Etihad url for different journey types

## [0.48.3] - 2020-03-03

Edited by IAkH

- dark mode fixes

## [0.48.0] - 2020-03-01

Edited by IAkH

- added dark mode

## [0.47.0] - 2020-02-27

Edited by IAkH

- added eDestinos link
- fixed Air France and LATAM deeplinks
- added carrier checks for American, Air Canada and Delta
- changed timezone package for more robust handling and to reduce package size

## [0.46.1] - 2020-02-26

Edited by IAkH

- fixed UI crash when an "airport" did not exist in the timezone table

## [0.46.0] - 2020-02-24

Edited by IAkH

- added Emirates, Etihad, Google Flights, and Qatar links
- default to "inline mode"
- small white space fix

## [0.45.0] - 2020-02-21

Edited by IAkH

- added Tripadvisor
- added by-segment search to Skyscanner and Momondo
- added children support to Kayak, Skyscanner, Momondo and FlightNetwork (thanks again @andydd!)
- removed duplicate by-segment search when all segments are one-ways
- fixed max passenger logic
- fixed white space, updated inline layout and colors
- added Edge and Opera addons

## [0.44.6] - 2020-02-18

Edited by IAkH

- fixed FlightNetwork links (thanks again @andydd!)
- consolidated Hop2, Ovago and Wowfares

## [0.44.1] - 2020-02-17

Edited by IAkH

- added Jetcost

## [0.44.0] - 2020-02-16

Edited by IAkH

- fixed CheapOAir link
- added lucky2go, Ovago, and FlightNetwork (thanks @andydd)
- consolidated update and download URLs to GreasyFork
- added affiliate link option

## [0.43.1] - 2020-02-11

Edited by wylek

- minor BA parameter updates for multi-city construction
- AA (US site) corrections for one-way and multi-city URL construction, departure timezone handling re-implemented (previous handling via farefreaks was removed)
- Added AA editions for Puerto Rico, Bahamas, and British Virgin Islands

## [0.43.0] - 2020-02-02

Edited by IAkH

- added eDreams, Opodo and Travellink

## [0.42.0] - 2020-01-26

Edited by IAkH

- removed Hipmunk

## [0.40.2] - 2020-01-03

Edited by IAkH

- fixed KLM link

## [0.40.0] - 2020-01-02

Edited by IAkH

- major refactor to split out codefiles
- package userscript with webpack
- added local storage settings for console mode

## [0.36.1] - 2019-12-29

Edited by IAkH

- fixed version number on settings
- type check code refactor

## [0.36.0] - 2019-12-27

Edited by IAkH

- added PS, OA deeplinks
- added show all airline links option
- added commit hook to lint and minify script

## [0.35] - 2019-12-06

Edited by wylek

- bug fixes for QF
- minor UX changes for settings panel
- bug fix for loading previously-saved user settings (when installed via userscript manager)
- added "Restore Defaults" option in the settings panel
- renamed LAN to LATAM and re-enabled with URL fixes
- pass cabin preference to Cheapoair, Expedia, Momondo, Skyscanner
- various JavaScript syntax modernization changes to improve readability
- changelog reformatted and older changes removed from header of main script to improve readability
- old (disabled) farefreaks functions moved to farefreaks_archived.js to reduce script size and load time

## [0.34.1] - 2019-11-12

Edited by fqj1994

- added expedia jp

## [0.34] - 2019-10-16

Edited by wylek

- fix farefreaks disable setting
- add AA ES_ES
- add Qantas deeplink

## [0.33] - 2019-10-16

Edited by TechnoTourist (Air Canada promo code input)

## [0.32] - 2019-08-06

Edited by canadiancow (Pass fare basis to Air Canada)

## [0.26] - 2017-05-29

Edited by Dead-Flag (added Skyscanner)

## [0.25] - 2017-04-09

Edited by mr-C (Added Finland edition for AirFrance, necessary for bookings originating in Lithuania / VNO)

## [0.24] - Not documented

## [0.23] - 2016-12-11

Edited by Steppo

- fixed Alitalia and added editions
- added time zone resolving - only affecting links for American Airlines
- added on the fly link updates for passengers/cabin - printLinksContainer()
- added support for multiple onClick() events in link section)

## [0.22] - 2016-09-26

Edited by Steppo (Added American US/CA/GB currencies)

## [0.21] - 2016-09-18

Edited by Steppo (Removed Orbitz/Ebookers
fixed Air Canada
some Kayak tweaking)

## [0.20] - 2016-05-31

Edited by elduce (Added Monomdo & Kayak)
2016-06-05 Edited by Steppo (Disabled LAN, Removed invalid Ebookers targets, Regrouped links to Airline/OTA/Meta)

## [0.19] - 2016-05-14

Edited by seththeriault (Specify proper cabin parameter for DL C+/W booking)

## [0.18a] - 2016-05-10

Edited by Steppo (Fixed critical bug in Amadeus function - thx to adam.smith)

## [0.18] - 2016-05-01

Edited by Steppo (Renamed UserScript
added cabin override
added pax management -> use with caution!
redesigned settings - added font size for links
added editor mode
reworked/adapted linking functions - added edition support
tweaked extraction function - bugs removed/shortened/added plane type & fare carrier/improved currency detection
added Amadeus realated functions
added AAc1, BA, CZ, IB, LA, LH, LX, TK
added advanced routing codes using FareFreaks
added flight manager support of FareFreaks)

## [0.17] - 2016-04-11

Edited by Steppo (fixed Priceline)

### 2016-03-24

Edited by tomasdev (Fix Delta booking link like Google does)

## [0.16] - 2015-12-15

Edited by Steppo ( removed UA - Hipmunk, use textNode for printing (external) messages)
2015-10-12
Edited by IAkH ( added wheretocredit.com calculator )

## [0.15] - 2015-09-30

Edited by IAkH ( added additional edition flyout menu, added Ebookers, added Etraveli )

## [0.14] - 2015-09-25

Edited by Steppo ( added American Airlines )

## [0.13a] - 2015-08-07

Edited by Steppo ( class names updated )

## [0.13] - 2015-06-15

Edited by Steppo ( fixed miles/passenger/price extraction,
moved itin-data to global var "currentItin" -> capability to modify/reuse itin,
rearranged config section,
introduced wheretocredit.com,
introduced background resolving of detailed distances using farefreaks.com based on data of OurAirports.com,
tested on FF38, IE11, IE10 (emulated)
)

## [0.12] - 2015-06-13

Edited by IAkH ( added CheapOair )

## [0.11d] - 2015-06-06

class names updated

## [0.11c] - 2015-05-13

Edited by Steppo ( fixed class names )

## [0.11b] - 2015-04-26

Edited by Steppo ( made Planefinder/Seatguru switchable)

## [0.11a] - 2015-04-20

Edited by Steppo (fixed Bug in findItinTarget for one-seg-flights, fixed typo, added CSS fix for startpage)

## [0.11] - 2015-04-19

Edited by Steppo (added SeatGuru,
added Planefinder,
moved translation to external var/function adding capability to add translations,
added possibility to print notifications,
added self-test to prevent crashing on class-changes,
set timeout to 10s,
added powerfull selector-function to get desired td in itin => see findItinTarget,
moved exit in frames to top,
some cleanups,
moved older changelogitems to separate file on GitHub - no one wants to read such lame stuff :-) )

## [0.10a] - 2015-04-05

Edited by RizwanK (Attempted to merge functionality from .user. and .console. into one file)

## [0.10] - 2015-03-31

Edited by IAkH/Steppo (Adapted to new classes)

## [0.9c] - 2013-03-17

Edited by dja852 (Added options to select Air Canada site edition)

## [0.9b] - 2015-03-17

Edited by Steppo (Adapted to new classes)

## [0.9a] - 2015-03-02

Edited by Steppo (Rewritten extraction function, readded local storage, adapted Hipmunk)

## [0.9] - 2015-03-01

Edited by Steppo (Adapted script to latest ITA-Changes.., removed local storage to maintain compatibility)
2015-02-26
Edited by IAkH (Added Alitalia,
fixed Air France,
fixed GCM image-width,
introduced local storage)

## [0.8] - 2015-02-19

Edited by Steppo (Added settings menu,
added price breakdown,
added opening fare rules in new window,
made modes switchable,
added click to reveal images,
several tweaks and cleanups)

## [0.7n] - 2015-02-16

Edited by IAkH (Introduced inline mode, added CPM, added Air Canada, added KLM, added Air France)

### 2015-02-11

Edited by Steppo (Bugfix for Hipmunk, added Priceline)

### 2015-01-12

Edited by Steppo (Added Hipmunk, fixed massive bug in leg detection)

### 2015-01-03

Edited by Steppo (Fixed double execution bug caused by iframe of google,
removed searchpage & calendar,
removed unused functions,
serveral other cleanups

### Note

Started to rewrite the extraction-function but stopped.
I think google will change some things in the near future.
I am going to do only minimal maintenance to keep the script working.
Let's see how google is going to develop our beloved matrix.)

### 2015-01-02

Edited by Steppo (Added eventListener to handle switch to ajax,
added support to transform times to 24h-format
added german translation,
several other tweaks & fixes)

### 2015-01-01

Edited by Steppo (Quickfix for Matrix 3.0,
removed most content. Only linking at the moment,
will do the cleanup ASAP)

## [0.6] - 2014-11-12

Edited by Steppo (added quicklinks for currency (USD & EUR),
added quicklinks for selecting flexible dates,
rewrote initial call-function to start the script)

## [0.5] - 2014-11-11

Edited by Steppo (Fixed bug causing close of advanced routing on searchpage,
moved extraction and linkgenerating to seperate functions,
added a lot of information like flightdurations/codeshare/layovertime/arrival-time-object,
complete redesign of data-object, adapted DL/Orbitz/UA/US/Farefreaks/GCM to data-object,
added segmentskip to Orbitz && FF if its just a technical stop,
removed usage of itaLocal (replaced by itaLanguage ) and default values in function ( thx to kulin for this hints) )

## [0.4] - 2014-11-10

Edited by paul21

- Improved united.com booking support
  Edited by Steppo
- Added monthly navigation to calendar
- added retry for details if content is loading slow
- added flights as object (see data var)
- added Farefreaks
- added GCM

## [0.3a] - 2014-11-01

Edited by Steppo

- shortened some regex,
- added support for german version of matrix
