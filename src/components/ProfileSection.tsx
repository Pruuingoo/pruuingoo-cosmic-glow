import profileImage from '@/assets/profile-new.jpg';
import { useBackgroundTheme, getThemeColors } from '@/hooks/useBackgroundTheme';
import { Button } from '@/components/ui/button';

interface ProfileSectionProps {
  onDiscordClick: () => void;
}

const ProfileSection = ({ onDiscordClick }: ProfileSectionProps) => {
  const theme = useBackgroundTheme();
  const colors = getThemeColors(theme);

  return (
    <div className="flex flex-col items-center space-y-6 mb-12">
      {/* Profile Picture with Neon Glow */}
      <div className="relative">
        <div className={`${colors.glowClass} rounded-full p-1 transition-smooth`}>
          <img
            src={profileImage}
            alt="Pruuingoo Profile"
            className={`w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 ${colors.borderClass} transition-smooth`}
          />
        </div>
      </div>

      {/* Name */}
      <h1 className={`text-4xl md:text-5xl font-bold font-gluten text-center bg-gradient-to-r ${colors.textGradient} bg-clip-text text-transparent transition-smooth`}>
        Pruuingoo
      </h1>

      {/* Discord Button - Only show in landscape mode */}
      {theme === 'landscape' && (
        <Button
          onClick={onDiscordClick}
          className="bg-[#5865f2] hover:bg-[#4752c4] text-white font-semibold px-6 py-3 rounded-full shadow-lg relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:to-transparent before:pointer-events-none"
        >
          <span className="hidden sm:inline relative z-10">Join Nytharc Discord Server</span>
          <span className="sm:hidden relative z-10">Join Nytharc</span>
        </Button>
      )}
    </div>
  );
};

export default ProfileSection;