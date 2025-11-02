import profileImage from '@/assets/profile-new.jpg';
import { useBackgroundTheme, getThemeColors } from '@/hooks/useBackgroundTheme';

const ProfileSection = () => {
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
    </div>
  );
};

export default ProfileSection;