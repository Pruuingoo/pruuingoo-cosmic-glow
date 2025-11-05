import { useState } from 'react';
import ParallaxBackground from '@/components/ParallaxBackground';
import ProfileSection from '@/components/ProfileSection';
import AboutSection from '@/components/AboutSection';
import SocialGrid from '@/components/SocialGrid';
import DiscordJoinModal from '@/components/DiscordJoinModal';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [discordModalOpen, setDiscordModalOpen] = useState(false);

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

      {/* Discord Join Button - Fixed Position Centered Bottom */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30">
        <div className="relative">
          <Button
            onClick={() => setDiscordModalOpen(true)}
            className="bg-[#5865f2] hover:bg-[#4752c4] text-white font-semibold px-6 py-3 rounded-full shadow-lg animate-pulse hover:animate-none transition-all hover:scale-105"
          >
            <span className="hidden sm:inline">Join Nytharc Discord Server</span>
            <span className="sm:hidden">Join Nytharc</span>
          </Button>
          {/* Orbiting white dot */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 animate-spin" style={{ animationDuration: '3s' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-lg shadow-white/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Discord Join Modal */}
      <DiscordJoinModal 
        open={discordModalOpen} 
        onOpenChange={setDiscordModalOpen} 
      />
    </div>
  );
};

export default Index;
