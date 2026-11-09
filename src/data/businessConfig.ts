/**
 * Central business configuration for Joumana Hair Style.
 * Missing / unconfirmed data fields are intentionally left empty ('')
 * so UI components automatically hide them without rendering bracketed placeholders.
 */

export const BUSINESS_CONFIG = {
  name: 'Joumana Hair Style',
  shortName: 'Joumana Coiffure',
  logoArtworkSpelling: 'Jomanna Hair Style', // Note: Logo circular artwork bears this spelling
  instagramHandle: '@joumana.hairstyle',
  instagramUrl: 'https://www.instagram.com/joumana.hairstyle',
  mapsUrl: 'https://maps.app.goo.gl/Yqeq4uJ4eQYC1qCP7',
  
  // Unconfirmed fields: kept empty as mandated
  phone: '', // [NOT PROVIDED]
  phoneFormatted: '',
  address: '', // [NOT PROVIDED]
  city: '', // [NOT PROVIDED - Algeria]
  hours: '', // [NOT PROVIDED]
  
  // Consultation pricing note
  pricingConsultation: {
    fr: 'Sur consultation / Sur devis',
    ar: 'حسب الاستشارة والتشخيص',
  },
};
