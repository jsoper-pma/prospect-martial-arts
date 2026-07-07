// ── Central site configuration ─────────────────────────────────────
// Single source of truth for contact info, URLs, and brand data.

export const SITE_URL = "https://prospect-martial-arts-ct.com"; // TODO: confirm production domain

export const BOOKING_URL = "https://prospect-martial-arts.gymdesk.com/book/v/Ayw2q";

export const PHONE_DISPLAY = "(203) 441-5358";
export const PHONE_HREF = "tel:2034415358";
export const EMAIL = "info@prospectma.com";

export const ADDRESS = {
  street: "73 Waterbury Road, Unit 2",
  city: "Prospect",
  state: "CT",
  zip: "06712",
  full: "73 Waterbury Road, Unit 2, Prospect, CT 06712",
};

export const GEO = {
  latitude: 41.514047,
  longitude: -72.986015,
};

export const MAPS_LINK = "https://www.google.com/maps/place/Prospect+Martial+Arts/@41.514047,-72.9885899,17z";

// Google Maps embed centered on the real coordinates.
export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${GEO.latitude},${GEO.longitude}&z=16&output=embed`;

export const SOCIALS = {
  facebook: "https://www.facebook.com/Pmatangsoodo",
  instagram: "https://www.instagram.com/prospectmartialartsct",
  youtube: "https://www.youtube.com/@ProspectMartialArts",
};

export const REVIEWS = {
  rating: "5.0",
  count: 64,
};

// ── Limited-time offer (single place to update or disable) ─────────
// Set `active: false` to hide the offer sections on the program pages.
export const SUMMER_OFFER = {
  active: true,
  label: "Summer Special · 10 Spots Available",
  title: "Summer Kickoff Special",
  deadline: "August 31",
  weeks: 10,
  preschoolPrice: "$149",
  youthPrice: "$169",
  adultPrice: "$169",
};
