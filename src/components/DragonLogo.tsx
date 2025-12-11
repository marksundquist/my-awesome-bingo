interface DragonLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function DragonLogo({ size = 'md', className = '' }: DragonLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className={`${sizeClasses[size]} ${className} transition-transform hover:scale-105 duration-300`}
      role="img"
      aria-label="Dragon emblem"
    >
      {/* Dragon head silhouette - heraldic style */}
      
      {/* Head shape */}
      <path
        d="M 50 15 Q 35 20, 30 35 Q 28 45, 30 55 Q 32 65, 40 70 L 50 75 L 60 70 Q 68 65, 70 55 Q 72 45, 70 35 Q 65 20, 50 15 Z"
        fill="#d4af37"
        stroke="#8b2e2e"
        strokeWidth="2"
      />
      
      {/* Eye left */}
      <circle cx="40" cy="42" r="4" fill="#8b2e2e" />
      
      {/* Eye right */}
      <circle cx="60" cy="42" r="4" fill="#8b2e2e" />
      
      {/* Nostril left */}
      <ellipse cx="42" cy="58" rx="2" ry="3" fill="#8b2e2e" />
      
      {/* Nostril right */}
      <ellipse cx="58" cy="58" rx="2" ry="3" fill="#8b2e2e" />
      
      {/* Horn left */}
      <path
        d="M 35 25 L 25 10 L 30 22 Z"
        fill="#d4af37"
        stroke="#8b2e2e"
        strokeWidth="1.5"
      />
      
      {/* Horn right */}
      <path
        d="M 65 25 L 75 10 L 70 22 Z"
        fill="#d4af37"
        stroke="#8b2e2e"
        strokeWidth="1.5"
      />
      
      {/* Jaw/snout */}
      <path
        d="M 35 62 Q 40 68, 50 70 Q 60 68, 65 62"
        fill="none"
        stroke="#8b2e2e"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Teeth marks */}
      <path
        d="M 45 68 L 45 72 M 50 69 L 50 73 M 55 68 L 55 72"
        stroke="#8b2e2e"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Neck scales */}
      <path
        d="M 40 75 Q 45 80, 50 82 Q 55 80, 60 75"
        fill="none"
        stroke="#8b2e2e"
        strokeWidth="1.5"
      />
      
      {/* Decorative crest */}
      <path
        d="M 50 15 L 48 8 L 50 12 L 52 8 Z"
        fill="#ff6b35"
        stroke="#8b2e2e"
        strokeWidth="1"
      />
    </svg>
  );
}
