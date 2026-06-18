// lib/site.ts — the ONE source of business facts. Components import from here,
// never inline. Every fact carries a source annotation (recon, 06-15-2026).

export const site = {
  name: "Berkeley Liquors & Deli",
  shortName: "Berkeley",
  // source: storefront name + listing category "liquor store and delicatessen"
  kind: "Bottle shop + sandwich counter",
  city: "Bloomfield",
  state: "NJ",
  zip: "07003",
  street: "129 Franklin St",
  fullAddress: "129 Franklin St, Bloomfield, NJ 07003", // source: Yelp/Roadtrippers/Chamber
  phone: "(973) 748-6340", // source: confirmed across Yelp, Chamber, YellowPages; PIN 486340 = last 6
  phoneHref: "tel:+19737486340",
  established: "1993", // source: Atly listing ("family owned and operated"), "since 1993"

  // Hours, 12-hour AM/PM. source: corroborated across Roadtrippers + Loc8NearMe.
  hours: [
    { days: "Mon to Thu", time: "10 AM to 9 PM" },
    { days: "Fri to Sat", time: "10 AM to 10 PM" },
    { days: "Sunday", time: "12 PM to 7 PM" },
  ],
  // structured for the open/closed pill (24h internal math only; never rendered as 24h)
  hoursByDay: [
    { open: 12, close: 19 }, // Sun
    { open: 10, close: 21 }, // Mon
    { open: 10, close: 21 }, // Tue
    { open: 10, close: 21 }, // Wed
    { open: 10, close: 21 }, // Thu
    { open: 10, close: 22 }, // Fri
    { open: 10, close: 22 }, // Sat
  ],

  // What they carry — confirmed categories only. No invented menu/prices.
  shelves: [
    {
      tag: "Wine",
      line: "A growing wall of reds, whites, and rosé, with the value labels the big stores skip.",
    },
    {
      tag: "Beer",
      line: "The cold case stays stocked, singles to cases, domestic to craft.",
    },
    {
      tag: "Spirits",
      line: "Whiskey, vodka, rum, tequila. The bottle the night asks for is already here.",
    },
  ],

  counter: [
    {
      tag: "Subs",
      line: "Built to order on real bread, stacked the way a corner deli should stack it.",
    },
    {
      tag: "Cold cuts",
      line: "Sliced fresh at the counter, by the pound or laid into a sandwich.",
    },
    {
      tag: "Wrapped to go",
      line: "Paper, twine, out the door. Grab the bottle on the way to the register.",
    },
  ],

  // Real review voices (provenance in COPY.md). Punctuation normalized, no em/en dashes.
  voices: [
    {
      quote:
        "Knowledgeable, friendly, with a great selection of everything. Great prices too.",
      source: "Google review, Nov 2024",
    },
    {
      quote: "The best liquor store in Bloomfield, the workers are amazing.",
      source: "Google review, Nov 2023",
    },
    {
      quote: "Family owned and operated, a community-like atmosphere.",
      source: "Listing review",
    },
  ],

  // qualitative only — the hard 4.6/71 figure was not independently re-verified, so
  // it is NOT rendered as a number anywhere.
  reputationLine: "A neighborhood favorite on the Franklin Street block.",

  mapQuery: "Berkeley+Liquors+%26+Deli+129+Franklin+St+Bloomfield+NJ+07003",
  builtBy: "https://bysemaj.com",
};

export type Site = typeof site;
