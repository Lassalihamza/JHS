import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { CONTENT } from '../data/content.ts';
import { useLanguage } from '../context/LanguageContext.tsx';

export const FloatingCallButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { t } = useLanguage();

  // If no phone is provided, cleanly hide the floating button without broken tel: links
  if (!CONTENT.brand.phoneRaw) {
    return null;
  }

  return (
    <div className="fixed bottom-20 end-4 md:bottom-6 md:end-6 z-30 flex items-center gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div
          role="tooltip"
          className="bg-white/95 backdrop-blur-md text-[#2C221E] border border-[#B76E58]/30 shadow-xl px-3.5 py-1.5 rounded-2xl text-xs font-sans whitespace-nowrap pointer-events-none"
        >
          <span className="text-[#B76E58] font-semibold mr-1.5 rtl:ml-1.5 rtl:mr-0">✦</span>
          <span dir="ltr" className="inline-block font-semibold">
            {CONTENT.brand.phoneFormatted}
          </span>
          <span className="text-[#82726B] text-[10px] block text-center mt-0.5">
            {t(CONTENT.nav.callUs)}
          </span>
        </div>
      )}

      {/* Button */}
      <a
        href={`tel:${CONTENT.brand.phoneRaw}`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        className="w-12 h-12 md:w-13 md:h-13 rounded-full bg-white text-[#B76E58] border-2 border-[#B76E58] shadow-xl flex items-center justify-center transition-transform active:scale-95 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B76E58]"
        aria-label={`Appeler ${CONTENT.brand.name}`}
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
};
