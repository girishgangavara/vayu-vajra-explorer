import { Building, Phone, MapPin, Bus, Users, Shield } from 'lucide-react';

const DepotInfo = () => {
  return (
    <section id="depot" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Operating Depot</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Managed by BMTC's dedicated airport service division
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Main depot card */}
          <div className="glass-strong rounded-2xl p-8 shadow-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-glow">
                  <Building className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Whitefield Depot</h3>
                  <p className="text-muted-foreground">BMTC Division - 45</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground">
                      BMTC Whitefield Bus Depot, Near ITPL Main Road,<br />
                      Whitefield, Bengaluru - 560066
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Contact</p>
                    <p className="text-sm text-muted-foreground">
                      BMTC Helpline: 1800-425-1663<br />
                      Depot Office: 080-2845-xxxx
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats cards */}
          <div className="space-y-4">
            <div className="glass p-6 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Bus className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gradient-gold">15+</p>
                <p className="text-sm text-muted-foreground">Premium Volvo Buses</p>
              </div>
            </div>

            <div className="glass p-6 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gradient">50+</p>
                <p className="text-sm text-muted-foreground">Trained Staff & Drivers</p>
              </div>
            </div>

            <div className="glass p-6 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-3xl font-bold text-green-500">24/7</p>
                <p className="text-sm text-muted-foreground">Safety & Monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepotInfo;
