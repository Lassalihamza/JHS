import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT, ServiceItem } from '../data/content.ts';
import { ASSETS } from '../data/assets.ts';
import { ArrowRight, Sparkles, MessageSquare, PhoneCall, Calendar } from 'lucide-react';

interface ServicesListProps {
  initialCategory?: string;
  onSelectService: (service: ServiceItem) => void;
  onBookService: (serviceName: string) => void;
}

export const ServicesList: React.FC<ServicesListProps> = ({
  initialCategory,
  onSelectService,
  onBookService,
}) => {
  const { lang, t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>(
    initialCategory || 'all'
  );

  const categories = [
    { id: 'all', label: lang === 'fr' ? 'Toutes les prestations' : 'جميع الخدمات' },
    ...CONTENT.categories.map((c) => ({
      id: c.id,
      label: t(c.name),
    })),
  ];

  const filteredServices =
    activeCategory === 'all'
      ? CONTENT.services
      : CONTENT.services.filter((s) => s.categoryId === activeCategory);

  const getServiceAsset = (id: string) => {
    switch (id) {
      case 'balayage-signature':
      case 'meches-lumineuses':
        return ASSETS.balayageWaves;
      case 'burgundy-colour':
      case 'coloration-couture':
      case 'decoloration-experte':
        return ASSETS.hairBalayage;
      case 'soin-botox-capillaire':
        return ASSETS.perfumeTray;
      case 'brushing-wavy':
      case 'coiffure-mariee-chignon':
        return ASSETS.balayageHairHero;
      default:
        return ASSETS.balayageWaves;
    }
  };

  const hasPhone = Boolean(CONTENT.brand.phoneRaw && CONTENT.brand.phoneRaw.trim().length > 0);

  return (
    <div className="w-full">
      {/* Category Pill Switcher */}
      <div className="flex items-center overflow-x-auto scrollbar-none snap-x gap-1.5 p-1.5 rounded-full bg-[#F5EBE6] border border-[#ECDCCE] shadow-xs mb-8 sm:mb-14 max-w-4xl mx-auto -mx-2 px-2 sm:mx-auto">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`snap-center shrink-0 min-h-[44px] px-4 sm:px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B76E58] ${
                isActive
                  ? 'bg-[#2C221E] text-white font-semibold shadow-xs'
                  : 'text-[#82726B] hover:text-[#2C221E]'
              }`}
              aria-pressed={isActive}
            >
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Services List Flow */}
      <div className="space-y-6 sm:space-y-8">
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service, index) => {
            const isBalayageStar = service.id === 'balayage-signature';
            const isBridal = service.id === 'coiffure-mariee-chignon';
            const servicePhoto = getServiceAsset(service.id);

            // 1. Featured Spotlight: Balayage Signature
            if (isBalayageStar) {
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, delay: Math.min(index * 0.04, 0.2) }}
                  onClick={() => onSelectService(service)}
                  className="rounded-[28px] sm:rounded-[36px] bg-[#2C221E] text-[#FAF6F2] border border-[#B76E58]/40 p-5 sm:p-9 shadow-lg relative overflow-hidden cursor-pointer hover:border-[#B76E58] transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                    
                    {/* Visual Archway */}
                    <div className="lg:col-span-5 flex justify-center">
                      <div className="relative w-full max-w-[320px] aspect-[4/3] sm:aspect-square rounded-2xl sm:rounded-t-full sm:rounded-b-2xl overflow-hidden border border-[#B76E58]/40 bg-[#1F1714]">
                        <img
                          src={servicePhoto}
                          alt={t(service.name)}
                          width={320}
                          height={320}
                          loading="lazy"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2C221E]/80 via-transparent to-transparent pointer-events-none" />
                        
                        <div className="absolute top-3 start-3 px-3 py-1 rounded-full bg-[#2C221E]/90 border border-[#B76E58]/40 text-[#E89D82] text-[10px] font-semibold tracking-wider uppercase">
                          {service.promoBadge ? t(service.promoBadge) : (lang === 'fr' ? 'PRESTATION VEDETTE' : 'الخدمة الأكثر طلباً')}
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[10px] uppercase tracking-wider text-[#E89D82] font-semibold bg-[#B76E58]/20 px-3 py-0.5 rounded-full border border-[#B76E58]/30">
                          {lang === 'fr' ? 'BALAYAGE & MÈCHES' : 'البالياج والخصلات'}
                        </span>
                        
                        <div className="text-end">
                          <span
                            className="text-xs uppercase tracking-wider text-[#E89D82] font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/15"
                          >
                            {t(service.priceDisplay)}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-heading text-2xl sm:text-3xl text-white font-normal leading-tight">
                        {t(service.name)}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#E2D5CD] font-body leading-relaxed">
                        {t(service.fullDesc)}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {service.highlights?.map((hl, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#FAF6F2] bg-white/5 p-2 rounded-xl border border-white/10">
                            <span className="text-[#E89D82] text-xs">✦</span>
                            <span>{t(hl)}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-white/15">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#E89D82] flex items-center gap-1.5">
                          <span>{lang === 'fr' ? 'Voir les détails' : 'تفاصيل الخدمة'}</span>
                          <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                        </span>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onBookService(t(service.name));
                          }}
                          className="min-h-[44px] px-5 py-2.5 bg-[#B76E58] hover:bg-[#C87A63] text-white text-xs font-bold tracking-wider uppercase rounded-full shadow-md transition-transform active:scale-98"
                        >
                          {lang === 'fr' ? 'Demander un rendez-vous' : 'طلب حجز موعد'}
                        </button>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            }

            // 2. Bridal Pack Spotlight
            if (isBridal) {
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, delay: Math.min(index * 0.04, 0.2) }}
                  onClick={() => onSelectService(service)}
                  className="rounded-3xl bg-gradient-to-r from-[#2C221E] via-[#382B26] to-[#2C221E] text-white border-2 border-[#B76E58]/60 p-6 sm:p-9 shadow-lg relative overflow-hidden cursor-pointer hover:border-[#B76E58] transition-all"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
                    <div className="space-y-2.5 max-w-2xl">
                      <div className="inline-flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#E89D82]" />
                        <span className="text-[11px] uppercase tracking-wider text-[#E89D82] font-semibold">
                          {lang === 'fr' ? 'ÉVÉNEMENT & MARIÉE' : 'تسريحات العرائس الملكية'}
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl sm:text-3xl text-white font-normal">
                        {t(service.name)}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#E2D5CD] font-body leading-relaxed">
                        {t(service.fullDesc)}
                      </p>

                      <div className="pt-0.5 text-[11px] text-[#E89D82] italic">
                        {lang === 'fr'
                          ? '✦ Chignon haute couture, pose d\'accessoires & diagnostic visagiste'
                          : '✦ تسريحة مخصصة للعروس، تثبيت الطرحة والإكسسوارات مع استشارة الملامح'}
                      </div>
                    </div>

                    <div className="w-full md:w-auto shrink-0 flex flex-col items-stretch sm:items-center gap-2.5 pt-2 md:pt-0">
                      <span className="px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#E89D82] text-xs font-semibold text-center">
                        {t(service.priceDisplay)}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onBookService(t(service.name));
                        }}
                        className="min-h-[46px] px-6 py-2.5 bg-[#B76E58] hover:bg-[#C87A63] text-white text-xs font-bold tracking-wider uppercase rounded-full shadow-md transition-transform active:scale-98"
                      >
                        {lang === 'fr' ? 'Demander un RDV Mariée' : 'حجز موعد العروس'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            }

            // 3. Standard Service Card (Balayage, Coloration, Soins, etc.)
            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, delay: Math.min(index * 0.04, 0.2) }}
                onClick={() => onSelectService(service)}
                className="rounded-3xl bg-white border border-[#ECDCCE] p-5 sm:p-7 shadow-xs relative overflow-hidden cursor-pointer hover:border-[#B76E58] transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#B76E58] font-semibold bg-[#B76E58]/10 px-3 py-0.5 rounded-full border border-[#B76E58]/20">
                      {service.categoryId.toUpperCase()}
                    </span>
                    
                    <span className="text-xs text-[#82726B] font-mono italic">
                      {t(service.priceDisplay)}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl text-[#2C221E] font-normal leading-tight">
                    {t(service.name)}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#82726B] font-body leading-relaxed">
                    {t(service.shortDesc)}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-[#B76E58] min-h-[44px]">
                    <span>{lang === 'fr' ? 'Détails & Consultation →' : 'التفاصيل والاستشارة ←'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Transparent Consultation Policy Box */}
      <div className="mt-12 sm:mt-16 bg-white border border-[#ECDCCE] rounded-3xl p-6 sm:p-8 text-center max-w-xl mx-auto shadow-xs">
        <Sparkles className="w-5 h-5 text-[#B76E58] mx-auto mb-2" />
        <h4 className="font-heading text-xl text-[#2C221E] mb-1.5 font-normal">
          {lang === 'fr'
            ? 'Diagnostic & Tarification sur Mesure'
            : 'استشارة وتحديد السعر حسب الشعر'}
        </h4>
        <p className="text-xs text-[#82726B] leading-relaxed mb-5 font-body">
          {lang === 'fr'
            ? 'Chaque chevelure étant unique par sa longueur, son épaisseur et son historique de couleur, nos tarifs sont établis lors d\'un diagnostic personnalisé en salon ou sur demande de rendez-vous.'
            : 'نظراً لاختلاف طول وكثافة الشعر وحالته السابقة، يُحدد السعر بدقة خلال الاستشارة المباشرة في الصالون أو عند تأكيد موعدكِ.'}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => onBookService('Diagnostic & Balayage')}
            className="min-h-[44px] inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2C221E] hover:bg-[#382B26] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-xs"
          >
            <Calendar className="w-3.5 h-3.5 text-[#E89D82]" />
            <span>{lang === 'fr' ? 'Planifier une consultation' : 'طلب موعد استشارة'}</span>
          </button>

          {hasPhone && (
            <a
              href={`tel:${CONTENT.brand.phoneRaw}`}
              className="min-h-[44px] inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FAF6F2] hover:bg-[#ECDCCE] border border-[#ECDCCE] text-[#2C221E] text-xs font-semibold tracking-wider uppercase transition-colors shadow-xs"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#B76E58]" />
              <span dir="ltr">{CONTENT.brand.phoneFormatted}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
