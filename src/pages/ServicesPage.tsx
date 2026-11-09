import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { ServiceItem } from '../data/content.ts';
import { ServicesList } from '../components/ServicesList.tsx';
import { LotusWaveDivider } from '../components/LotusWaveDivider.tsx';

interface ServicesPageProps {
  initialCategory?: string;
  onSelectService: (service: ServiceItem) => void;
  onBookService: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  initialCategory,
  onSelectService,
  onBookService,
}) => {
  const { lang } = useLanguage();

  return (
    <div className="w-full py-16 sm:py-24 bg-[#FAF6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-[#B76E58]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#B76E58] font-semibold">
              {lang === 'fr' ? 'CARTE DES PRESTATIONS CAPILLAIRES' : 'قائمة خدمات الشعر والتلوين'}
            </span>
            <span className="w-6 h-px bg-[#B76E58]" />
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#2C221E] font-normal leading-tight [text-wrap:balance]">
            {lang === 'fr'
              ? 'Balayage, Coloration & Soins du Cheveu'
              : 'خدمات البالياج، الصبغات وعلاجات الشعر'}
          </h1>

          <p className="text-xs sm:text-sm text-[#82726B] leading-relaxed max-w-xl mx-auto font-body mt-4">
            {lang === 'fr'
              ? 'Découvrez nos techniques exclusives de balayage, nos nuances burgundy intenses, nos soins réparateurs et nos coiffures de cérémonie. Nos prestations sont personnalisées lors d\'un diagnostic attentif.'
              : 'اكتشفي تقنيات البالياج المضيئة، صبغات البورغندي المميزة، علاجات الترميم وتسريحات المناسبات الفخمة. تُقدم خدماتنا بعناية فائقة واستشارة مخصصة.'}
          </p>
        </div>

        {/* Dynamic Services List */}
        <ServicesList
          initialCategory={initialCategory}
          onSelectService={onSelectService}
          onBookService={onBookService}
        />

      </div>

      <LotusWaveDivider className="py-8" />
    </div>
  );
};
