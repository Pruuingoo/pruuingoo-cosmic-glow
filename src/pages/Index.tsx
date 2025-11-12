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
              
              {/* Discord Join Button */}
              <div className="w-full max-w-2xl mx-auto mb-12">
                <Button
                  onClick={() => setDiscordModalOpen(true)}
                  className="w-full bg-[#5865f2] hover:bg-[#4752c4] text-white font-semibold px-6 py-3 rounded-full shadow-lg relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:to-transparent before:pointer-events-none"
                >
                  <span className="hidden sm:inline relative z-10">Join Nytharc Discord Server</span>
                  <span className="sm:hidden relative z-10">Join Nytharc</span>
                </Button>
              </div>
            </div>
            
            {/* Right Side: Social Links */}
            <div className="flex-1">
              <SocialGrid />
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
