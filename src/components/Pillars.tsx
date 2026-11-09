import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { assets } from '../data/assets.ts';
import { ArrowRight, Sparkles } from 'lucide-react';

interface PillarsProps {
  onNavigate: (tab: string, category?: string) => void;
}

export const Pillars: React.FC<PillarsProps> = ({ onNavigate }) => {
  const { lang, isRTL } = useLanguage();
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const pillarsData = [
    {
      id: 'balayage',
      title: 'BALAYAGE',
      tagline: {
        fr: 'Balayages Lumineux & Mèches Fines',
        ar: 'بالياج مضيء وخصلات دقيقة مدمجة',
      },
      description: {
        fr: 'L\'art du dégradé naturel : balayages fondus sans démarcation, mèches fines apportant lumière et volume sans effet racine.',
        ar: 'إتقان التفتيح الطبيعي: بالياج انسيابي بتدرجات ناعمة وخصلات رفيعة تمنح الشعر إشراقة وكثافة طبيعية بدون فوارق.',
      },
      image: assets.balayageWaves,
      gradient:
        'linear-gradient(to top, #2C221E 32%, rgba(44, 34, 30, 0.78) 65%, rgba(44, 34, 30, 0.35) 100%)',
      category: 'balayage',
      emblem: '✦',
    },
    {
      id: 'coloration',
      title: 'COLORATION',
      tagline: {
        fr: 'Couleurs Couture & Nuance Burgundy',
        ar: 'الصبغات الغنية ودرجة البورغندي',
      },
      description: {
        fr: 'Formules intenses et respectueuses : décolorations maîtrisées, bruns soyeux, cuivrés chauds et la teinte signature burgundy.',
        ar: 'ألوان صبغات عالية الجودة تحمي ألياف الشعر: سحب لون آمن ومدروس، تدرجات الشوكولا، واللون البورغندي الملكي المميز.',
      },
      image: assets.hairBalayage,
      gradient:
        'linear-gradient(to top, #3A231C 32%, rgba(58, 35, 28, 0.78) 65%, rgba(58, 35, 28, 0.35) 100%)',
      category: 'coloration',
      emblem: '❖',
    },
    {
      id: 'soins',
      title: 'SOINS & COUPE',
      tagline: {
        fr: 'Botox Capillaire & Brushing Wavy',
        ar: 'بوتوكس الشعر وسيشوار ويفي',
      },
      description: {
        fr: 'Protocoles réparateurs profonds, restructuration des longueurs abîmées, coupes actuelles et brushings aux ondulations glamour.',
        ar: 'علاجات ترميم مكثفة لإعادة الحيوية للشعر التالف، قصات عصرية وتصفيفات ويفي أنيقة تلائم مختلف مناسباتكِ.',
      },
      image: assets.perfumeTray,
      gradient:
        'linear-gradient(to top, #2C221E 32%, rgba(44, 34, 30, 0.78) 65%, rgba(44, 34, 30, 0.35) 100%)',
      category: 'soins',
      emblem: '✧',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF6F2] border-b border-[#EADBCE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-px bg-[#B76E58]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#B76E58] font-semibold">
              {lang === 'fr' ? 'L\'EXCELLENCE JOUMANA HAIR STYLE' : 'ركائز التميز والإبداع'}
            </span>
            <span className="w-5 h-px bg-[#B76E58]" />
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl text-[#2C221E] font-normal leading-tight [text-wrap:balance]">
            {lang === 'fr'
              ? 'Trois Univers Dédiés à Votre Chevelure'
              : 'ثلاثة اختصاصات متكاملة لجمال وصحة شعركِ'}
          </h2>

          <p className="text-xs sm:text-sm text-[#82726B] font-body mt-3 leading-relaxed max-w-xl mx-auto">
            {lang === 'fr'
              ? 'Découvrez nos expertises en salon pour une transformation capillaire harmonieuse, soignée et sur mesure.'
              : 'اكتشفي اختصاصاتنا في الصالون لتجربة تلوين وتصفيف مخصصة تعكس أناقتكِ وتحافظ على صحة شعركِ.'}
          </p>
        </div>

        {/* Mobile Swipe Notice */}
        <div className="flex sm:hidden items-center justify-between text-[11px] text-[#B76E58] mb-3 px-1">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#B76E58]" />
            <span>{lang === 'fr' ? 'Glisser pour explorer les univers' : 'اسحبي لاكتشاف الاختصاصات'}</span>
          </span>
          <div className="flex items-center gap-1.5">
            {pillarsData.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  activeMobileIndex === i ? 'bg-[#B76E58] w-3' : 'bg-[#EADBCE]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Carousel / Responsive Grid */}
        <div
          onScroll={(e) => {
            const el = e.currentTarget;
            const scrollLeft = Math.abs(el.scrollLeft);
            const cardWidth = el.offsetWidth * 0.82;
            const idx = Math.min(2, Math.max(0, Math.round(scrollLeft / (cardWidth || 1))));
            setActiveMobileIndex(idx);
          }}
          className="flex sm:grid sm:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 pb-3"
        >
          {pillarsData.map((pillar) => (
            <div
              key={pillar.id}
              onClick={() => onNavigate('services', pillar.category)}
              className="w-[84vw] max-w-[320px] sm:w-auto shrink-0 snap-center rounded-t-[120px] rounded-b-[28px] overflow-hidden min-h-[460px] sm:min-h-[520px] p-6 sm:p-8 flex flex-col justify-between relative border border-[#EADBCE] shadow-md active:scale-99 transition-transform cursor-pointer group"
            >
              {/* Photographic Background */}
              <img
                src={pillar.image}
                alt={pillar.title}
                loading="lazy"
                width={320}
                height={520}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Tinted Luxury Gradient Overlay */}
              <div
                className="absolute inset-0"
                style={{ background: pillar.gradient }}
              />

              {/* Top Talisman Emblem */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="w-9 h-9 rounded-full border border-[#B76E58]/50 bg-white/90 flex items-center justify-center text-[#B76E58] shadow-2xs">
                  <span className="text-xs font-serif">{pillar.emblem}</span>
                </div>

                <span className="text-[10px] tracking-[0.2em] uppercase text-white bg-black/40 backdrop-blur-xs px-3 py-1 rounded-full border border-white/20">
                  {lang === 'fr' ? 'Salon' : 'الصالون'}
                </span>
              </div>

              {/* Bottom Details & Direct Navigation */}
              <div className="relative z-10 pt-12">
                <h3 className="font-heading text-3xl sm:text-4xl font-light text-white tracking-[0.16em] mb-1">
                  {pillar.title}
                </h3>

                <div className="text-xs font-medium text-[#E89D82] tracking-wide mb-2 flex items-center gap-1.5">
                  <span className="inline-block w-2.5 h-px bg-[#E89D82]" />
                  <span>{pillar.tagline[lang]}</span>
                </div>

                <p className="text-xs text-white/85 font-body leading-relaxed line-clamp-3 mb-4">
                  {pillar.description[lang]}
                </p>

                <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-white group-hover:text-[#E89D82] transition-colors min-h-[44px]">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#E89D82]" />
                    <span>
                      {lang === 'fr' ? "Découvrir ces prestations" : 'استكشفي الخدمات'}
                    </span>
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                      isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
