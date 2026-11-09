import { BUSINESS_CONFIG } from './businessConfig.ts';

export type Language = 'fr' | 'ar';

export interface LocalizedString {
  fr: string;
  ar: string;
}

export type ServiceCategoryId = 'balayage' | 'coloration' | 'soins' | 'coiffage' | 'mariee';

export interface ServiceItem {
  id: string;
  categoryId: ServiceCategoryId;
  name: LocalizedString;
  shortDesc: LocalizedString;
  fullDesc: LocalizedString;
  priceDisplay: LocalizedString;
  isPriceMissing: boolean;
  isPromo?: boolean;
  promoBadge?: LocalizedString;
  highlights?: LocalizedString[];
  sensoryNotes?: LocalizedString[];
}

export interface ServiceCategory {
  id: ServiceCategoryId;
  name: LocalizedString;
  badge: LocalizedString;
  themeColor: string;
}

export const CONTENT = {
  brand: {
    name: BUSINESS_CONFIG.name,
    shortName: BUSINESS_CONFIG.shortName,
    subtitle: 'S A L O N • D E • C O I F F U R E',
    instagramHandle: BUSINESS_CONFIG.instagramHandle,
    instagramUrl: BUSINESS_CONFIG.instagramUrl,
    mapsUrl: BUSINESS_CONFIG.mapsUrl,
    phoneRaw: BUSINESS_CONFIG.phone,
    phoneFormatted: BUSINESS_CONFIG.phoneFormatted,
    address: {
      fr: BUSINESS_CONFIG.address,
      ar: BUSINESS_CONFIG.address,
    },
    openingHoursPlaceholder: {
      fr: BUSINESS_CONFIG.hours,
      ar: BUSINESS_CONFIG.hours,
    },
    tagline: {
      fr: 'Salon de Coiffure & Coloration — Spécialiste Balayage, Décoloration, Mèches, Nuances Burgundy et Soins Capillaires.',
      ar: 'صالون حلاقة وتلوين الشعر — متخصصة في البالياج، الصبغات، سحب اللون، الخصلات، درجات البورغندي والعلاجات المغذية.',
    },
    previewRibbon: {
      fr: 'Joumana Hair Style — Salon de Coiffure',
      ar: 'جمانة هير ستايل — صالون تصفيف الشعر',
    },
    footerDisclaimer: {
      fr: 'Site officiel pour Joumana Hair Style (Joumana Coiffure), Algérie',
      ar: 'الموقع الرسمي لصالون جمانة هير ستايل (جمانة كوافير)، الجزائر',
    },
    demoBadge: {
      fr: 'Prise de rendez-vous & consultation personnalisée',
      ar: 'حجز المواعيد واستشارة مخصصة للشعر',
    },
    missingDataBadge: {
      fr: 'Sur consultation',
      ar: 'حسب الاستشارة',
    },
  },

  nav: {
    home: { fr: 'Accueil', ar: 'الرئيسية' },
    services: { fr: 'Prestations', ar: 'خدمات الشعر' },
    gallery: { fr: 'Portfolio', ar: 'معرض الأعمال' },
    about: { fr: 'Le Salon', ar: 'عن الصالون' },
    contact: { fr: 'Rendez-vous', ar: 'حجز وتواصل' },
    bookCta: { fr: 'Prendre RDV', ar: 'احجزي موعدك' },
    callUs: { fr: 'Nous contacter', ar: 'تواصلي معنا' },
    replayIntro: { fr: '✨ Intro', ar: '✨ البداية' },
    switchLang: { fr: 'العربية', ar: 'Français' },
  },

  splash: {
    taglineTop: {
      fr: 'Haute Coiffure, Balayage & Coloration',
      ar: 'تصفيف الشعر الاحترافي، البالياج وتلوين الشعر',
    },
    cityLabel: {
      fr: 'Algérie',
      ar: 'الجزائر',
    },
    bio: {
      fr: 'L\'expertise capillaire sur mesure : balayages lumineux, colorations intenses, nuances burgundy et rituels réparateurs.',
      ar: 'خبرة متفانية في جمال الشعر: أحدث صيحات البالياج، صبغات غنية، تدرجات البورغندي وعلاجات ترميمية عميقة.',
    },
    enterCta: {
      fr: 'Entrer dans l\'univers Joumana Hair Style',
      ar: 'ادخلي إلى عالم جمانة هير ستايل',
    },
    skipBtn: {
      fr: 'Passer l\'intro',
      ar: 'تخطي',
    },
    langSelectLabel: {
      fr: 'Choisir la langue',
      ar: 'اختيار اللغة',
    },
  },

  hero: {
    locationBadge: {
      fr: 'Joumana Coiffure • Algérie',
      ar: 'جمانة كوافير • الجزائر',
    },
    womenOnly: {
      fr: 'Salon de coiffure & coloration dédié aux femmes',
      ar: 'صالون تصفيف وتلوين الشعر مخصص للسيدات',
    },
    title: {
      fr: 'L\'Art du Cheveu & la Maîtrise des Couleurs',
      ar: 'فن تصفيف الشعر وإتقان ألوان الصبغات',
    },
    description: {
      fr: 'Confiez votre chevelure à une passionnée de la couleur et du style : balayages fondus sans démarcation, décolorations maîtrisées, mèches lumineuses, nuances burgundy d\'exception et soins réparateurs profonds.',
      ar: 'تألقي بأبهى إطلالة لشعركِ مع خبرتنا المتميزة: بالياج بتدرجات ناعمة بدون فوارق، سحب لون متقن، خصلات مضيئة، تدرجات البورغندي الساحرة وبروتوكولات ترميم متكاملة.',
    },
    ctaPrimary: {
      fr: 'Demander un Rendez-vous',
      ar: 'طلب موعد بالصالون',
    },
    ctaSecondary: {
      fr: 'Découvrir nos Balayages',
      ar: 'استكشاف خدمات البالياج',
    },
    floatingBadge: {
      fr: 'Spécialiste Balayage & Coloration',
      ar: 'خبيرة البالياج وتلوين الشعر',
    },
  },

  pillarsSection: {
    eyebrow: {
      fr: 'L\'Excellence Joumana Hair Style',
      ar: 'ركائز الإتقان والإبداع',
    },
    title: {
      fr: 'Trois Expertises Dédiées à Votre Chevelure',
      ar: 'ثلاثة اختصاصات متكاملة لجمال وصحة شعركِ',
    },
    subtitle: {
      fr: 'La fusion parfaite entre diagnostic personnalisé, précision technique et santé du cheveu.',
      ar: 'الجمع المثالي بين التشخيص الدقيق، الاحترافية العالية في الألوان وحماية ألياف الشعر.',
    },
  },

  pillars: [
    {
      id: 'balayage',
      title: 'BALAYAGE',
      color: '#B76E58',
      textColor: '#FFFFFF',
      badge: { fr: 'Balayage & Mèches', ar: 'بالياج وخصلات' },
      description: {
        fr: 'Éclaircissement naturel, fondu harmonieux et mèches fines créant un relief lumineux sans effet racine.',
        ar: 'تفتيح احترافي بتدرجات متناغمة وخصلات رفيعة تمنح الشعر عمقاً ولمعاناً طبيعياً ساحراً.',
      },
    },
    {
      id: 'coloration',
      title: 'COLORATION',
      color: '#E89D82',
      textColor: '#2C221E',
      badge: { fr: 'Couleurs & Burgundy', ar: 'صبغات وبورغندي' },
      description: {
        fr: 'Formules riches en pigments pour des teintes éclatantes, décolorations sécurisées et nuances bordeaux profondes.',
        ar: 'ألوان صبغات غنية ومكثفة، سحب لون آمن ومتقن، وتدرجات لون البورغندي العصرية.',
      },
    },
    {
      id: 'soins',
      title: 'SOINS & COUPE',
      color: '#C87A63',
      textColor: '#FFFFFF',
      badge: { fr: 'Botox & Brushing', ar: 'علاج وتصفيف' },
      description: {
        fr: 'Traitements nutritifs intensifs, restructuration capillaire, coupes tendance et brushings ondulés glamour.',
        ar: 'علاجات مغذية بالبوتوكس والبروتين، قصات عصرية وتصفيفات ويفي راقية لمختلف المناسبات.',
      },
    },
  ],

  featuredPackage: {
    badge: {
      fr: 'Prestation Signature',
      ar: 'الخدمة الأكثر طلباً وتميزاً',
    },
    title: {
      fr: 'Balayage Lumineux & Soin Réparateur',
      ar: 'جلسة البالياج الشاملة مع علاج مغذٍ',
    },
    price: 'Sur consultation',
    priceNote: {
      fr: 'Diagnostic personnalisé selon votre longueur et texture',
      ar: 'تشخيص مخصص حسب طول وكثافة شعركِ',
    },
    subtitle: {
      fr: 'Le rituel complet pour illuminer votre chevelure de reflets multidimensionnels tout en préservant sa douceur et son éclat.',
      ar: 'البروتوكول المتكامل لمنح شعركِ إشراقة متألقة بتدرجات الألوان مع تغذية عميقة وحماية مطلقة للأطراف.',
    },
    inclusions: [
      {
        step: '01',
        title: {
          fr: 'Diagnostic Visagiste & Colorimétrie',
          ar: 'استشارة مخصصة للون وتناسق الملامح',
        },
        desc: {
          fr: 'Analyse précise de la santé du cheveu et sélection de la nuance idéale en accord avec votre carnation.',
          ar: 'فحص صحة ألياف الشعر واختيار الدرجة المثالية التي تبرز جمال ملامحكِ وبشرتكِ.',
        },
      },
      {
        step: '02',
        title: {
          fr: 'Technique Balayage & Voile de Mèches',
          ar: 'تطبيق تقنية البالياج والخصلات الدقيقة',
        },
        desc: {
          fr: 'Application experte au pinceau pour un dégradé de lumière fluide, naturel et sans démarcation.',
          ar: 'توزيع متقن بالفرشاة لتفتيح الخصلات بتدرج انسيابي طبيعي خالٍ من الخطوط الحادة.',
        },
      },
      {
        step: '03',
        title: {
          fr: 'Patinage & Neutralisation des Reflets',
          ar: 'رنساج متوازن وتثبيت لمعان اللون',
        },
        desc: {
          fr: 'Application d\'une patine nourrissante pour fixer les reflets chauds ou froids et sceller la brillance.',
          ar: 'جلسة رنساج خاصة لضبط الدرجة المرغوبة بدقة ومنح الشعر لمعاناً مشرقاً يدوم طويلاً.',
        },
      },
      {
        step: '04',
        title: {
          fr: 'Soin Profond & Brushing Wavy',
          ar: 'ماسك ترميمي وتصفيف ويفي ساحر',
        },
        desc: {
          fr: 'Masque scellant enrichi en agents protecteurs, suivi d\'un coiffage souple pour révéler chaque nuance.',
          ar: 'علاج مغذٍ لإغلاق حراشف الشعر يتبعه سيشوار احترافي وتموجات ويفي تبرز تناسق الألوان.',
        },
      },
    ],
    cta: {
      fr: 'Prendre rendez-vous pour un balayage',
      ar: 'حجز موعد لجلسة البالياج',
    },
  },

  promoBanner: {
    tag: {
      fr: 'Mise en Beauté Capillaire',
      ar: 'عرض خاص وتألق استثنائي',
    },
    badgePromo: {
      fr: 'Offre Spéciale',
      ar: 'عرض مميز',
    },
    title: {
      fr: 'Sublimez Vos Cheveux avec un Balayage Sur Mesure',
      ar: 'جددي إطلالتكِ مع باقة البالياج والتلوين الاحترافي',
    },
    description: {
      fr: 'Découvrez nos techniques exclusives de coloration et balayage à l\'effet fondu naturel. Conseils attentifs et soins protecteurs pour sublimer votre style.',
      ar: 'استمتعي بأحدث تقنيات الصبغة والبالياج مع حماية متكاملة لبنية الشعر. عناية واهتمام بأدق التفاصيل لتحصلي على النتيجة التي تحلمين بها.',
    },
    basePriceLabel: {
      fr: 'Tarif établi sur consultation',
      ar: 'السعر يُحدد بناءً على الاستشارة والتشخيص',
    },
    cta: {
      fr: 'Consulter nos réalisations',
      ar: 'مشاهدة إبداعات الصالون',
    },
  },

  sensoryRitual: {
    eyebrow: {
      fr: 'Rituels & Soins du Cheveu',
      ar: 'علاجات وخلاصات طبيعية للشعر',
    },
    title: {
      fr: '"La santé du cheveu est le secret de sa beauté"',
      ar: '"صحة الشعر وحيويته هي سر لمعانه وجماله"',
    },
    subtitle: {
      fr: 'Pour accompagner vos transformations de couleur, nous intégrons des bains d\'huiles et soins actifs haute nutrition.',
      ar: 'لحماية شعركِ أثناء جلسات التلوين والتفتيح، نعتمد أفضل الزيوت والماسكات المغذية لألياف الشعر.',
    },
    interactiveHint: {
      fr: 'Explorez nos rituels de soin :',
      ar: 'اكتشفي بروتوكولات العناية المرافقة:',
    },
    scents: [
      {
        id: 'argan',
        color: '#B76E58',
        name: { fr: 'Huile d\'Argan & Rose', ar: 'زيت الأرغان وخلاصة الورد' },
        tag: { fr: 'Nutrition & Souplesse', ar: 'تغذية ومرونة' },
        notes: {
          fr: 'Élixir nourrissant qui répare les pointes sèches, discipline les frisottis et apporte une brillance miroir.',
          ar: 'إكسير طبيعي غني بالأحماض الدهنية لترميم الأطراف المتقصفة وإضفاء لمعان حريري فائق.',
        },
      },
      {
        id: 'keratine',
        color: '#C87A63',
        name: { fr: 'Kératine & Miel Doré', ar: 'الكيراتين وعسل النحل' },
        tag: { fr: 'Reconstruction & Force', ar: 'تقوية وترميم' },
        notes: {
          fr: 'Recharge en protéines végétales qui fortifie la fibre capillaire fragilisée après décoloration ou lissage.',
          ar: 'بروتينات مركزة تعيد بناء الروابط الداخلية للشعر بعد جلسات سحب اللون أو الصبغات المتكررة.',
        },
      },
      {
        id: 'soie',
        color: '#E89D82',
        name: { fr: 'Protéines de Soie & Cerisier', ar: 'بروتين الحرير وزهر الكرز' },
        tag: { fr: 'Légèreté & Douceur', ar: 'خفة ونعومة فائقة' },
        notes: {
          fr: 'Toucher soyeux et aérien qui enveloppe chaque mèche sans l\'alourdir, facilitant le démêlage et le coiffage.',
          ar: 'ملمس فائق النعومة وخفة انسيابية تمنع تشابك الشعر وتسهل التصفيف اليومي بحرية.',
        },
      },
      {
        id: 'ambre',
        color: '#8C5A4B',
        name: { fr: 'Beurre de Karité & Ambre', ar: 'زبدة الشيا والعنبر الدافئ' },
        tag: { fr: 'Hydratation Intense', ar: 'ترطيب عميق وحماية' },
        notes: {
          fr: 'Soin bouclier protecteur scellant l\'hydratation au cœur du cortex pour des boucles et ondulations rebondies.',
          ar: 'درع واقٍ يحبس الرطوبة داخل بنية الشعرة ليمنح التموجات مرونة وحيوية تدوم طويلاً.',
        },
      },
    ],
  },

  categories: [
    {
      id: 'balayage',
      name: { fr: 'Balayage & Mèches', ar: 'البالياج والخصلات' },
      badge: { fr: 'Balayage Signature', ar: 'بالياج احترافي' },
      themeColor: '#B76E58',
    },
    {
      id: 'coloration',
      name: { fr: 'Coloration & Décoloration', ar: 'الصبغات وسحب اللون' },
      badge: { fr: 'Couleurs Couture', ar: 'ألوان مميزة' },
      themeColor: '#E89D82',
    },
    {
      id: 'soins',
      name: { fr: 'Soins Capillaires & Botox', ar: 'العلاجات والترميم' },
      badge: { fr: 'Soins Réparateurs', ar: 'بوتوكس وترميم' },
      themeColor: '#C87A63',
    },
    {
      id: 'coiffage',
      name: { fr: 'Coupe & Brushing Glamour', ar: 'القص والسيشوار' },
      badge: { fr: 'Coiffure & Style', ar: 'تصفيف وويفي' },
      themeColor: '#B76E58',
    },
    {
      id: 'mariee',
      name: { fr: 'Coiffure Événementielle & Mariée', ar: 'تسريحات العرائس' },
      badge: { fr: 'Grand Jour', ar: 'تسريحات ومناسبات' },
      themeColor: '#8C5A4B',
    },
  ] as ServiceCategory[],

  services: [
    {
      id: 'balayage-signature',
      categoryId: 'balayage',
      name: {
        fr: 'Balayage Signature & Éclaircissement Fondu',
        ar: 'بالياج احترافي بتدرجات طبيعية مدمجة',
      },
      shortDesc: {
        fr: 'Éclaircissement sur mesure sans effet racine, pour un relief lumineux naturel.',
        ar: 'تفتيح احترافي مخصص بدون فوارق حادة، يمنح الشعر لمعاناً وانعكاساً ساحراً.',
      },
      fullDesc: {
        fr: 'La spécialité du salon Joumana Hair Style : un balayage réalisé avec une technique d\'ombrage minutieuse pour illuminer vos longueurs de reflets fondus, doux et lumineux. Inclut le diagnostic, l\'application soignée et la patine personnalisée.',
        ar: 'الاختصاص الأول لصالون جمانة هير ستايل: بالياج بتقنية مدمجة ومدروسة لمنح خصلاتكِ تدرجاً ضوئياً مذهلاً يناسب لون بشرتكِ، مع رنساج مغذٍ لحماية اللمعان.',
      },
      priceDisplay: {
        fr: 'Sur consultation',
        ar: 'حسب الاستشارة',
      },
      isPriceMissing: true,
      isPromo: true,
      promoBadge: {
        fr: 'Prestation Star',
        ar: 'الخدمة الأكثر طلباً',
      },
      highlights: [
        { fr: 'Éclaircissement sans démarcation nette', ar: 'تدرج ضوئي انسيابي خالي من الخطوط' },
        { fr: 'Patine personnalisée pour fixer la nuance', ar: 'رنساج مخصص لضبط الدرجة المثالية' },
        { fr: 'Protection de la fibre capillaire', ar: 'حماية متقدمة لألياف الشعر أثناء التفتيح' },
        { fr: 'Entretien facile et repousse invisible', ar: 'نمو طبيعي دون ظهور فوارق الجذور' },
      ],
      sensoryNotes: [
        { fr: 'Toucher soyeux et brillance éclatante', ar: 'نعومة فائقة ولمعان حريري طبيعي' },
      ],
    },
    {
      id: 'meches-lumineuses',
      categoryId: 'balayage',
      name: {
        fr: 'Les Mèches Fines & Contouring Capillaire',
        ar: 'الخصلات الرفيعة وتقنية كونتورينغ الشعر',
      },
      shortDesc: {
        fr: 'Tricotage minutieux de mèches claires pour illuminer le visage et donner du relief.',
        ar: 'توزيع دقيق للخصلات المضيئة لإبراز ملامح الوجه وإضفاء كثافة بصرية.',
      },
      fullDesc: {
        fr: 'Technique de mèches au papier aluminium pour un contraste maîtrisé et un éclaircissement harmonieux dès la racine ou en contouring autour du visage pour ouvrir le regard.',
        ar: 'تقنية خصلات متقنة لتفتيح منسجم ومتناسق، مع تركيز الخصلات الأمامية بأسلوب الكونتورينغ لتفتيح محيط الوجه ومنحكِ إطلالة نضرة.',
      },
      priceDisplay: {
        fr: 'Sur consultation',
        ar: 'حسب الاستشارة',
      },
      isPriceMissing: true,
      highlights: [
        { fr: 'Contouring personnalisé selon le visage', ar: 'كونتورينغ مخصص يناسب شكل الوجه' },
        { fr: 'Relief et contraste sur mesure', ar: 'كثافة وانعكاسات ضوئية متعددة الأبعاد' },
      ],
    },
    {
      id: 'coloration-couture',
      categoryId: 'coloration',
      name: {
        fr: 'Coloration Complète & Nuances Profondes',
        ar: 'صبغة متكاملة وألوان غنية تدوم طويلاً',
      },
      shortDesc: {
        fr: 'Couleur intense, couverture parfaite des cheveux blancs et brillance durable.',
        ar: 'تغطية مثالية للشيب، ألوان عميقة وثبات فائق مع لمعان صحي.',
      },
      fullDesc: {
        fr: 'Application experte de colorations sélectionnées pour leur respect du cuir chevelu et leur richesse pigmentaire : bruns chauds, marrons glacés, cuivrés vibrants ou blonds sophistiqués.',
        ar: 'صبغات ذات جودة عالية لحماية فروة الرأس وألياف الشعر مع تشكيلة واسعة من الألوان: الشوكولا الدافئ، البني الكستنائي، الأشقر المميز والنحاسي المتألق.',
      },
      priceDisplay: {
        fr: 'Sur consultation',
        ar: 'حسب الاستشارة',
      },
      isPriceMissing: true,
      highlights: [
        { fr: '100% de couverture des cheveux blancs', ar: 'تغطية كاملة وشاملة للشيب' },
        { fr: 'Brillance miroir et reflet durable', ar: 'لمعان عاكس وألوان غنية لا تبهت' },
      ],
    },
    {
      id: 'decoloration-experte',
      categoryId: 'coloration',
      name: {
        fr: 'Décoloration & Éclaircissement Contrôlé',
        ar: 'سحب اللون والتفتيح الآمن المدروس',
      },
      shortDesc: {
        fr: 'Transition de couleur progressive et maîtrisée avec protection anti-casse.',
        ar: 'تفتيح تدريجي دقيق مع بروتوكولات حماية تمنع تكسر وتلف الأطراف.',
      },
      fullDesc: {
        fr: 'Une décoloration professionnelle encadrée étape par étape pour préparer vos cheveux à un changement de teinte radical ou à un blond pur, toujours accompagnée de soins fortifiants.',
        ar: 'عملية سحب لون احترافية تحت إشراف خبيرة الألوان لتهيئة الشعر لتحولات الألوان الكبرى مع دمج ماسكات الترميم لحفظ قوة الشعرة.',
      },
      priceDisplay: {
        fr: 'Sur consultation',
        ar: 'حسب الاستشارة',
      },
      isPriceMissing: true,
      highlights: [
        { fr: 'Respect de la sensibilité du cheveu', ar: 'مراعاة تامة لصحة ومرونة الشعر' },
        { fr: 'Fond d\'éclaircissement propre et régulier', ar: 'قاعدة تفتيح متجانسة وخالية من البقع' },
      ],
    },
    {
      id: 'burgundy-colour',
      categoryId: 'coloration',
      name: {
        fr: 'Teinte Signature Burgundy & Reflets Vin',
        ar: 'صبغة لون البورغندي الملكي وتدرجات النبيذي',
      },
      shortDesc: {
        fr: 'Nuance bordeaux profonde, mystérieuse et ultra-brillante, star du salon.',
        ar: 'درجة البورغندي العميقة والساحرة، إحدى بصمات صالون جمانة المميزة.',
      },
      fullDesc: {
        fr: 'La couleur signature vue sur le profil Joumana Hair Style : un mariage envoûtant de reflets rubis et violine créant une couleur luxueuse, audacieuse et résolument tendance.',
        ar: 'اللون المميز والأكثر رواجاً في حساب جمانة: تدرج ساحر يجمع بين الياقوتي والعنابي الداكن ليمنحكِ إطلالة قوية، راقية وعصرية بامتياز.',
      },
      priceDisplay: {
        fr: 'Sur consultation',
        ar: 'حسب الاستشارة',
      },
      isPriceMissing: true,
      highlights: [
        { fr: 'Pigments haute intensité', ar: 'صبغات نقية فائقة الثبات والتركيز' },
        { fr: 'Reflets vibrants sous la lumière naturelle', ar: 'انعكاسات ساحرة ومضيئة تحت الضوء الطبيعي' },
      ],
    },
    {
      id: 'soin-botox-capillaire',
      categoryId: 'soins',
      name: {
        fr: 'Soin Botox Capillaire & Réparation Profonde',
        ar: 'علاج بوتوكس الشعر والترميم المكثف',
      },
      shortDesc: {
        fr: 'Cure de jouvence pour chevelures fatiguées, déshydratées ou traitées chimiquement.',
        ar: 'جلسة إنعاش متكاملة للشعر المجهد، الجاف أو المتأثر بالحرارة والصبغات.',
      },
      fullDesc: {
        fr: 'Véritable injection d\'acide hyaluronique, kératine et huiles végétales au cœur de la fibre pour combler les brèches, éliminer les frisottis et restituer une matière soyeuse et disciplinée.',
        ar: 'تغذية عميقة بمزيج الهيالورونيك، الكيراتين والزيوت الأساسية لترميم التلف، القضاء على النفشة وإعادة الملمس الحريري الناعم للشعر.',
      },
      priceDisplay: {
        fr: 'Sur consultation',
        ar: 'حسب الاستشارة',
      },
      isPriceMissing: true,
      highlights: [
        { fr: 'Comblement des pointes fourchues', ar: 'علاج فعال لتقصف الأطراف' },
        { fr: 'Facilité de coiffage et discipline', ar: 'سهولة فائقة في التمشيط والتصفيف' },
      ],
    },
    {
      id: 'brushing-wavy',
      categoryId: 'coiffage',
      name: {
        fr: 'Brushing Glamour & Ondulations Wavy',
        ar: 'سيشوار احترافي وتموجات ويفي هوليوودي',
      },
      shortDesc: {
        fr: 'Lissage parfait ou vagues souples pour un volume chic au quotidien ou en soirée.',
        ar: 'سيشوار حريري أملس أو تموجات واسعة وأنيقة تمنح شعركِ كثافة وحيوية.',
      },
      fullDesc: {
        fr: 'Mise en forme soignée au séchoir et au fer avec thermo-protection : que vous préfériez des boucles voluptueuses, un wavy détendu ou un lissage miroir longue tenue.',
        ar: 'تصفيف حراري مدروس مع تطبيق واقي الحرارة لمنحكِ تموجات ويفي راقية وجذابة تدوم لساعات طويلة في مناسباتكِ.',
      },
      priceDisplay: {
        fr: 'Sur consultation',
        ar: 'حسب الاستشارة',
      },
      isPriceMissing: true,
      highlights: [
        { fr: 'Volume aéré et tenue impeccable', ar: 'كثافة طبيعية وثبات يدوم طوال اليوم' },
        { fr: 'Finition soyeuse sans alourdir', ar: 'ملمس ناعم وخفيف دون أي ثقل' },
      ],
    },
    {
      id: 'coiffure-mariee-chignon',
      categoryId: 'mariee',
      name: {
        fr: 'Coiffure Mariée & Chignons Haute Couture',
        ar: 'تسريحات العرائس وشينيون المناسبات الفخم',
      },
      shortDesc: {
        fr: 'Création exclusive sur mesure pour sublimer la future mariée lors de son grand jour.',
        ar: 'تسريحة ملكية مخصصة للعروس لإطلالة لا تُنسى في ليلة العمر.',
      },
      fullDesc: {
        fr: 'Accompagnement personnalisé pour les cérémonies et mariages : chignon bas romantique, demi-queue bohème ornée de bijoux ou cascade de boucles soignées, avec pose sécurisée du voile ou des accessoires.',
        ar: 'مرافقة خاصة للعروس لاختيار التسريحة المثالية التي تتكامل مع فستانها وطرحتها، وتثبيت متقن للإكسسوارات لتبقى في أبهى حلة طوال الحفل.',
      },
      priceDisplay: {
        fr: 'Sur consultation',
        ar: 'حسب الاستشارة',
      },
      isPriceMissing: true,
      highlights: [
        { fr: 'Essai et conseil morphologique préalable', ar: 'استشارة مسبقة لتنسيق التسريحة مع الفستان' },
        { fr: 'Fixation longue tenue haute résistance', ar: 'تثبيت احترافي فائق المقاومة' },
        { fr: 'Pose soignée du voile et des bijoux de tête', ar: 'تثبيت الطرحة وتنسيق مجوهرات الشعر بدقة' },
      ],
    },
  ] as ServiceItem[],

  galleryPage: {
    eyebrow: { fr: 'Portfolio & Réalisations', ar: 'معرض الأعمال والإبداعات' },
    title: {
      fr: 'Galerie des Transformations & Nuances',
      ar: 'معرض تحولات وألوان الشعر بالصالون',
    },
    subtitle: {
      fr: 'Découvrez nos réalisations en salon : balayages lumineux, nuances burgundy intenses, soins réparateurs et brushings glamour.',
      ar: 'اكتشفي جانباً من إبداعات صالون جمانة: بالياج بتدرجات ناعمة، صبغة البورغندي المميزة، علاجات الترميم وتسريحات السهرات.',
    },
    filterAll: { fr: 'Tout', ar: 'الكل' },
    filterHammam: { fr: 'Balayage & Mèches', ar: 'بالياج وخصلات' },
    filterCoiffure: { fr: 'Colorations & Nuances', ar: 'الصبغات والألوان' },
    filterMassage: { fr: 'Soins & Botox', ar: 'علاجات الشعر' },
    filterAmbiance: { fr: 'Coiffure & Mariée', ar: 'تسريحات العرائس' },
    openImage: { fr: 'Agrandir l’image', ar: 'تكبير الصورة' },
    closeLightbox: { fr: 'Fermer', ar: 'إغلاق' },
    previousImage: { fr: 'Image précédente', ar: 'الصورة السابقة' },
    nextImage: { fr: 'Image suivante', ar: 'الصورة التالية' },
    galleryItems: {
      'gallery-balayage-sunlight': {
        title: { fr: 'Balayage Miel & Reflets Dorés', ar: 'بالياج عسلي وانعكاسات ذهبية' },
        description: { fr: 'Dégradé subtil apportant lumière et volume naturel.', ar: 'تدرج لوني ناعم يمنح الشعر لمعاناً ونضارة طبيعية.' },
      },
      'gallery-hair-styling': {
        title: { fr: 'Ondulations Wavy Chic', ar: 'تموجات ويفي راقية' },
        description: { fr: 'Brushing souple pour une chevelure rebondie et brillante.', ar: 'سيشوار احترافي بحركة انسيابية وكثافة أنيقة.' },
      },
      'gallery-burgundy-glow': {
        title: { fr: 'Nuance Burgundy Profonde', ar: 'صبغة البورغندي العنابي الفاخرة' },
        description: { fr: 'Couleur vibrante aux reflets rubis sous lumière naturelle.', ar: 'لون غني وتدرجات ياقوتية تبرز فخامة الشعر.' },
      },
      'gallery-hair-care-ritual': {
        title: { fr: 'Soin Capillaire & Bain Nutritif', ar: 'جلسة تغذية وترميم عميق' },
        description: { fr: 'Infusion d\'actifs réparateurs pour revitaliser les longueurs.', ar: 'ترميم مكثف يعيد الحيوية والمرونة لألياف الشعر.' },
      },
      'gallery-dimensional-blonde': {
        title: { fr: 'Balayage Blond Lumineux', ar: 'بالياج أشقر متعدد الأبعاد' },
        description: { fr: 'Éclaircissement sans démarcation avec patine perlée.', ar: 'تفتيح احترافي مدمج مع رنساج لؤلؤي ساحر.' },
      },
      'gallery-bridal-coiffure': {
        title: { fr: 'Chignon & Coiffure de Cérémonie', ar: 'تسريحة عروس ملكية' },
        description: { fr: 'Création sculptée avec finesse pour un jour d\'exception.', ar: 'شينيون فخم صُمم بعناية فائقة لليلة الزفاف.' },
      },
    },
  },

  aboutPage: {
    title: {
      fr: 'L\'Univers Joumana Hair Style',
      ar: 'عالم جمانة هير ستايل',
    },
    tagline: {
      fr: 'Une passion dévouée à l\'art de la coiffure, de la coloration et à la valorisation de chaque femme.',
      ar: 'شغف حقيقي بفن تصفيف الشعر، أسرار الألوان وإبراز جمال كل سيدة بثقة وأناقة.',
    },
    storyP1: {
      fr: 'Fondé sur une passion sincère pour la coiffure féminine et la colorimétrie, Joumana Hair Style s\'est imposé comme une adresse de choix pour toutes celles qui recherchent des résultats capillaires soignés, modernes et durables.',
      ar: 'انطلاقاً من شغف عميق بتصفيف الشعر واحترافية الألوان، يقدم صالون جمانة تجربة متكاملة لكل سيدة تبحث عن التميز، الجودة والنتائج المتقنة التي تدوم.',
    },
    storyP2: {
      fr: 'Du balayage signature aux reflets fondus jusqu\'aux nuances intenses de burgundy, chaque chevelure est abordée avec respect et diagnostic précis pour préserver la santé et l\'éclat de votre fibre capillaire.',
      ar: 'من درجات البالياج المضيئة وسحب اللون الآمن إلى درجات البورغندي العصرية، نحرص في كل خطوة على فحص خصلاتكِ واستخدام أفضل المستحضرات لحماية صحة ولمعان شعركِ.',
    },
    avisHeading: {
      fr: 'Retours & Témoignages de nos Clientes',
      ar: 'آراء ورسائل زبوناتنا العزيزات',
    },
    avisNotice: {
      fr: 'Témoignages partagés avec passion sur Instagram',
      ar: 'شهادات وتجارب حقيقية متوفرة على حساب إنستغرام',
    },
    avisDescription: {
      fr: 'Découvrez les vidéos, transformations et retours enthousiastes partagés au quotidien sur notre compte Instagram @joumana.hairstyle.',
      ar: 'تابعي الفيديوهات والتحولات اليومية وآراء زبوناتنا المباشرة على حسابنا في إنستغرام @joumana.hairstyle.',
    },
    avisHammam: {
      fr: 'Le balayage est tout simplement parfait, le fondu est tellement naturel et mes cheveux sont restés doux !',
      ar: 'البالياج طلع يجنن والتدرج طبيعي جداً بدون أي خطوط، وشعري بقى ناعم وصحي!',
    },
    avisHair: {
      fr: 'La couleur burgundy est magnifique sous la lumière, exactement ce que je voulais pour mon événement !',
      ar: 'لون البورغندي خيالي ولمعته رائعة في الشمس، تماماً كما تمنيت لمناسبتي!',
    },
    avisStoryLabel: {
      fr: 'Instagram : Réalisations & Avis ✨',
      ar: 'إنستغرام: التحولات والآراء ✨',
    },
    instagramCallout: {
      fr: 'Voir les transformations sur @joumana.hairstyle',
      ar: 'شاهدي التحولات على @joumana.hairstyle',
    },
  },

  contactPage: {
    title: {
      fr: 'Prendre Rendez-vous au Salon',
      ar: 'حجز المواعيد والاستفسارات',
    },
    subtitle: {
      fr: 'Pour un balayage, une coloration ou un soin sur mesure, transmettez-nous votre demande ou retrouvez-nous sur les réseaux sociaux.',
      ar: 'لحجز جلسة بالياج، صبغة أو علاج مخصص لشعركِ، أرسلي طلب موعدكِ أو تواصلي معنا عبر صفحاتنا الاجتماعية.',
    },
    phoneCardTitle: { fr: 'Téléphone & Contact Direct', ar: 'الاتصال المباشر' },
    addressCardTitle: { fr: 'Localisation du Salon', ar: 'موقع الصالون' },
    hoursCardTitle: { fr: 'Horaires d\'Ouverture', ar: 'أوقات العمل' },
    hoursNotice: {
      fr: '',
      ar: '',
    },
    hoursDescription: {
      fr: '',
      ar: '',
    },
    openMapsBtn: { fr: 'Ouvrir sur Google Maps', ar: 'فتح الموقع على خرائط جوجل' },
    openInstaBtn: { fr: 'Instagram (@joumana.hairstyle)', ar: 'إنستغرام (@joumana.hairstyle)' },
    callAction: { fr: 'Appeler le salon', ar: 'اتصلي بالصالون' },
    mapAction: { fr: 'Voir l\'itinéraire Google Maps', ar: 'الاتجاهات على خرائط جوجل' },
    formIntro: {
      fr: 'Remplissez ce formulaire pour planifier votre séance en salon : notre équipe étudiera votre demande avec attention.',
      ar: 'يرجى ملء النموذج أدناه لتحديد موعدكِ في الصالون، وسيسعدنا تأكيد طلبكِ في أقرب وقت.',
    },
    notesPlaceholder: {
      fr: 'Ex: longueur actuelle des cheveux, couleur souhaitée, événement particulier...',
      ar: 'مثال: طول وكثافة الشعر الحالية، اللون المطلوب، مناسبة قادمة...',
    },

    form: {
      title: { fr: 'Demande de Rendez-vous en Salon', ar: 'طلب موعد في الصالون' },
      nameLabel: { fr: 'Nom complet', ar: 'الاسم الكامل' },
      namePlaceholder: { fr: 'Ex: Sarah B.', ar: 'مثال: سارة ب.' },
      phoneLabel: { fr: 'Numéro de téléphone', ar: 'رقم الهاتف' },
      phonePlaceholder: { fr: '05.. .. .. ..', ar: '05.. .. .. ..' },
      serviceLabel: { fr: 'Prestation souhaitée', ar: 'الخدمة المطلوبة' },
      dateLabel: { fr: 'Date souhaitée', ar: 'التاريخ المفضل' },
      notesLabel: { fr: 'Détails sur vos cheveux ou votre projet (optionnel)', ar: 'تفاصيل عن شعركِ أو استفسار إضافي (اختياري)' },
      notesPlaceholder: { fr: 'Ex: cheveux méchés, couleur naturelle brune, souhait de balayage miel...', ar: 'مثال: شعر مصبوغ سابقاً، لون طبيعي بني، رغبة في بالياج عسلي...' },
      submitBtn: { fr: 'Envoyer ma demande de rendez-vous', ar: 'تأكيد إرسال طلب الموعد' },
      confirmationTitle: { fr: 'Demande de Rendez-vous Enregistrée', ar: 'تم تسجيل طلب الموعد بنجاح' },
      confirmationBody: {
        fr: 'Merci ! Votre demande a bien été enregistrée pour Joumana Hair Style. Retrouvez également nos réalisations quotidiennes sur Instagram @joumana.hairstyle.',
        ar: 'شكراً لكِ! تم تسجيل طلب موعدكِ بنجاح في صالون جمانة هير ستايل. يسعدنا أيضاً متابعتكِ لأحدث التحولات على إنستغرام @joumana.hairstyle.',
      },
      closeBtn: { fr: 'Fermer', ar: 'إغلاق' },
    },
  },

  drawer: {
    selectForBooking: {
      fr: 'Choisir cette prestation pour mon RDV',
      ar: 'اختيار هذه الخدمة لحجز موعد',
    },
    close: {
      fr: 'Fermer',
      ar: 'إغلاق',
    },
    detailsTitle: {
      fr: 'Détails de la prestation',
      ar: 'تفاصيل الخدمة',
    },
    highlightsTitle: {
      fr: 'Ce que comprend cette prestation',
      ar: 'ما تشمله الخدمة',
    },
    sensoryTitle: {
      fr: 'Cadre & Confort en Salon',
      ar: 'الراحة والعناية في الصالون',
    },
  },
};
