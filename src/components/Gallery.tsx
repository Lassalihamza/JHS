import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles, X, ZoomIn } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT } from '../data/content.ts';
import { ASSETS, GalleryAsset } from '../data/assets.ts';

const filters = [
  { id: 'all', label: CONTENT.galleryPage.filterAll },
  { id: 'balayage', label: CONTENT.galleryPage.filterHammam },
  { id: 'coloration', label: CONTENT.galleryPage.filterCoiffure },
  { id: 'soins', label: CONTENT.galleryPage.filterMassage },
  { id: 'mariee', label: CONTENT.galleryPage.filterAmbiance },
];

export const Gallery: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [failedImages, setFailedImages] = useState<Set<string>>(() => new Set());

  const visibleAssets = ASSETS.gallery.filter(
    (asset) => activeCategory === 'all' || asset.category === activeCategory
  );
  const selectedIndex = visibleAssets.findIndex((asset) => asset.id === selectedId);
  const selectedAsset = selectedIndex >= 0 ? visibleAssets[selectedIndex] : null;

  const moveSelection = (direction: number) => {
    if (selectedIndex < 0 || visibleAssets.length === 0) return;
    const nextIndex = (selectedIndex + direction + visibleAssets.length) % visibleAssets.length;
    setSelectedId(visibleAssets[nextIndex].id);
  };

  useEffect(() => {
    if (!selectedAsset) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedId(null);
      if (event.key === 'ArrowLeft') moveSelection(isRTL ? 1 : -1);
      if (event.key === 'ArrowRight') moveSelection(isRTL ? -1 : 1);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedAsset, selectedIndex, visibleAssets, isRTL]);

  const getCopy = (asset: GalleryAsset) =>
    CONTENT.galleryPage.galleryItems[
      asset.id as keyof typeof CONTENT.galleryPage.galleryItems
    ] || {
      title: { fr: 'Réalisation Joumana Hair Style', ar: 'إبداع جمانة هير ستايل' },
      description: { fr: 'Transformation capillaire réalisée avec soin au salon.', ar: 'تصفيف وتلوين نُفذ بعناية فائقة في الصالون.' },
    };

  const renderImage = (asset: GalleryAsset, title: string) => {
    if (failedImages.has(asset.id)) {
      return (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#2C221E] text-[#E89D82] p-4 text-center">
          <Sparkles aria-hidden="true" className="h-12 w-12 opacity-60 mb-2" strokeWidth={1.5} />
          <span className="text-xs font-serif tracking-widest">{title}</span>
        </div>
      );
    }

    return (
      <img
        src={asset.src}
        alt={title}
        width={600}
        height={450}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-104"
        loading="lazy"
        onError={() => setFailedImages((current) => new Set(current).add(asset.id))}
      />
    );
  };

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      className="w-full overflow-x-clip bg-[#FAF6F2] py-12 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#B76E58]">
            {t(CONTENT.galleryPage.eyebrow)}
          </span>
          <h1 className="mt-2 mb-3 font-heading text-3xl sm:text-5xl font-normal text-[#2C221E] leading-tight">
            {t(CONTENT.galleryPage.title)}
          </h1>
          <p className="mx-auto max-w-xl font-body text-xs sm:text-sm leading-relaxed text-[#82726B]">
            {t(CONTENT.galleryPage.subtitle)}
          </p>
        </header>

        {/* Filter Pills */}
        <div
          className="mx-auto mb-8 sm:mb-12 flex max-w-full items-center overflow-x-auto scrollbar-none snap-x gap-1.5 rounded-full border border-[#ECDCCE] bg-[#F5EBE6] p-1.5 shadow-xs -mx-2 px-2 sm:mx-auto sm:w-fit"
          role="group"
          aria-label={t(CONTENT.galleryPage.title)}
        >
          {filters.map((filter) => {
            const active = activeCategory === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => {
                  setActiveCategory(filter.id);
                  setSelectedId(null);
                }}
                className={`snap-center shrink-0 min-h-[44px] rounded-full px-4 sm:px-5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B76E58] whitespace-nowrap ${
                  active ? 'bg-[#2C221E] text-white font-semibold shadow-xs' : 'text-[#82726B] hover:text-[#2C221E]'
                }`}
                aria-pressed={active}
              >
                {t(filter.label)}
              </button>
            );
          })}
        </div>

        {/* Gallery Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visibleAssets.map((asset) => {
              const copy = getCopy(asset);
              return (
                <motion.button
                  key={asset.id}
                  layout
                  type="button"
                  onClick={() => setSelectedId(asset.id)}
                  aria-label={`${t(copy.title)}. ${t(CONTENT.galleryPage.openImage)}`}
                  className="group relative isolate aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#ECDCCE] text-start shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B76E58] active:scale-99 transition-transform"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  {renderImage(asset, t(copy.title))}
                  <span className="absolute inset-0 bg-gradient-to-t from-[#2C221E]/90 via-[#2C221E]/20 to-transparent" />
                  
                  <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5 text-white">
                    <span className="min-w-0">
                      <span className="block font-heading text-xl sm:text-2xl leading-tight text-white">
                        {t(copy.title)}
                      </span>
                      <span className="mt-1 block max-w-xs font-body text-[11px] sm:text-xs leading-relaxed text-white/90 line-clamp-2">
                        {t(copy.description)}
                      </span>
                    </span>
                    <span className="mb-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-[#2C221E]/60 text-[#E89D82] shadow-sm">
                      <ZoomIn aria-hidden="true" className="h-4 w-4" />
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedAsset && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-lightbox-title"
            aria-describedby="gallery-lightbox-description"
            onClick={() => setSelectedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedId(null)}
              aria-label={t(CONTENT.galleryPage.closeLightbox)}
              className="absolute end-3 top-3 z-20 min-h-[44px] min-w-[44px] rounded-full border border-white/20 bg-black/60 p-2.5 text-white flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B76E58]"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>

            {/* Prev Button */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                moveSelection(-1);
              }}
              aria-label={t(CONTENT.galleryPage.previousImage)}
              className="absolute start-2 top-1/2 z-20 -translate-y-1/2 min-h-[44px] min-w-[44px] rounded-full border border-white/20 bg-black/60 p-2.5 text-white flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B76E58]"
            >
              <ChevronLeft aria-hidden="true" className={`h-6 w-6 ${isRTL ? 'rotate-180' : ''}`} />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                moveSelection(1);
              }}
              aria-label={t(CONTENT.galleryPage.nextImage)}
              className="absolute end-2 top-1/2 z-20 -translate-y-1/2 min-h-[44px] min-w-[44px] rounded-full border border-white/20 bg-black/60 p-2.5 text-white flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B76E58]"
            >
              <ChevronRight aria-hidden="true" className={`h-6 w-6 ${isRTL ? 'rotate-180' : ''}`} />
            </button>

            {/* Modal Content */}
            <motion.div
              key={selectedAsset.id}
              className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#B76E58]/40 bg-[#2C221E] shadow-2xl"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-black">
                {renderImage(selectedAsset, t(getCopy(selectedAsset).title))}
              </div>
              <div className="border-t border-white/10 p-4 sm:p-5 text-white">
                <h2 id="gallery-lightbox-title" className="font-heading text-xl sm:text-2xl text-white">
                  {t(getCopy(selectedAsset).title)}
                </h2>
                <p id="gallery-lightbox-description" className="mt-1 font-body text-xs sm:text-sm leading-relaxed text-[#E2D5CD]">
                  {t(getCopy(selectedAsset).description)}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};