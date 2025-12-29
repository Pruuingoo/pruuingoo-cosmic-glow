import { useMouseParallax, getParallaxStyle } from '@/hooks/useMouseParallax';
import trackCover from '@/assets/hiding-from-the-sheer-cover.jpg';

const streamingLinks = [
  { 
    name: 'Spotify', 
    icon: 'https://cdn.simpleicons.org/spotify/1DB954', 
    url: 'https://open.spotify.com/track/3kpihIl0LXgFtzUS6rLCHP',
    color: '#1DB954'
  },
  { 
    name: 'YouTube Music', 
    icon: 'https://cdn.simpleicons.org/youtubemusic/FF0000', 
    url: 'https://music.youtube.com/watch?v=Ad3Tn9ptK1E',
    color: '#FF0000'
  },
  { 
    name: 'Apple Music', 
    icon: 'https://cdn.simpleicons.org/applemusic/FA243C', 
    url: 'https://music.apple.com/us/song/hiding-from-the-sheer/1864013502',
    color: '#FA243C'
  },
  { 
    name: 'Deezer', 
    icon: 'https://cdn.simpleicons.org/deezer/A238FF', 
    url: 'https://deezer.com/track/3737778952',
    color: '#A238FF'
  },
];

const FeaturedTrack = () => {
  const { parallaxOffset } = useMouseParallax(0.5);

  return (
    <div 
      className="w-full max-w-md mx-auto mt-8 lg:mt-0 animate-fade-in-up"
      style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
    >
      {/* Section Header */}
      <div className="text-center mb-4">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/20 text-primary rounded-full animate-pulse-glow">
          Latest Release
        </span>
      </div>

      {/* Track Card */}
      <div 
        className="relative group"
        style={getParallaxStyle(parallaxOffset, 0.3)}
      >
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse-glow" />
        
        {/* Card Content */}
        <div className="relative bg-card/90 backdrop-blur-xl rounded-2xl p-5 border border-border/50 overflow-hidden">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Cover Art */}
          <div 
            className="relative aspect-square rounded-xl overflow-hidden mb-4 shadow-2xl group-hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] transition-all duration-500"
            style={getParallaxStyle(parallaxOffset, 0.2)}
          >
            {/* Spinning Border Effect */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-xl animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDuration: '8s' }} />
            
            <div className="absolute inset-[2px] rounded-xl overflow-hidden bg-black">
              <img 
                src={trackCover} 
                alt="Hiding From The Sheer - Cover Art"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Shimmer Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500" />
            </div>
          </div>

          {/* Track Info */}
          <div className="relative text-center mb-5">
            <h3 className="text-xl font-bold text-foreground mb-1 animate-fade-in-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
              Hiding From The Sheer
            </h3>
            <p className="text-muted-foreground text-sm animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              by <span className="text-primary font-medium">Pruuingoo</span>
            </p>
          </div>

          {/* Streaming Links */}
          <div className="relative grid grid-cols-2 gap-3">
            {streamingLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-background/50 hover:bg-background/80 border border-border/30 hover:border-primary/50 transition-all duration-300 group/link animate-bounce-in hover:scale-105 hover:shadow-lg"
                style={{ 
                  animationDelay: `${0.9 + index * 0.1}s`,
                  animationFillMode: 'forwards',
                  ['--link-color' as string]: link.color,
                }}
              >
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover/link:scale-110 bg-background/30"
                >
                  <img 
                    src={link.icon} 
                    alt={link.name}
                    className="w-5 h-5"
                  />
                </div>
                <span className="text-sm font-medium text-foreground/80 group-hover/link:text-foreground transition-colors">
                  {link.name}
                </span>
              </a>
            ))}
          </div>

          {/* Play Button Overlay - appears on hover */}
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
            <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.5)] animate-pulse-glow">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTrack;
