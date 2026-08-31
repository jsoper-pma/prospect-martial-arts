// ── Central site configuration ─────────────────────────────────────
// Single source of truth for contact info, URLs, and brand data.

export const SITE_URL = "https://prospectma.com";

export const BOOKING_URL = "https://prospect-martial-arts.gymdesk.com/book/v/Ayw2q";

// Official Gymdesk embed IDs (trial schedule + trial booking form).
export const GYMDESK_WIDGET = {
  gym: "AngPo",
  schedule: "lQwyO",
  form: "Ayw2q",
  labelColor: "#FFFFFF",
  placeholderColor: "#FFFFFF",
} as const;

export const TRIAL_HASH = "#trial";
export const TRIAL_HOME_HREF = "/#trial";

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
