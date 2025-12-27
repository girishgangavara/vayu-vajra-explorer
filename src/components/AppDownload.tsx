import { Smartphone, Download, Star } from 'lucide-react';

const AppDownload = () => {
  return (
    <section id="app" className="py-24 relative bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-3xl p-8 md:p-12 shadow-card relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gradient">Download KIA-15 App</span>
              </h2>
              
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                Get the dedicated KIA-15 route app for Crew Details, real-time tracking, schedules, and notifications. Available on both platforms!
              </p>

              <div className="flex items-center justify-center gap-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
                <span className="text-muted-foreground ml-2">Trusted by commuters</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://play.google.com/store/search?q=kia-15&c=apps" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 glass px-6 py-4 rounded-xl hover:bg-primary/20 transition-all hover:scale-105 border border-border/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-green-500" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">GET IT ON</p>
                    <p className="font-semibold text-foreground">Google Play</p>
                  </div>
                  <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>

                <a 
                  href="https://apps.apple.com/in/app/kia-15/id6751138454" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 glass px-6 py-4 rounded-xl hover:bg-primary/20 transition-all hover:scale-105 border border-border/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-foreground" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">Download on the</p>
                    <p className="font-semibold text-foreground">App Store</p>
                  </div>
                  <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>

              <p className="text-xs text-muted-foreground mt-6">
                * The KIA-15 app is developed by Girish and support from Depot-18 authorities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
