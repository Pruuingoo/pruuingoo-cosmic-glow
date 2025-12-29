import { useState } from 'react';
import ParallaxBackground from '@/components/ParallaxBackground';
import ProfileSection from '@/components/ProfileSection';
import AboutSection from '@/components/AboutSection';
import SocialGrid from '@/components/SocialGrid';
import FeaturedTrack from '@/components/FeaturedTrack';
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
        <div className="w-full max-w-7xl mx-auto">
          {/* Desktop: Side by Side | Mobile: Stacked */}
          <div className="flex flex-col lg:flex-row lg:gap-8 lg:items-start">
            {/* Left Side: Profile + About + Featured Track */}
            <div className="flex-1 lg:sticky lg:top-8">
              <ProfileSection />
              <AboutSection onDiscordClick={() => setDiscordModalOpen(true)} />
              <FeaturedTrack />
            </div>
            
            {/* Right Side: Social Links */}
            <div className="flex-1">
              <SocialGrid />
              
              {/* Discord Button - Only show in portrait mode, under social grid */}
              <div className="lg:hidden flex justify-center mt-6 opacity-0 animate-bounce-in" style={{ animationDelay: '1.5s' }}>
                <Button
                  onClick={() => setDiscordModalOpen(true)}
                  className="bg-[#5865f2] hover:bg-[#4752c4] text-white font-semibold px-6 py-3 rounded-full shadow-lg relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:to-transparent before:pointer-events-none btn-press transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(88,101,242,0.5)]"
                >
                  <span className="hidden sm:inline relative z-10">Join Nytharc Discord Server</span>
                  <span className="sm:hidden relative z-10">Join Nytharc</span>
                </Button>
              </div>
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
