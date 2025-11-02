import { useBackgroundTheme, getThemeColors } from '@/hooks/useBackgroundTheme';

const AboutSection = () => {
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
    </div>
  );
};

export default AboutSection;