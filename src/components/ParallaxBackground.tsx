import { useEffect, useState } from 'react';
import bgPortrait from '@/assets/bg-portrait.jpg';
import bgLandscape from '@/assets/bg-landscape.jpg';

const ParallaxBackground = () => {
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.src = isPortrait ? bgPortrait : bgLandscape;
    img.onload = () => setImageLoaded(true);
  }, [isPortrait]);

  return (
    <>
      {/* Background Image with Zoom and Fade-in */}
      <div className="parallax-container z-0">
        <div 
          className={`absolute inset-0 w-[120%] h-[120%] -top-[10%] -left-[10%] bg-cover bg-center bg-no-repeat transition-all duration-1000 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
          style={{
            backgroundImage: `url(${isPortrait ? bgPortrait : bgLandscape})`,
          }}
        />
        
        {/* Purple-blue gradient overlay with animated opacity */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ${imageLoaded ? 'opacity-60' : 'opacity-80'}`}
          style={{
            background: 'var(--gradient-overlay)',
          }}
        />

        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-float"
            style={{
              background: 'radial-gradient(circle, hsl(var(--neon-purple)) 0%, transparent 70%)',
              top: '10%',
              left: '10%',
              animationDuration: '8s',
            }}
          />
          <div 
            className="absolute w-80 h-80 rounded-full blur-3xl opacity-15 animate-float"
            style={{
              background: 'radial-gradient(circle, hsl(var(--neon-blue)) 0%, transparent 70%)',
              bottom: '20%',
              right: '15%',
              animationDuration: '10s',
              animationDelay: '2s',
            }}
          />
          <div 
            className="absolute w-64 h-64 rounded-full blur-3xl opacity-10 animate-float"
            style={{
              background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              animationDuration: '12s',
              animationDelay: '4s',
            }}
          />
        </div>
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
    drift: number;
  }>>([]);

  useEffect(() => {
    const snowflakeChars = ['❄', '❅', '❆', '✻', '✼', '❋', '✧', '✦'];
    const newSnowflakes = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: Math.random() * 5 + 8, // 8-13 seconds
      animationDelay: Math.random() * 8,
      fontSize: Math.random() * 0.6 + 0.4, // 0.4-1rem
      character: snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)],
      drift: (Math.random() - 0.5) * 50, // -25 to 25 px drift
    }));

    setSnowflakes(newSnowflakes);
  }, []);

  return (
    <div className="parallax-container z-10 pointer-events-none">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.animationDelay}s`,
            fontSize: `${flake.fontSize}rem`,
            filter: `blur(${flake.fontSize < 0.6 ? 1 : 0}px)`,
            opacity: flake.fontSize < 0.6 ? 0.4 : 0.7,
          }}
        >
          {flake.character}
        </div>
      ))}
    </div>
  );
};

export default ParallaxBackground;
