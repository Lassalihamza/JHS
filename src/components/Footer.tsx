import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT } from '../data/content.ts';
import { MapPin, Phone, Instagram, ExternalLink, Clock, Sparkles } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();

  const hasPhone = Boolean(CONTENT.brand.phoneRaw && CONTENT.brand.phoneRaw.trim().length > 0);
  const hasAddress = Boolean(CONTENT.brand.address[lang] && CONTENT.brand.address[lang].trim().length > 0);
  const hasHours = Boolean(CONTENT.brand.openingHoursPlaceholder[lang] && CONTENT.brand.openingHoursPlaceholder[lang].trim().length > 0);

  return (
    <footer className="bg-[#2C221E] text-white pt-16 pb-12 px-6 md:px-16 border-t border-[#B76E58]/30 relative overflow-hidden">
      {/* Background Subtle Warm Ambient Glow */}
      <div className="absolute bottom-0 start-1/2 -translate-x-1/2 w-[650px] h-[320px] rounded-full bg-[radial-gradient(circle,rgba(183,110,88,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Top Subtle Floral Accent SVG divider */}
      <div className="w-8 h-8 text-[#E89D82]/60 mx-auto mb-10 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <Sparkles className="w-6 h-6 text-[#E89D82]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 4-COLUMN RESPONSIVE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Column 1 — Brand Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center">
              <Logo variant="full" size="md" className="h-16 w-auto max-w-[220px]" />
            </div>

            {/* Bio Summary */}
            <p className="text-sm text-[#E2D5CD] leading-relaxed max-w-sm font-body">
              {t(CONTENT.brand.tagline)}
            </p>

            {/* Instagram Social Pill */}
            <div className="pt-1">
              <a
                href={CONTENT.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#B76E58]/60 hover:border-[#B76E58] bg-[#1F1714] text-xs text-[#E89D82] hover:text-white transition-all shadow-xs"
              >
                <Instagram className="w-3.5 h-3.5 shrink-0" />
                <span dir="ltr" className="font-semibold">{CONTENT.brand.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Column 2 — Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold tracking-[0.2em] text-[#E89D82] uppercase font-sans">
              {lang === 'fr' ? 'NAVIGATION' : 'التنقل'}
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E2D5CD]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#E89D82] hover:underline underline-offset-4 transition-colors text-start cursor-pointer"
                >
                  {t(CONTENT.nav.home)}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#E89D82] hover:underline underline-offset-4 transition-colors text-start cursor-pointer"
                >
                  {t(CONTENT.nav.services)}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#E89D82] hover:underline underline-offset-4 transition-colors text-start cursor-pointer"
                >
                  {t(CONTENT.nav.gallery)}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#E89D82] hover:underline underline-offset-4 transition-colors text-start cursor-pointer"
                >
                  {t(CONTENT.nav.about)}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#E89D82] hover:underline underline-offset-4 transition-colors text-start cursor-pointer"
                >
                  {t(CONTENT.nav.contact)}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 — Coordonnées & Accès */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold tracking-[0.2em] text-[#E89D82] uppercase font-sans">
              {lang === 'fr' ? 'LOCALISATION & MAPS' : 'الموقع والوصول'}
            </h4>
            
            <div className="space-y-3 text-sm text-[#E2D5CD]">
              {/* Address or Location City */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B76E58] shrink-0 mt-1" />
                <span className="leading-snug">
                  {hasAddress ? t(CONTENT.brand.address) : (lang === 'fr' ? 'Joumana Coiffure • Algérie' : 'جمانة كوافير • الجزائر')}
                </span>
              </div>

              {/* Direct Maps Link */}
              <div>
                <a
                  href={CONTENT.brand.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#E89D82] hover:underline"
                >
                  <span>{t(CONTENT.contactPage.openMapsBtn)}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>

              {/* Phone (conditional) */}
              {hasPhone && (
                <div className="pt-1">
                  <a
                    href={`tel:${CONTENT.brand.phoneRaw}`}
                    className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-mono text-white hover:text-[#E89D82] transition-colors"
                  >
                    <span className="text-[#B76E58]">📞</span>
                    <span dir="ltr" className="font-semibold tracking-wider">
                      {CONTENT.brand.phoneFormatted}
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Column 4 — Rendez-vous & Information */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold tracking-[0.2em] text-[#E89D82] uppercase font-sans">
              {lang === 'fr' ? "RENDEZ-VOUS & DISPONIBILITÉS" : 'المواعيد والحجز'}
            </h4>
            
            <div className="space-y-3 text-sm text-[#E2D5CD]">
              {/* Hours Badge (conditional) */}
              {hasHours ? (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#B76E58] shrink-0" />
                  <span className="inline-block px-3 py-1 rounded-full bg-[#1F1714] border border-[#B76E58]/40 text-[#E89D82] text-xs font-semibold tracking-wide shadow-xs">
                    {t(CONTENT.brand.openingHoursPlaceholder)}
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#B76E58] shrink-0" />
                  <span className="inline-block px-3 py-1 rounded-full bg-[#1F1714] border border-[#B76E58]/40 text-[#E89D82] text-xs font-semibold tracking-wide shadow-xs">
                    {lang === 'fr' ? 'Sur rendez-vous' : 'حسب الموعد'}
                  </span>
                </div>
              )}

              {/* Booking Note */}
              <p className="text-xs text-[#E2D5CD] leading-relaxed font-body">
                {lang === 'fr'
                  ? 'Planifiez votre séance via notre formulaire en ligne ou écrivez-nous directement sur Instagram @joumana.hairstyle.'
                  : 'احجزي موعدكِ عبر استمارة الموقع أو راسلينا مباشرة على حسابنا في إنستغرام @joumana.hairstyle.'}
              </p>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-white/10 my-8" />

        {/* Sub-bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#A89F99]">
          {/* Left: Disclaimer */}
          <p className="font-sans font-medium text-[#E2D5CD] text-center md:text-start leading-relaxed">
            {t(CONTENT.brand.footerDisclaimer)}
          </p>

          {/* Right: Copyright */}
          <p className="text-[#A89F99] text-center md:text-end whitespace-nowrap">
            © 2026 Joumana Hair Style • Joumana Coiffure, Algérie
          </p>
        </div>

      </div>
    </footer>
  );
};
