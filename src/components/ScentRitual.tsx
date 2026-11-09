import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT } from '../data/content.ts';
import { Sparkles, Droplet } from 'lucide-react';

export const ScentRitual: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedRitualId, setSelectedRitualId] = useState<string>('argan');

  const rituals = CONTENT.sensoryRitual.scents;
  const activeRitual = rituals.find((r) => r.id === selectedRitualId) || rituals[0];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF6F2] border-b border-[#ECDCCE] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-px bg-[#B76E58]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#B76E58] font-semibold">
              {t(CONTENT.sensoryRitual.eyebrow)}
            </span>
            <span className="w-5 h-px bg-[#B76E58]" />
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl text-[#2C221E] font-normal leading-tight italic">
            {t(CONTENT.sensoryRitual.title)}
          </h2>

          <p className="text-xs sm:text-sm text-[#82726B] font-body mt-2.5 leading-relaxed max-w-xl mx-auto">
            {t(CONTENT.sensoryRitual.subtitle)}
          </p>
        </div>

        {/* Ritual Container */}
        <div className="rounded-[28px] sm:rounded-[40px] border border-[#ECDCCE] bg-white p-5 sm:p-10 shadow-sm relative overflow-hidden">
          
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs text-[#B76E58] font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#B76E58]" />
              <span>{t(CONTENT.sensoryRitual.interactiveHint)}</span>
            </span>
          </div>

          {/* 4 Ritual Elixirs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 relative z-10 mb-8">
            {rituals.map((ritual) => {
              const isSelected = ritual.id === selectedRitualId;

              return (
                <button
                  key={ritual.id}
                  type="button"
                  onClick={() => setSelectedRitualId(ritual.id)}
                  className={`min-h-[170px] sm:min-h-[200px] rounded-t-full rounded-b-2xl border p-4 sm:p-6 flex flex-col items-center justify-between transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B76E58] active:scale-98 cursor-pointer ${
                    isSelected
                      ? 'bg-[#2C221E] text-white border-[#B76E58] shadow-md'
                      : 'bg-[#FAF6F2] text-[#2C221E] border-[#ECDCCE] hover:border-[#B76E58]/50'
                  }`}
                  aria-pressed={isSelected}
                >
                  {/* Flacon Cap & Neck */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-3.5 h-1.5 rounded-t-xs mb-1 border transition-colors ${
                        isSelected
                          ? 'bg-[#B76E58] border-[#B76E58]'
                          : 'bg-[#B76E58]/40 border-[#B76E58]/60'
                      }`}
                    />
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-white/10' : 'bg-white shadow-xs'
                      }`}
                    >
                      <Droplet
                        className="w-5 h-5"
                        style={{ color: ritual.color }}
                      />
                    </div>
                  </div>

                  {/* Title & Tag */}
                  <div className="text-center mt-3">
                    <h3 className="font-heading text-base sm:text-lg font-medium tracking-wide">
                      {ritual.name[lang]}
                    </h3>
                    <span
                      className={`text-[10px] block mt-0.5 tracking-wide font-sans ${
                        isSelected ? 'text-[#E89D82]' : 'text-[#82726B]'
                      }`}
                    >
                      {ritual.tag[lang]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Ritual Profile Showcase */}
          <div className="relative z-10 pt-6 border-t border-[#ECDCCE] bg-[#FAF6F2] rounded-2xl p-5 sm:p-6 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center">
              
              <div className="md:col-span-5 text-center md:text-start space-y-1.5">
                <span className="inline-block text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-semibold text-[#B76E58] bg-[#B76E58]/10 px-3 py-0.5 rounded-full border border-[#B76E58]/30">
                  {lang === 'fr'
                    ? 'ÉLIXIR CAPILLAIRE SÉLECTIONNÉ'
                    : 'البروتوكول العلاجي المختار'}
                </span>
                <h4 className="font-heading text-2xl sm:text-3xl text-[#2C221E] font-normal">
                  {activeRitual.name[lang]}
                </h4>
                <p className="text-xs font-semibold text-[#B76E58] tracking-wide">
                  ✦ {activeRitual.tag[lang]}
                </p>
              </div>

              <div className="md:col-span-7 space-y-2 border-t md:border-t-0 md:border-s border-[#ECDCCE] pt-3 md:pt-0 md:ps-6">
                <p className="text-xs sm:text-sm text-[#82726B] leading-relaxed font-body">
                  {activeRitual.notes[lang]}
                </p>
                <div className="text-[10px] sm:text-[11px] text-[#B76E58] font-medium">
                  ✦ {lang === 'fr'
                    ? 'Soins intégrés lors de vos prestations au salon Joumana Hair Style'
                    : 'عناية متكاملة متضمنة في جلسات صالون جمانة هير ستايل'}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
