import { useBackgroundTheme, getThemeColors } from '@/hooks/useBackgroundTheme';
import { Button } from '@/components/ui/button';

interface AboutSectionProps {
  onDiscordClick: () => void;
}

const AboutSection = ({ onDiscordClick }: AboutSectionProps) => {
  const theme = useBackgroundTheme();
  const colors = getThemeColors(theme);

  return (
    <div className="w-full max-w-2xl mx-auto mb-12">
      <div className="glass-container p-8 border-2 border-dashed border-white/20 transition-smooth">
        <h2 className={`text-2xl font-semibold font-poppins mb-4 text-center ${colors.accentColor} transition-smooth`}>
          About Me
        </h2>
        <p className="text-lg text-center leading-relaxed text-muted-foreground font-inter">
          Hi I'm Plui or Pruuingoo or Plubinki or pruim whatever you wanna call me i like to do random stuff and random projects. I also like gaming and stuff.
        </p>
      </div>

      {/* Discord Button - Only show in portrait mode */}
      {theme === 'portrait' && (
        <div className="flex justify-center mt-6">
          <Button
            onClick={onDiscordClick}
            className="bg-[#5865f2] hover:bg-[#4752c4] text-white font-semibold px-6 py-3 rounded-full shadow-lg relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:to-transparent before:pointer-events-none"
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