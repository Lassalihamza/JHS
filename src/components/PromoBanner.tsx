import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT } from '../data/content.ts';
import { assets } from '../data/assets.ts';
import { ArrowRight, Sparkles, Check } from 'lucide-react';

interface PromoBannerProps {
  onNavigate: (tab: string, prefillCategoryOrService?: string) => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onNavigate }) => {
  const { lang, t, isRTL } = useLanguage();
  const [imgError, setImgError] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-[#FAF6F2] text-[#2C221E] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Screen Card */}
        <div className="rounded-[28px] sm:rounded-3xl bg-white border border-[#EADBCE] p-5 sm:p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center shadow-lg">
          
          {/* Visual Frame */}
          <div className="md:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-auto sm:h-80 relative shadow-md border border-[#EADBCE] bg-[#FAF6F2] group">
              {!imgError ? (
                <img
                  src={assets.balayageWaves}
                  alt="Joumana Hair Style Balayage & Coloration"
                  width={400}
                  height={320}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={() => setImgError(true)}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-white to-[#FAF6F2] text-center">
                  <span className="font-heading text-lg text-[#2C221E]">Balayage Lumineux &amp; Coloration</span>
                  <span className="text-[10px] tracking-widest text-[#B76E58] uppercase mt-1">Joumana Hair Style</span>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#2C221E]/60 via-transparent to-transparent pointer-events-none" />

              {/* Highlight Badge */}
              <div className="absolute top-3 start-3 w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white/95 border-2 border-[#B76E58] flex flex-col items-center justify-center text-center shadow-md z-10">
                <span className="font-heading text-sm sm:text-base font-bold text-[#B76E58] leading-none">
                  JHS
                </span>
                <span className="text-[7.5px] sm:text-[8px] font-sans font-semibold tracking-widest text-[#82726B] uppercase mt-0.5">
                  EXPERTISE
                </span>
              </div>

              {/* Corner Badge */}
              <div className="absolute bottom-3 end-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs border border-[#EADBCE] text-[9px] sm:text-[10px] text-[#2C221E] tracking-wider uppercase font-medium shadow-2xs">
                {lang === 'fr' ? 'Sur consultation' : 'حسب الاستشارة'}
              </div>
            </div>
          </div>

          {/* Offer Details */}
          <div className="md:col-span-7 space-y-4">
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[#B76E58] bg-[#B76E58]/10 px-3 py-1 rounded-full border border-[#B76E58]/30">
                <Sparkles className="w-3 h-3 text-[#B76E58]" />
                <span>
                  {lang === 'fr'
                    ? 'EXPERTISE DU CHEVEU'
                    : 'خبرة متميزة في الشعر'}
                </span>
              </span>

              <span className="text-xs text-[#82726B] font-medium">
                {lang === 'fr'
                  ? 'Diagnostic sur mesure'
                  : 'تشخيص مخصص لكل زائرة'}
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#2C221E] font-normal leading-tight tracking-wide [text-wrap:balance]">
              {lang === 'fr'
                ? 'Balayage Fondu, Mèches & Nuances Burgundy'
                : 'بالياج انسيابي، خصلات متألقة وتدرجات البورغندي'}
            </h3>

            <p className="text-xs sm:text-sm text-[#82726B] font-body leading-relaxed max-w-xl">
              {t(CONTENT.promoBanner.description)}
            </p>

            <div className="pt-1 border-t border-[#EADBCE] flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-[#82726B]">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#B76E58] shrink-0" />
                <span>{lang === 'fr' ? 'Fondu naturel sans effet racine' : 'تدرج طبيعي بدون فوارق حادة'}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#B76E58] shrink-0" />
                <span>{lang === 'fr' ? 'Protection de la fibre capillaire' : 'حماية قصوى لألياف الشعر'}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#B76E58] shrink-0" />
                <span>{lang === 'fr' ? 'Brillance soyeuse longue durée' : 'لمعان حريري فائق الثبات'}</span>
              </span>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => onNavigate('contact', 'Balayage Signature & Éclaircissement Fondu')}
                className="min-h-[48px] px-7 py-3 bg-[#B76E58] hover:bg-[#a65d48] text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-md transition-transform active:scale-98 flex items-center justify-center gap-2 group whitespace-nowrap"
              >
                <span>
                  {lang === 'fr'
                    ? 'DEMANDER UN RENDEZ-VOUS'
                    : 'طلب موعد في الصالون'}
                </span>
                <ArrowRight
                  className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                    isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''
                  }`}
                />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('services', 'balayage')}
                className="min-h-[48px] px-5 py-3 rounded-full border border-[#EADBCE] hover:border-[#B76E58] text-[#2C221E] text-xs font-medium tracking-wider uppercase transition-colors text-center"
              >
                {lang === 'fr'
                  ? 'VOIR LES PRESTATIONS'
                  : 'استكشاف جميع الخدمات'}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
