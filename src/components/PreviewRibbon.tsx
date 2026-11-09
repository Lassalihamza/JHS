import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT } from '../data/content.ts';
import { X, Sparkles } from 'lucide-react';

export const PreviewRibbon: React.FC = () => {
  const { t } = useLanguage();
  const [minimized, setMinimized] = useState(false);

  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        className="fixed bottom-20 start-4 md:bottom-5 md:start-5 z-30 min-h-[44px] min-w-[44px] p-2.5 rounded-full bg-[#2C221E]/95 border border-[#B76E58]/40 text-[#E89D82] shadow-lg flex items-center justify-center transition-transform active:scale-95"
        title={t(CONTENT.brand.previewRibbon)}
        aria-label={t(CONTENT.brand.previewRibbon)}
      >
        <Sparkles className="w-4 h-4" />
      </button>
    );
  }

  return (
    <aside
      aria-label="Demonstration preview notification"
      className="fixed bottom-20 start-4 md:bottom-5 md:start-5 z-30 flex items-center gap-2 bg-[#2C221E]/95 border border-[#B76E58]/40 rounded-full px-3.5 py-1.5 shadow-xl text-white text-xs font-sans select-none"
    >
      {/* Rose Gold Indicator Dot */}
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B76E58]" />
      </span>

      <span className="text-[10px] sm:text-[11px] font-medium tracking-wider text-white whitespace-nowrap">
        {t(CONTENT.brand.previewRibbon)}
      </span>

      {/* Minimize button */}
      <button
        onClick={() => setMinimized(true)}
        className="ms-1 p-1 text-[#E89D82] hover:text-white rounded-full transition-colors min-h-[32px] min-w-[32px] flex items-center justify-center"
        aria-label="Réduire la notification"
      >
        <X className="w-3 h-3" />
      </button>
    </aside>
  );
};
