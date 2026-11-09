import React from 'react';
import { assets } from '../data/assets.ts';

export interface LogoProps {
  variant?: 'full' | 'mark' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  surface?: 'light' | 'dark' | 'auto';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  size = 'md',
  surface = 'light',
  showSubtitle = true,
  className = '',
}) => {
  const isMarkOnly = variant === 'mark';

  // Rose Gold / Copper Brand Token
  const copperColor = '#B76E58';

  // Sizing definitions matching original slots to prevent layout shift
  const markSizes = {
    sm: 'h-9 w-9',
    md: 'h-11 w-11',
    lg: 'h-16 w-16',
    xl: 'h-24 w-24',
    custom: '',
  };

  const fullSizes = {
    sm: 'h-12 w-auto',
    md: 'h-16 w-auto',
    lg: 'h-24 w-auto',
    xl: 'h-28 sm:h-32 w-auto',
    custom: '',
  };

  const sizeClass = isMarkOnly
    ? markSizes[size] || markSizes.md
    : fullSizes[size] || fullSizes.md;

  // 1. Inline SVG Mark Version (Crisp JHS monogram in copper circle for compact slots & favicon)
  if (isMarkOnly) {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`select-none shrink-0 ${sizeClass} ${className}`}
        aria-label="Joumana Hair Style"
        role="img"
      >
        {/* Polished Rose-Gold / Copper Circle */}
        <circle cx="50" cy="50" r="44" stroke={copperColor} strokeWidth="2.2" />

        {/* Top-Right Floral & Botanical Leaf Accent */}
        <g id="floral-accent">
          {/* Leaves along upper-right rim */}
          <path d="M 68 14 C 74 10 82 12 85 18 C 80 18 73 17 68 14 Z" fill={copperColor} />
          <path d="M 78 18 C 86 16 92 22 91 29 C 87 25 81 22 78 18 Z" fill={copperColor} />
          <path d="M 86 28 C 94 28 97 36 94 42 C 90 38 87 33 86 28 Z" fill={copperColor} />
          
          {/* Soft Peach Floral Petals */}
          <circle cx="76" cy="22" r="7" fill="#FDF4ED" stroke={copperColor} strokeWidth="1" />
          <circle cx="76" cy="22" r="2.5" fill={copperColor} />
          <circle cx="85" cy="20" r="4.5" fill="#E89D82" stroke={copperColor} strokeWidth="0.8" />
          <circle cx="85" cy="20" r="1.5" fill="#B76E58" />
        </g>

        {/* Serif Monogram: J H S */}
        <g
          fontFamily="'Playfair Display', 'Cormorant Garamond', Georgia, serif"
          fontWeight="600"
          fill={copperColor}
          textAnchor="middle"
        >
          {/* J */}
          <text x="31" y="60" fontSize="34" letterSpacing="-0.05em">
            J
          </text>
          {/* H */}
          <text x="51" y="60" fontSize="33" letterSpacing="-0.02em">
            H
          </text>
          {/* S */}
          <text x="70" y="60" fontSize="33" letterSpacing="-0.02em">
            S
          </text>
        </g>

        {/* Curved Subtitle Base Line */}
        <path
          d="M 28 80 C 42 90 58 90 74 80"
          stroke={copperColor}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="1 2"
        />
      </svg>
    );
  }

  // 2. Full Attached Brand Logo Artwork (Rose-Gold Floral Logo with clean surface treatment)
  // On white or cream surfaces, it sits directly with seamless natural background.
  // If placed on a dark surface, it sits inside a soft rounded pure white card badge so it never renders as a harsh square.
  const isDarkSurface = surface === 'dark';

  return (
    <div
      className={`inline-flex items-center justify-center select-none ${
        isDarkSurface
          ? 'bg-white rounded-2xl p-2.5 shadow-md border border-[#EADBCE]'
          : ''
      } ${className}`}
    >
      <img
        src={assets.logo}
        alt="Joumana Hair Style — Salon de Coiffure"
        className={`${sizeClass} w-auto max-w-[280px] object-contain transition-opacity duration-300`}
        loading="eager"
        decoding="async"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
