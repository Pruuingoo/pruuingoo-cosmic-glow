import { useEffect, useState } from 'react';
import bgPortrait from '@/assets/bg-portrait.jpg';
import bgLandscape from '@/assets/bg-landscape.jpg';
import { useMouseParallax } from '@/hooks/useMouseParallax';

const ParallaxBackground = () => {
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { parallaxOffset } = useMouseParallax(0.3);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = isPortrait ? bgPortrait : bgLandscape;
    img.onload = () => setImageLoaded(true);
  }, [isPortrait]);

  return (
    <>
      {/* Background Image with Zoom, Fade-in, and Mouse Parallax */}
      <div className="parallax-container z-0">
        <div 
          className={`absolute inset-0 w-[130%] h-[130%] -top-[15%] -left-[15%] bg-cover bg-center bg-no-repeat transition-all duration-1000 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
          style={{
            backgroundImage: `url(${isPortrait ? bgPortrait : bgLandscape})`,
            transform: `translate3d(${parallaxOffset.x * -0.5}px, ${parallaxOffset.y * -0.5}px, 0) scale(1.1)`,
            transition: 'transform 0.3s ease-out, opacity 1s ease-out',
          }}
        />
        
        {/* Purple-blue gradient overlay with animated opacity */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ${imageLoaded ? 'opacity-60' : 'opacity-80'}`}
          style={{
            background: 'var(--gradient-overlay)',
          }}
        />

        {/* Animated gradient orbs with mouse parallax */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-float"
            style={{
              background: 'radial-gradient(circle, hsl(var(--neon-purple)) 0%, transparent 70%)',
              top: '10%',
              left: '10%',
              animationDuration: '8s',
              transform: `translate3d(${parallaxOffset.x * 3}px, ${parallaxOffset.y * 3}px, 0)`,
              transition: 'transform 0.2s ease-out',
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
              transform: `translate3d(${parallaxOffset.x * -2}px, ${parallaxOffset.y * -2}px, 0)`,
              transition: 'transform 0.2s ease-out',
            }}
          />
          <div 
            className="absolute w-64 h-64 rounded-full blur-3xl opacity-10 animate-float"
            style={{
              background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)',
              top: '50%',
              left: '50%',
              animationDuration: '12s',
              animationDelay: '4s',
              transform: `translate3d(calc(-50% + ${parallaxOffset.x * 4}px), calc(-50% + ${parallaxOffset.y * 4}px), 0)`,
              transition: 'transform 0.2s ease-out',
            }}
          />
          {/* Additional floating orbs */}
          <div 
            className="absolute w-48 h-48 rounded-full blur-2xl opacity-10 animate-float"
            style={{
              background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
              top: '70%',
              left: '20%',
              animationDuration: '9s',
              animationDelay: '1s',
              transform: `translate3d(${parallaxOffset.x * 2.5}px, ${parallaxOffset.y * 2.5}px, 0)`,
              transition: 'transform 0.2s ease-out',
            }}
          />
          <div 
            className="absolute w-56 h-56 rounded-full blur-3xl opacity-8 animate-float"
            style={{
              background: 'radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)',
              top: '30%',
              right: '25%',
              animationDuration: '11s',
              animationDelay: '3s',
              transform: `translate3d(${parallaxOffset.x * -3}px, ${parallaxOffset.y * -3}px, 0)`,
              transition: 'transform 0.2s ease-out',
            }}
          />
        </div>
      </div>

      {/* Snowflake Overlay */}
      <SnowflakeOverlay parallaxOffset={parallaxOffset} />
    </>
  );
};

interface SnowflakeOverlayProps {
  parallaxOffset: { x: number; y: number };
}

const SnowflakeOverlay = ({ parallaxOffset }: SnowflakeOverlayProps) => {
  const [snowflakes, setSnowflakes] = useState<Array<{
    id: number;
    left: number;
    animationDuration: number;
    animationDelay: number;
    fontSize: number;
    character: string;
    depth: number;
  }>>([]);

  useEffect(() => {
    const snowflakeChars = ['❄', '❅', '❆', '✻', '✼', '❋', '✧', '✦'];
    const newSnowflakes = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: Math.random() * 5 + 8,
      animationDelay: Math.random() * 8,
      fontSize: Math.random() * 0.6 + 0.4,
      character: snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)],
      depth: Math.random() * 2 + 0.5, // 0.5-2.5 for parallax intensity
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
            transform: `translate3d(${parallaxOffset.x * flake.depth}px, 0, 0)`,
            transition: 'transform 0.15s ease-out',
          }}
        >
          {flake.character}
        </div>
      ))}
    </div>
  );
};

export default ParallaxBackground;
