import profileImage from '@/assets/profile-new.jpg';
import { useBackgroundTheme, getThemeColors } from '@/hooks/useBackgroundTheme';
import { useMouseParallax, getParallaxStyle } from '@/hooks/useMouseParallax';

const ProfileSection = () => {
  const theme = useBackgroundTheme();
  const colors = getThemeColors(theme);
  const { parallaxOffset } = useMouseParallax(0.8);

  return (
    <div className="flex flex-col items-center space-y-6 mb-12 opacity-0 animate-fade-in-up perspective-1000">
      {/* Profile Picture with Neon Glow */}
      <div 
        className="relative animate-float"
        style={getParallaxStyle(parallaxOffset, 1.2, true)}
      >
        {/* Animated glow ring */}
        <div 
          className="absolute inset-0 rounded-full animate-pulse-glow opacity-50"
          style={getParallaxStyle(parallaxOffset, -0.5)}
        />
        
        <div className={`${colors.glowClass} rounded-full p-1 transition-smooth relative`}>
          <img
            src={profileImage}
            alt="Pruuingoo Profile"
            className={`w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 ${colors.borderClass} transition-all duration-500 hover:scale-105 hover:rotate-3`}
          />
        </div>
        
        {/* Decorative floating orbs with inverse parallax */}
        <div 
          className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue animate-float opacity-70"
          style={{
            ...getParallaxStyle(parallaxOffset, -2),
            animationDelay: '0.5s',
          }}
        />
        <div 
          className="absolute -bottom-1 -left-3 w-3 h-3 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple animate-float opacity-60"
          style={{
            ...getParallaxStyle(parallaxOffset, -1.5),
            animationDelay: '1s',
          }}
        />
        <div 
          className="absolute top-1/2 -right-6 w-2 h-2 rounded-full bg-accent animate-float opacity-50"
          style={{
            ...getParallaxStyle(parallaxOffset, -2.5),
            animationDelay: '1.5s',
          }}
        />
      </div>

      {/* Name with animated gradient */}
      <h1 
        className={`text-4xl md:text-5xl font-bold font-gluten text-center bg-gradient-to-r ${colors.textGradient} bg-clip-text text-transparent transition-smooth bg-[length:200%_200%] animate-text-gradient animate-fade-in-scale`}
        style={{
          ...getParallaxStyle(parallaxOffset, 0.3),
          animationDelay: '0.3s',
          animationFillMode: 'forwards',
        }}
      >
        Pruuingoo
      </h1>
    </div>
  );
};

export default ProfileSection;
