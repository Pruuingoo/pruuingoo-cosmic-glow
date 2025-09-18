import ParallaxBackground from '@/components/ParallaxBackground';
import ProfileSection from '@/components/ProfileSection';
import AboutSection from '@/components/AboutSection';
import SocialGrid from '@/components/SocialGrid';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Parallax Background */}
      <ParallaxBackground />
      
      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-6xl mx-auto">
          <ProfileSection />
          <AboutSection />
          <SocialGrid />
        </div>
      </div>
    </div>
  );
};

export default Index;
