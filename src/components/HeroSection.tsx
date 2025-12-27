import { Plane, Clock, MapPin, Wifi } from 'lucide-react';
import Bus3D from './Bus3D';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-slide-up">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-accent">Premium Airport Service</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-gradient">KIA-15/15A</span>
            <br />
            <span className="text-foreground">Vayu Vajra</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Premium AC Volvo Service connecting{' '}
            <span className="text-primary font-semibold">Whitefield & Vydehi</span> to{' '}
            <span className="text-accent font-semibold">Kempegowda International Airport</span>
          </p>

          {/* Quick info cards */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="glass-strong px-6 py-3 rounded-xl flex items-center gap-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-medium">Every 30 mins</span>
            </div>
            <div className="glass-strong px-6 py-3 rounded-xl flex items-center gap-3 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <MapPin className="w-5 h-5 text-accent" />
              <span className="font-medium">~25 Stops</span>
            </div>
            <div className="glass-strong px-6 py-3 rounded-xl flex items-center gap-3 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Wifi className="w-5 h-5 text-primary" />
              <span className="font-medium">Free WiFi</span>
            </div>
            <div className="glass-strong px-6 py-3 rounded-xl flex items-center gap-3 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <Plane className="w-5 h-5 text-accent" />
              <span className="font-medium">Direct to Airport</span>
            </div>
          </div>
        </div>

        {/* 3D Bus */}
        <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Bus3D />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float-slow">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll to Explore</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
