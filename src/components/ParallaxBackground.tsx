import { useEffect, useState } from 'react';
import bgPortrait from '@/assets/bg-portrait.jpg';
import bgLandscape from '@/assets/bg-landscape.jpg';

const ParallaxBackground = () => {
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Background Image with Zoom */}
      <div className="parallax-container z-0">
        <div 
          className="absolute inset-0 w-[120%] h-[120%] -top-[10%] -left-[10%] bg-cover bg-center bg-no-repeat transition-all duration-700"
          style={{
            backgroundImage: `url(${isPortrait ? bgPortrait : bgLandscape})`,
          }}
        />
        
        {/* Purple-blue gradient overlay */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: 'var(--gradient-overlay)',
          }}
        />
      </div>

      {/* Snowflake Overlay */}
      <SnowflakeOverlay />
    </>
  );
};

const SnowflakeOverlay = () => {
  const [snowflakes, setSnowflakes] = useState<Array<{
    id: number;
    left: number;
    animationDuration: number;
    animationDelay: number;
    fontSize: number;
    character: string;
  }>>([]);

  useEffect(() => {
    const snowflakeChars = ['❄', '❅', '❆', '✻', '✼', '❋'];
    const newSnowflakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: Math.random() * 3 + 7, // 7-10 seconds
      animationDelay: Math.random() * 5,
      fontSize: Math.random() * 0.5 + 0.5, // 0.5-1rem
      character: snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)],
    }));

    setSnowflakes(newSnowflakes);
  }, []);

  return (
    <div className="parallax-container z-10 pointer-events-none">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake blur-sm"
          style={{
            left: `${flake.left}%`,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.animationDelay}s`,
            fontSize: `${flake.fontSize}rem`,
          }}
        >
          {flake.character}
        </div>
      ))}
    </div>
  );
};

export default ParallaxBackground;