import { useBackgroundTheme, getThemeColors } from '@/hooks/useBackgroundTheme';
import { Button } from '@/components/ui/button';
import { useMouseParallax, getParallaxStyle } from '@/hooks/useMouseParallax';

interface AboutSectionProps {
  onDiscordClick: () => void;
}

const AboutSection = ({ onDiscordClick }: AboutSectionProps) => {
  const theme = useBackgroundTheme();
  const colors = getThemeColors(theme);
  const { parallaxOffset } = useMouseParallax(0.5);

  return (
    <div 
      className="w-full max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in-up" 
      style={{ 
        ...getParallaxStyle(parallaxOffset, 0.4),
        animationDelay: '0.4s' 
      }}
    >
      <div className="glass-container p-8 border-2 border-dashed border-white/20 transition-smooth group">
        <h2 className={`text-2xl font-semibold font-poppins mb-4 text-center ${colors.accentColor} transition-smooth group-hover:scale-105`}>
          About Me
        </h2>
        <p className="text-lg text-center leading-relaxed text-muted-foreground font-inter transition-all duration-300 group-hover:text-foreground/80">
          Hi I'm Plui or Pruuingoo or Plubinki or pruim whatever you wanna call me i like to do random stuff and random projects. I also like gaming and stuff.
        </p>
      </div>

      {/* Discord Button - Only show in landscape mode */}
      {theme === 'landscape' && (
        <div 
          className="flex justify-center mt-6 opacity-0 animate-bounce-in" 
          style={{ 
            ...getParallaxStyle(parallaxOffset, 0.6),
            animationDelay: '0.6s' 
          }}
        >
          <Button
            onClick={onDiscordClick}
            className="bg-[#5865f2] hover:bg-[#4752c4] text-white font-semibold px-6 py-3 rounded-full shadow-lg relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:to-transparent before:pointer-events-none btn-press transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(88,101,242,0.5)]"
          >
            <span className="hidden sm:inline relative z-10">Join Nytharc Discord Server</span>
            <span className="sm:hidden relative z-10">Join Nytharc</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default AboutSection;
