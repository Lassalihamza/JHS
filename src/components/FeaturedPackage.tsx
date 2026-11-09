import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT } from '../data/content.ts';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

interface FeaturedPackageProps {
  onNavigate: (tab: string, prefillService?: string) => void;
}

export const FeaturedPackage: React.FC<FeaturedPackageProps> = ({
  onNavigate,
}) => {
  const { lang, t, isRTL } = useLanguage();

  const ritualSteps = [
    {
      step: 1,
      title: {
        fr: 'Diagnostic Visagiste & Colorimétrie',
        ar: 'تشخيص مخصص للون وتناسق الملامح',
      },
      desc: {
        fr: 'Analyse précise de la santé du cheveu et sélection de la nuance idéale en accord avec votre carnation.',
        ar: 'فحص صحة ألياف الشعر واختيار الدرجة المثالية التي تبرز جمال ملامحكِ وبشرتكِ.',
      },
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3a9 9 0 0 0 0 18" />
        </svg>
      ),
    },
    {
      step: 2,
      title: {
        fr: 'Technique Balayage & Voile de Mèches',
        ar: 'تطبيق تقنية البالياج والخصلات الدقيقة',
      },
      desc: {
        fr: 'Application experte au pinceau pour un dégradé de lumière fluide, naturel et sans démarcation.',
        ar: 'توزيع متقن بالفرشاة لتفتيح الخصلات بتدرج انسيابي طبيعي خالٍ من الخطوط الحادة.',
      },
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      ),
    },
    {
      step: 3,
      title: {
        fr: 'Patinage & Neutralisation des Reflets',
        ar: 'رنساج متوازن وتثبيت لمعان اللون',
      },
      desc: {
        fr: 'Application d\'une patine nourrissante pour fixer les reflets chauds ou froids et sceller la brillance.',
        ar: 'جلسة رنساج خاصة لضبط الدرجة المرغوبة بدقة ومنح الشعر لمعاناً مشرقاً يدوم طويلاً.',
      },
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2">
          <path d="M12 2v6" />
          <path d="M12 18v4" />
          <path d="M4.93 4.93l4.24 4.24" />
          <path d="M14.83 14.83l4.24 4.24" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      step: 4,
      title: {
        fr: 'Soin Profond & Brushing Wavy',
        ar: 'ماسك ترميمي وتصفيف ويفي ساحر',
      },
      desc: {
        fr: 'Masque scellant enrichi en agents protecteurs, suivi d\'un coiffage souple pour révéler chaque nuance.',
        ar: 'علاج مغذٍ لإغلاق حراشف الشعر يتبعه سيشوار احترافي وتموجات ويفي تبرز تناسق الألوان.',
      },
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2">
          <path d="M12 21a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9s-9 4.03-9 9a9 9 0 0 0 9 9Z" />
          <path d="M12 7v5l3 3" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF6F2] text-[#2C221E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Card Canvas */}
        <div className="bg-white border border-[#EADBCE] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-lg">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Header Badge & Title */}
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase bg-[#B76E58]/15 text-[#B76E58] px-3.5 py-1 rounded-full border border-[#B76E58]/30 shadow-2xs">
                    <Sparkles className="w-3 h-3 text-[#B76E58]" />
                    <span>{t(CONTENT.featuredPackage.badge)}</span>
                  </span>
                  <span className="text-xs text-[#82726B] tracking-wide font-medium">
                    {t(CONTENT.featuredPackage.priceNote)}
                  </span>
                </div>

                <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-normal text-[#2C221E] tracking-wide leading-tight [text-wrap:balance]">
                  {t(CONTENT.featuredPackage.title)}
                </h2>

                <p className="text-xs sm:text-sm text-[#82726B] font-body leading-relaxed mt-2 max-w-xl">
                  {t(CONTENT.featuredPackage.subtitle)}
                </p>
              </div>

              {/* Steps Timeline */}
              <div className="relative pt-1 pb-1">
                <div
                  className={`absolute top-4 bottom-4 w-px bg-gradient-to-b from-[#B76E58] via-[#E89D82]/40 to-transparent ${
                    isRTL ? 'right-4 sm:right-5' : 'left-4 sm:left-5'
                  }`}
                />

                <div className="space-y-5 sm:space-y-6 relative">
                  {ritualSteps.map((stepItem) => (
                    <div
                      key={stepItem.step}
                      className="flex items-start gap-3 sm:gap-4 relative"
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FAF6F2] border border-[#B76E58] flex items-center justify-center shrink-0 text-[#B76E58] shadow-2xs z-10">
                        {stepItem.icon}
                      </div>

                      <div className="pt-0.5">
                        <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#B76E58] font-semibold block">
                          {lang === 'fr'
                            ? `Étape 0${stepItem.step}`
                            : `المرحلة 0${stepItem.step}`}
                        </span>
                        <h4 className="text-xs sm:text-sm font-medium text-[#2C221E] mt-0.5">
                          {stepItem.title[lang]}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#82726B] mt-0.5 leading-relaxed font-body">
                          {stepItem.desc[lang]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() =>
                    onNavigate('contact', 'Balayage Lumineux & Soin Réparateur')
                  }
                  className="min-h-[48px] px-7 py-3.5 bg-[#B76E58] hover:bg-[#a65d48] text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-md transition-transform active:scale-98 flex items-center justify-center gap-2 group whitespace-nowrap"
                >
                  <span>
                    {lang === 'fr'
                      ? 'RÉSERVER CETTE PRESTATION'
                      : 'طلب موعد لهذه الجلسة'}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                      isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''
                    }`}
                  />
                </button>

                {CONTENT.brand.phoneRaw ? (
                  <a
                    href={`tel:${CONTENT.brand.phoneRaw}`}
                    className="min-h-[48px] px-5 py-3.5 rounded-full border border-[#B76E58]/40 hover:border-[#B76E58] text-[#2C221E] text-xs font-medium tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                    aria-label={`Appeler ${CONTENT.brand.name}: ${CONTENT.brand.phoneFormatted}`}
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#B76E58]" />
                    <span dir="ltr" className="inline-block font-semibold">
                      {CONTENT.brand.phoneFormatted}
                    </span>
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => onNavigate('gallery')}
                    className="min-h-[48px] px-5 py-3.5 rounded-full border border-[#EADBCE] hover:border-[#B76E58] text-[#82726B] hover:text-[#2C221E] text-xs font-medium tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                  >
                    <span>{lang === 'fr' ? 'Voir le portfolio' : 'مشاهدة المعرض'}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Price Medallion */}
            <div className="lg:col-span-5 flex justify-center mt-2 lg:mt-0">
              <div className="w-full max-w-[340px] bg-[#FAF6F2] border border-[#EADBCE] rounded-t-full rounded-b-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-md relative overflow-hidden">
                <div className="mb-3 px-3.5 py-1 rounded-full border border-[#B76E58]/30 bg-white text-[#B76E58] text-[10px] font-semibold tracking-widest uppercase shadow-2xs">
                  {lang === 'fr'
                    ? 'PRESTATION COUTURE'
                    : 'خدمة احترافية متميزة'}
                </div>

                <div className="my-1">
                  <span
                    dir="ltr"
                    className="font-heading text-3xl sm:text-4xl text-[#B76E58] font-normal tracking-tight inline-block"
                  >
                    {CONTENT.featuredPackage.price}
                  </span>
                </div>

                <p className="text-[11px] text-[#82726B] mt-1 leading-snug">
                  {t(CONTENT.featuredPackage.priceNote)}
                </p>

                <div className="w-full h-px bg-[#EADBCE] my-5" />

                <div className="text-[11px] sm:text-xs text-[#2C221E] space-y-2.5 text-start w-full px-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[#B76E58]">◆</span>
                    <span>
                      {lang === 'fr'
                        ? 'Diagnostic personnalisé de la fibre'
                        : 'تشخيص دقيق ومخصص لصحة الشعر'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#B76E58]">◆</span>
                    <span>
                      {lang === 'fr'
                        ? 'Technique balayage fondu sans démarcation'
                        : 'تفتيح انسيابي مدمج بدون فوارق حادة'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#B76E58]">◆</span>
                    <span>
                      {lang === 'fr'
                        ? 'Soin profond nutritif & brushing wavy'
                        : 'علاج مغذٍ وتصفيف ويفي لإبراز التدرجات'}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    onNavigate('contact', 'Balayage Lumineux & Soin Réparateur')
                  }
                  className="w-full min-h-[46px] mt-6 py-3 bg-[#B76E58] hover:bg-[#a65d48] text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-md transition-transform active:scale-98"
                >
                  {lang === 'fr' ? 'RÉSERVER CE SOIN →' : 'طلب موعد لهذه الجلسة ←'}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
