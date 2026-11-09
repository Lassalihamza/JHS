import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT } from '../data/content.ts';
import { Logo } from './Logo.tsx';
import { Phone, Globe, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onReplayIntro: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  onReplayIntro,
}) => {
  const { lang, toggleLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: t(CONTENT.nav.home) },
    { id: 'services', label: t(CONTENT.nav.services) },
    { id: 'gallery', label: t(CONTENT.nav.gallery) },
    { id: 'about', label: t(CONTENT.nav.about) },
    { id: 'contact', label: t(CONTENT.nav.contact) },
  ];

  return (
    <header
      className={`sticky top-0 z-30 w-full transition-colors duration-200 ${
        isScrolled
          ? 'bg-white/95 border-b border-[#EADBCE] shadow-sm py-2 sm:py-2.5 backdrop-blur-md'
          : 'bg-[#FAF6F2]/90 border-b border-[#EADBCE]/70 py-2 sm:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo Column */}
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="flex items-center text-start group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B76E58] rounded-lg p-1 min-h-[44px]"
            aria-label="Joumana Hair Style"
          >
            {/* Mobile (compact header slot): Mark only */}
            <Logo variant="mark" size="sm" className="sm:hidden" />

            {/* Desktop header: JHS Mark + elegant wordmark */}
            <div className="hidden sm:flex items-center gap-2.5">
              <Logo variant="mark" size="md" />
              <div className="flex flex-col text-start">
                <span className="font-heading text-lg font-medium tracking-[0.14em] text-[#2C221E] leading-none uppercase">
                  JOUMANA HAIR STYLE
                </span>
                <span className="font-body text-[8.5px] font-semibold tracking-[0.25em] text-[#B76E58] leading-tight uppercase mt-1">
                  SALON DE COIFFURE
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Nav Links (Hidden on mobile) */}
          <nav
            aria-label="Navigation principale"
            className="hidden md:flex items-center p-1 bg-white/80 border border-[#EADBCE] rounded-full shadow-2xs"
          >
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => onNavigate(link.id)}
                  className={`min-h-[38px] px-3.5 lg:px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B76E58] ${
                    isActive
                      ? 'bg-[#B76E58] text-white font-semibold shadow-xs'
                      : 'text-[#2C221E] hover:text-[#B76E58] hover:bg-[#FAF6F2]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Quick Action Items: Intro replay, Language switch, Phone call (if configured), Book CTA */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Replay Intro Button */}
            <button
              type="button"
              onClick={onReplayIntro}
              className="min-h-[44px] min-w-[44px] sm:min-w-0 inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs text-[#B76E58] hover:text-[#2C221E] bg-white hover:bg-[#F5EBE6] border border-[#EADBCE] transition-colors shadow-2xs"
              title={t(CONTENT.nav.replayIntro)}
              aria-label={t(CONTENT.nav.replayIntro)}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B76E58]" />
              <span className="hidden sm:inline font-medium text-[11px]">{t(CONTENT.nav.replayIntro)}</span>
            </button>

            {/* Bilingual Switcher */}
            <button
              type="button"
              onClick={toggleLang}
              className="min-h-[44px] px-3 py-1.5 rounded-full text-xs text-[#2C221E] hover:text-[#B76E58] bg-white/90 border border-[#EADBCE] hover:border-[#B76E58] transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B76E58]"
              title="Changer de langue / تغيير اللغة"
              aria-label={`Changer de langue vers ${lang === 'fr' ? 'Arabe' : 'Français'}`}
            >
              <Globe className="w-3.5 h-3.5 text-[#B76E58]" />
              <span className="font-semibold text-xs tracking-wide">
                {lang === 'fr' ? 'العربية' : 'Français'}
              </span>
            </button>

            {/* Quick Call on mobile - only rendered if phone is configured */}
            {CONTENT.brand.phoneRaw && (
              <a
                href={`tel:${CONTENT.brand.phoneRaw}`}
                className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-white border border-[#EADBCE] text-[#B76E58] hover:bg-[#F5EBE6] transition-colors"
                aria-label={`Appeler ${CONTENT.brand.name}`}
              >
                <Phone className="w-4 h-4" />
              </a>
            )}

            {/* Primary Booking CTA (Desktop only) */}
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="hidden md:inline-flex items-center justify-center min-h-[40px] px-5 py-2 text-xs font-semibold tracking-widest uppercase bg-[#B76E58] hover:bg-[#a65d48] text-white rounded-full transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B76E58] whitespace-nowrap"
            >
              {t(CONTENT.nav.bookCta)}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
