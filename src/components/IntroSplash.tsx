import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { Globe, ArrowRight, X } from 'lucide-react';
import { Logo } from './Logo.tsx';
import { CONTENT } from '../data/content.ts';

interface IntroSplashProps {
  onDismiss: () => void;
}

export const IntroSplash: React.FC<IntroSplashProps> = ({ onDismiss }) => {
  const { lang, setLang, isRTL, t } = useLanguage();
  const [progress, setProgress] = useState(0);

  // Strictly 2.0-second total duration
  useEffect(() => {
    const totalDuration = 2000;
    const intervalMs = 25;
    const step = (intervalMs / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalMs);

    const autoDismissTimeout = setTimeout(() => {
      onDismiss();
    }, totalDuration);

    return () => {
      clearInterval(timer);
      clearTimeout(autoDismissTimeout);
    };
  }, [onDismiss]);

  return (
    <motion.aside
      key="intro-splash"
      initial={{ opacity: 1 }}
      exit={{ y: '-100%', opacity: 0.96 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      role="dialog"
      aria-modal="true"
      aria-label="Joumana Hair Style — Salon de Coiffure"
      className="fixed inset-0 z-[100] overflow-hidden bg-[#FAF6F2] text-[#2C221E] flex items-center justify-center p-4 select-none touch-none"
    >
      {/* Delicate Botanical Foliage Silhouette */}
      <div
        aria-hidden="true"
        className="absolute -top-12 -left-12 w-72 h-72 sm:w-96 sm:h-96 opacity-15 pointer-events-none text-[#E89D82]"
      >
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full">
          <path d="M10 10 Q100 80 180 170 C140 130 90 90 10 10 Z" />
          <path d="M10 40 C70 60 120 110 160 160 C110 110 60 70 10 40 Z" />
          <path d="M30 10 C60 70 110 120 160 150 C110 100 70 50 30 10 Z" />
        </svg>
      </div>

      <div
        aria-hidden="true"
        className="absolute -bottom-12 -right-12 w-72 h-72 sm:w-96 sm:h-96 opacity-15 pointer-events-none text-[#B76E58]"
      >
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full">
          <path d="M190 190 Q100 120 20 30 C60 70 110 110 190 190 Z" />
          <path d="M190 160 C130 140 80 90 40 40 C90 90 140 130 190 160 Z" />
          <path d="M170 190 C140 130 90 80 40 50 C90 100 130 150 170 190 Z" />
        </svg>
      </div>

      {/* Top Floating Bar: Language Switch & Skip Button */}
      <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-6 z-40 flex items-center justify-between">
        {/* Language Switch */}
        <div className="flex items-center gap-1 p-1 rounded-full bg-white/90 border border-[#EADBCE] shadow-sm">
          <Globe className="w-3.5 h-3.5 text-[#B76E58] ms-2 me-1 shrink-0" />
          <button
            type="button"
            onClick={() => setLang('fr')}
            className={`min-h-[36px] min-w-[36px] px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-opacity ${
              lang === 'fr'
                ? 'bg-[#B76E58] text-white shadow-2xs'
                : 'text-[#2C221E] hover:text-[#B76E58]'
            }`}
            aria-label="Français"
          >
            FR
          </button>
          <button
            type="button"
            onClick={() => setLang('ar')}
            className={`min-h-[36px] min-w-[36px] px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-opacity ${
              lang === 'ar'
                ? 'bg-[#B76E58] text-white shadow-2xs'
                : 'text-[#2C221E] hover:text-[#B76E58]'
            }`}
            aria-label="العربية"
          >
            عربي
          </button>
        </div>

        {/* Skip button */}
        <button
          type="button"
          onClick={onDismiss}
          className="min-h-[44px] px-4 py-2 rounded-full bg-white/95 border border-[#EADBCE] text-xs font-medium text-[#2C221E] hover:text-[#B76E58] transition-colors flex items-center gap-1.5 shadow-sm"
          aria-label={lang === 'fr' ? "Passer l'intro" : 'تخطي المقدمة'}
        >
          <span>{lang === 'fr' ? 'Passer' : 'تخطي'}</span>
          <X className="w-3.5 h-3.5 text-[#B76E58]" />
        </button>
      </div>

      {/* Centerpiece Showcase */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="relative z-20 w-full max-w-[390px] rounded-t-[190px] rounded-b-[28px] border border-[#EADBCE] bg-gradient-to-b from-white to-[#FAF6F2] p-6 sm:p-8 flex flex-col items-center text-center shadow-xl"
      >
        {/* Inner Arch Hairline */}
        <div className="absolute inset-1.5 pointer-events-none rounded-t-[182px] rounded-b-[22px] border border-[#B76E58]/15" />

        {/* Logo Display */}
        <div className="relative w-full flex items-center justify-center min-h-[110px] mb-3">
          <Logo variant="full" size="xl" className="h-28 sm:h-32 w-auto max-w-[280px]" />
        </div>

        {/* Location Subtitle */}
        <div className="inline-block px-3.5 py-1 rounded-full bg-white border border-[#EADBCE] mb-3 shadow-2xs">
          <span className="text-[10px] font-semibold tracking-[0.2em] text-[#B76E58] uppercase">
            {t(CONTENT.splash.cityLabel)}
          </span>
        </div>

        {/* Bio Tagline */}
        <p className="text-xs text-[#82726B] font-body leading-relaxed max-w-xs mb-6">
          {t(CONTENT.splash.bio)}
        </p>

        {/* Instant Enter Action */}
        <button
          type="button"
          onClick={onDismiss}
          className="w-full min-h-[48px] px-6 py-3 rounded-full bg-[#B76E58] hover:bg-[#a65d48] text-white font-semibold text-xs tracking-wider uppercase transition-transform active:scale-98 flex items-center justify-center gap-2 shadow-md"
        >
          <span>{t(CONTENT.splash.enterCta)}</span>
          <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
        </button>

        {/* 2.0s Golden Progress Bar */}
        <div className="w-full mt-5 pt-3 border-t border-[#EADBCE] flex flex-col items-center gap-1.5">
          <div className="w-28 h-1 bg-[#EADBCE] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#B76E58] to-[#E89D82] transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[9px] text-[#82726B] tracking-widest uppercase">
            {lang === 'fr' ? 'Immersion 2s' : 'لحظات ونبدأ'}
          </span>
        </div>
      </motion.div>
    </motion.aside>
  );
};
