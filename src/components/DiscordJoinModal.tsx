import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import nytharcIcon from '@/assets/nytharc-icon.png';

interface DiscordJoinModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DiscordJoinModal = ({ open, onOpenChange }: DiscordJoinModalProps) => {
  const handleJoin = () => {
    window.open('https://discord.com/invite/sWW7ccu2rW', '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-[#313338] border-[#1e1f22] p-0 overflow-hidden">
        <div className="relative">
          {/* Banner area */}
          <div className="h-20 bg-gradient-to-br from-blue-500 to-purple-600" />
          
          {/* Server Icon */}
          <div className="absolute left-1/2 -translate-x-1/2 top-8">
            <div className="w-20 h-20 rounded-full border-4 border-[#313338] overflow-hidden animate-pulse">
              <img 
                src={nytharcIcon} 
                alt="Nytharc Server" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="pt-14 pb-6 px-4 text-center">
            <h2 className="text-white text-2xl font-bold mb-2 animate-fade-in">
              Nytharc
            </h2>
            
            <div className="flex items-center justify-center gap-2 text-[#b5bac1] text-sm mb-6">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>Online</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-gray-500" />
                <span>Members</span>
              </div>
            </div>

            {/* Join Button */}
            <Button
              onClick={handleJoin}
              className="w-full bg-[#5865f2] hover:bg-[#4752c4] text-white font-semibold relative group overflow-hidden"
            >
              <span className="relative z-10">Join</span>
              <div className="absolute inset-0 border-2 border-blue-400 rounded-md animate-pulse opacity-50 group-hover:opacity-75" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DiscordJoinModal;
