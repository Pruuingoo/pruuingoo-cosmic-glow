import { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Copy, ExternalLink, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SocialLink {
  name: string;
  icon: string;
  url: string;
  color: string;
  category?: 'primary' | 'secondary';
}

const socialLinks: SocialLink[] = [
  { name: 'Discord', icon: 'https://cdn.simpleicons.org/discord/ffffff', url: 'https://discord.com/users/1090665275986296904', color: '#5865F2' },
  { name: 'Instagram', icon: 'https://cdn.simpleicons.org/instagram/ffffff', url: 'instagram', color: '#E4405F' },
  { name: 'Roblox', icon: 'https://cdn.simpleicons.org/roblox/ffffff', url: 'roblox', color: '#00A2FF' },
  { name: 'YouTube', icon: 'https://cdn.simpleicons.org/youtube/ffffff', url: 'youtube', color: '#FF0000' },
  { name: 'YT Music', icon: 'https://cdn.simpleicons.org/youtubemusic/ffffff', url: 'https://music.youtube.com/@nowepruim', color: '#FF0000' },
  { name: 'Spotify', icon: 'https://cdn.simpleicons.org/spotify/ffffff', url: 'https://open.spotify.com/user/31ppymothvlza2wailufkvr2oojy', color: '#1DB954' },
  { name: 'SoundCloud', icon: 'https://cdn.simpleicons.org/soundcloud/ffffff', url: 'https://soundcloud.com/pruuingoo', color: '#FF5500' },
  { name: 'AniList', icon: 'https://cdn.simpleicons.org/anilist/ffffff', url: 'https://anilist.co/user/pruuingoo', color: '#02A9FF' },
  { name: 'MyAnimeList', icon: 'https://cdn.simpleicons.org/myanimelist/ffffff', url: 'https://myanimelist.net/profile/Pruuingoo', color: '#2E51A2' },
  { name: 'Kitsu', icon: 'https://cdn.simpleicons.org/kitsu/ffffff', url: 'https://kitsu.app/users/1653421', color: '#F75239' },
  { name: 'Pinterest', icon: 'https://cdn.simpleicons.org/pinterest/ffffff', url: 'https://pinterest.com/OttrxZPqu', color: '#BD081C' },
  { name: 'X', icon: 'https://cdn.simpleicons.org/x/ffffff', url: 'https://pastebin.com/pyz2Eeur', color: '#000000' },
  { name: 'Bluesky', icon: 'https://cdn.simpleicons.org/bluesky/ffffff', url: 'https://bsky.app/profile/pruuingoo.bsky.social', color: '#1185FE' },
  { name: 'Reddit', icon: 'https://cdn.simpleicons.org/reddit/ffffff', url: 'https://reddit.com/user/Tasty-Replacement310/', color: '#FF4500' },
  { name: 'Twitch', icon: 'https://cdn.simpleicons.org/twitch/ffffff', url: 'https://twitch.tv/pruuingoo', color: '#9146FF' },
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/ffffff', url: 'https://github.com/pruuingoo', color: '#181717' },
  { name: 'TikTok', icon: 'https://cdn.simpleicons.org/tiktok/ffffff', url: 'https://tiktok.com/@pruuingoo', color: '#000000' },
  { name: 'Email', icon: 'https://cdn.simpleicons.org/gmail/ffffff', url: 'mailto:me@pruuingoo.site', color: '#EA4335' },
];

const instagramOptions = [
  { name: 'Instagram (Pruuingoo)', url: 'https://instagram.com/pruuingoo/', type: 'primary' },
  { name: 'Instagram (Plubinki)', url: 'https://instagram.com/plubinki/', type: 'secondary' },
];

const robloxOptions = [
  { name: 'Roblox (Main)', url: 'https://roblox.com/users/5279565619/profile', type: 'primary' },
  { name: 'Roblox (Alt)', url: 'https://www.roblox.com/users/8808804903/profile', type: 'secondary' },
];

const youtubeOptions = [
  { name: 'Pruuingoo', url: 'https://youtube.com/@Pruuingoo', type: 'primary' },
  { name: 'Pruuingoo Sounds', url: 'https://youtube.com/@pruuingoobutpruim', type: 'secondary' },
];

const SocialGrid = () => {
  const [selectedModal, setSelectedModal] = useState<SocialLink | null>(null);
  const [choiceModal, setChoiceModal] = useState<'instagram' | 'roblox' | 'youtube' | null>(null);
  const { toast } = useToast();

  const handleSocialClick = (social: SocialLink) => {
    if (social.url === 'instagram') {
      setChoiceModal('instagram');
    } else if (social.url === 'roblox') {
      setChoiceModal('roblox');
    } else if (social.url === 'youtube') {
      setChoiceModal('youtube');
    } else {
      setSelectedModal(social);
    }
  };

  const handleChoiceClick = (option: { name: string; url: string; type: string }) => {
    setChoiceModal(null);
    const iconMap = {
      instagram: 'https://cdn.simpleicons.org/instagram/ffffff',
      roblox: 'https://cdn.simpleicons.org/roblox/ffffff',
      youtube: 'https://cdn.simpleicons.org/youtube/ffffff',
    };
    const colorMap = {
      instagram: '#E4405F',
      roblox: '#00A2FF',
      youtube: '#FF0000',
    };
    setSelectedModal({
      name: option.name,
      icon: iconMap[choiceModal as keyof typeof iconMap],
      url: option.url,
      color: colorMap[choiceModal as keyof typeof colorMap],
    });
  };

  const copyToClipboard = (text: string) => {
    const cleanText = text.startsWith('mailto:') ? text.replace('mailto:', '') : text;
    navigator.clipboard.writeText(cleanText);
    toast({
      title: "Copied!",
      description: "Link copied to clipboard",
      duration: 2000,
    });
  };

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  const getDisplayUrl = (url: string) => {
    return url.startsWith('mailto:') ? url.replace('mailto:', '') : url;
  };

  return (
    <TooltipProvider>
      <div className="w-full max-w-4xl mx-auto mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="glass-container p-8">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6 place-items-center">
            {socialLinks.map((social, index) => (
              <Tooltip key={social.name}>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => handleSocialClick(social)}
                    className="social-icon w-16 h-16 rounded-full p-3 backdrop-blur-sm border flex items-center justify-center opacity-0 animate-bounce-in btn-press"
                    style={{
                      borderColor: `${social.color}40`,
                      boxShadow: `0 0 20px ${social.color}30`,
                      animationDelay: `${0.6 + index * 0.05}s`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 40px ${social.color}70, 0 0 60px ${social.color}40`;
                      e.currentTarget.style.borderColor = `${social.color}80`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 20px ${social.color}30`;
                      e.currentTarget.style.borderColor = `${social.color}40`;
                    }}
                  >
                    <img 
                      src={social.icon} 
                      alt={social.name}
                      className="w-full h-full object-contain transition-transform duration-300"
                    />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="top" className="animate-fade-in-up">
                  <p className="font-medium">{social.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>

      {/* Social Link Modal */}
      <Dialog open={!!selectedModal} onOpenChange={() => setSelectedModal(null)}>
        <DialogContent className="sm:max-w-md bg-card border-border animate-fade-in-scale">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              {selectedModal && (
                <>
                  <img 
                    src={selectedModal.icon} 
                    alt={selectedModal.name} 
                    className="w-8 h-8 animate-bounce-in" 
                  />
                  <span className="animate-fade-in-up">{selectedModal.name}</span>
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          <div className="flex items-center space-x-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <Input
              value={selectedModal ? getDisplayUrl(selectedModal.url) : ''}
              readOnly
              className="flex-1 bg-input transition-all duration-300 focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div className="flex gap-3 justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button
              onClick={() => selectedModal && openLink(selectedModal.url)}
              className="btn-gradient text-white border-0 btn-press hover:scale-105 transition-transform"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open
            </Button>
            <Button
              onClick={() => selectedModal && copyToClipboard(selectedModal.url)}
              variant="secondary"
              className="btn-press hover:scale-105 transition-transform"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy
            </Button>
          </div>
          <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button
              variant="outline"
              onClick={() => setSelectedModal(null)}
              className="border-border hover:bg-muted btn-press hover:scale-105 transition-transform"
            >
              <X className="w-4 h-4 mr-2" />
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Choice Modals */}
      <Dialog open={!!choiceModal} onOpenChange={() => setChoiceModal(null)}>
        <DialogContent className="sm:max-w-md bg-card border-border animate-fade-in-scale">
          <DialogHeader>
            <DialogTitle className="text-center animate-fade-in-down">
              Choose {choiceModal === 'instagram' ? 'Instagram' : choiceModal === 'roblox' ? 'Roblox' : 'YouTube'} Account
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-3">
            {(choiceModal === 'instagram' ? instagramOptions : choiceModal === 'roblox' ? robloxOptions : youtubeOptions).map((option, index) => (
              <Button
                key={option.name}
                onClick={() => handleChoiceClick(option)}
                variant={option.type === 'primary' ? 'default' : 'secondary'}
                className={`${option.type === 'primary' ? 'btn-gradient text-white' : ''} btn-press hover:scale-[1.02] transition-all duration-300 opacity-0 animate-slide-in-left`}
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {option.name}
              </Button>
            ))}
            <Button
              variant="outline"
              onClick={() => setChoiceModal(null)}
              className="border-border hover:bg-muted btn-press hover:scale-[1.02] transition-all duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
};

export default SocialGrid;
