import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT, ServiceItem } from '../data/content.ts';
import { assets } from '../data/assets.ts';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

interface HeroProps {
  onNavigate: (tab: string, prefillService?: string) => void;
  onOpenServiceDetail: (service: ServiceItem) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigate,
  onOpenServiceDetail,
}) => {
  const { lang, t, isRTL } = useLanguage();
  const [archImgError, setArchImgError] = useState(false);

  const balayageService = CONTENT.services.find(
    (s) => s.id === 'balayage-signature'
  );

  return (
    <section className="min-h-[85vh] sm:min-h-[90vh] flex items-center relative isolate overflow-hidden bg-[#FAF6F2] text-[#2C221E] py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
      {/* 1. Base Canvas */}
      <div className="absolute inset-0 bg-[#FAF6F2] -z-30" />

      {/* 2. Ambient Rose Gold Aura */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            'radial-gradient(circle at 80% 35%, rgba(232, 157, 130, 0.14) 0%, rgba(183, 110, 88, 0.08) 45%, transparent 70%)',
        }}
      />

      {/* 3. Subtle Texture Grain Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6F2]/80 via-transparent to-[#FAF6F2]/90 -z-10 pointer-events-none" />

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-start">
            
            {/* Location & Women Only Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-sans tracking-widest uppercase bg-white text-[#B76E58] border border-[#EADBCE] font-semibold shadow-2xs">
                <span>✦</span>
                <span>{t(CONTENT.hero.locationBadge)}</span>
              </span>
              <span className="text-xs text-[#82726B] font-sans tracking-wide">
                {t(CONTENT.hero.womenOnly)}
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-heading text-[clamp(2.2rem,5.5vw+0.5rem,3.75rem)] font-normal text-[#2C221E] leading-[1.14] tracking-wide [text-wrap:balance]">
              {t(CONTENT.hero.title)}
            </h1>

            {/* Salon Bio Summary */}
            <p className="text-xs sm:text-sm md:text-base text-[#82726B] font-body leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t(CONTENT.hero.description)}
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="min-h-[48px] px-7 py-3.5 bg-[#B76E58] hover:bg-[#a65d48] text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-md transition-transform active:scale-98 flex items-center justify-center gap-2 group whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B76E58]"
              >
                <span>
                  {lang === 'fr'
                    ? 'PRENDRE RENDEZ-VOUS'
                    : 'طلب موعد بالصالون'}
                </span>
                <ArrowRight
                  className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                    isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''
                  }`}
                />
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={() => {
                  if (balayageService) {
                    onOpenServiceDetail(balayageService);
                  } else {
                    onNavigate('services');
                  }
                }}
                className="min-h-[48px] px-5 py-3.5 border border-[#B76E58]/45 bg-white text-[#B76E58] hover:bg-[#FAF6F2] rounded-full text-xs font-medium tracking-wider uppercase transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-2xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#B76E58]" />
                <span>{t(CONTENT.hero.ctaSecondary)}</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 border-t border-[#EADBCE] flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-[#82726B]">
              <span className="flex items-center gap-1.5">
                <span className="text-[#B76E58]">✦</span>
                {lang === 'fr' ? 'Balayage & Mèches' : 'بالياج وخصلات'}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#B76E58]">✦</span>
                {lang === 'fr' ? 'Coloration & Burgundy' : 'صبغات وبورغندي'}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#B76E58]">✦</span>
                {lang === 'fr' ? 'Soins & Coiffure' : 'تصفيف وعناية'}
              </span>
              {CONTENT.brand.phoneRaw && (
                <a
                  href={`tel:${CONTENT.brand.phoneRaw}`}
                  className="min-h-[44px] flex items-center gap-1.5 hover:text-[#B76E58] transition-colors"
                  aria-label={`Téléphone: ${CONTENT.brand.phoneFormatted}`}
                >
                  <span className="text-[#B76E58]">✦</span>
                  <PhoneCall className="w-3.5 h-3.5 text-[#B76E58]" />
                  <span dir="ltr" className="inline-block font-semibold text-[#2C221E]">
                    {CONTENT.brand.phoneFormatted}
                  </span>
                </a>
              )}
            </div>
          </div>

          {/* Visual Column: Sculptural Beauty Arch */}
          <div className="lg:col-span-5 flex justify-center mt-4 lg:mt-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
              <div className="relative aspect-[4/5] w-full rounded-t-full rounded-b-3xl overflow-hidden border border-[#EADBCE] shadow-xl bg-white">
                <img
                  src={!archImgError ? assets.balayageWaves : assets.heroBackdrop}
                  alt="Joumana Hair Style Coiffure & Balayage"
                  width={400}
                  height={500}
                  loading="eager"
                  className="w-full h-full object-cover"
                  onError={() => setArchImgError(true)}
                  referrerPolicy="no-referrer"
                />

                {/* Vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C221E]/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Badge at base of arch */}
                <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-sm border border-[#EADBCE] shadow-md text-center">
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-[#B76E58] block mb-0.5">
                    {lang === 'fr'
                      ? 'ART DU BALAYAGE & COULEUR'
                      : 'فن البالياج وتلوين الشعر'}
                  </span>
                  <span className="font-heading text-base sm:text-lg text-[#2C221E] font-normal block">
                    {t(CONTENT.hero.floatingBadge)}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
