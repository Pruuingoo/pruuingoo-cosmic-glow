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
          {/* Desktop: Side by Side | Mobile: Stacked */}
          <div className="flex flex-col lg:flex-row lg:gap-8 lg:items-start">
            {/* Left Side: Profile + About */}
            <div className="flex-1 lg:sticky lg:top-8">
              <ProfileSection />
              <AboutSection />
            </div>
            
            {/* Right Side: Social Links */}
            <div className="flex-1">
              <SocialGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
