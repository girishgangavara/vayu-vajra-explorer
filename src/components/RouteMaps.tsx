import { Map } from 'lucide-react';
import kia15RouteMap from '@/assets/kia-15-route-map.png';
import kia15aRouteMap from '@/assets/kia-15a-route-map.png';

const RouteMaps = () => {
  return (
    <section id="route-maps" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Route Maps</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Visual guides for KIA-15 & KIA-15A routes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* KIA-15 Route */}
          <div className="glass-strong rounded-2xl p-6 shadow-card overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-glow">
                <Map className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">KIA-15 Route Map</h3>
                <p className="text-sm text-muted-foreground">Vydehi TTMC → Airport (41.90 km)</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-border/50">
              <img 
                src={kia15RouteMap} 
                alt="KIA-15 Route Map from Vydehi Whitefield TTMC to Airport" 
                className="w-full h-auto object-contain bg-white"
              />
            </div>
          </div>

          {/* KIA-15A Route */}
          <div className="glass-strong rounded-2xl p-6 shadow-card overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-gold">
                <Map className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">KIA-15A Route Map</h3>
                <p className="text-sm text-muted-foreground">Airport → Whitefield Area (48.76 km)</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-border/50">
              <img 
                src={kia15aRouteMap} 
                alt="KIA-15A Route Map from Airport to Whitefield covering entire Whitefield area" 
                className="w-full h-auto object-contain bg-white"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-4 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
              <span className="font-medium text-red-400">Note:</span> KIA-15A operates only at night from Airport to City. It covers the entire Whitefield area including Varthur Kodi, CMRIT, Kundalahalli Gate, and Graphite India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RouteMaps;
