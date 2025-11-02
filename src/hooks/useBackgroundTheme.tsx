import { useEffect, useState } from 'react';

export type BackgroundTheme = 'portrait' | 'landscape';

export const useBackgroundTheme = () => {
  const [theme, setTheme] = useState<BackgroundTheme>(
    window.innerHeight > window.innerWidth ? 'portrait' : 'landscape'
  );

  useEffect(() => {
    const handleResize = () => {
      setTheme(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return theme;
};

export const getThemeColors = (theme: BackgroundTheme) => {
  return theme === 'portrait' 
    ? {
        glowClass: 'neon-pink',
        borderClass: 'border-pink-400',
        textGradient: 'from-pink-400 via-purple-400 to-blue-400',
        accentColor: 'text-pink-400',
      }
    : {
        glowClass: 'neon-cyan',
        borderClass: 'border-cyan-400',
        textGradient: 'from-cyan-400 via-blue-400 to-purple-400',
        accentColor: 'text-cyan-400',
      };
};
