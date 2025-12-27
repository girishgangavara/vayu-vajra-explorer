import { MapPin, Plane, Building2 } from 'lucide-react';

const stops = [
  { name: "Vydehi Hospital", type: "origin", time: "0 min" },
  { name: "ITPL Main Gate", type: "stop", time: "5 min" },
  { name: "Whitefield Bus Stand", type: "major", time: "10 min" },
  { name: "Mahadevapura", type: "stop", time: "18 min" },
  { name: "KR Puram", type: "major", time: "25 min" },
  { name: "Tin Factory", type: "stop", time: "30 min" },
  { name: "Banaswadi", type: "stop", time: "38 min" },
  { name: "Kasturi Nagar", type: "stop", time: "42 min" },
  { name: "Kalyan Nagar", type: "stop", time: "48 min" },
  { name: "HBR Layout", type: "stop", time: "52 min" },
  { name: "Hebbal", type: "major", time: "58 min" },
  { name: "Esteem Mall", type: "stop", time: "62 min" },
  { name: "Yelahanka", type: "major", time: "70 min" },
  { name: "Trumpet Flyover", type: "stop", time: "80 min" },
  { name: "Kempegowda International Airport", type: "destination", time: "90 min" },
];

const RouteStops = () => {
  return (
    <section id="route" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Route Stops</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            15 major stops connecting Whitefield IT Hub to Kempegowda International Airport
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 route-line transform -translate-x-1/2 rounded-full" />

          {stops.map((stop, index) => (
            <div
              key={stop.name}
              className={`relative flex items-center gap-4 md:gap-8 mb-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Content card */}
              <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                <div className={`glass-strong p-4 rounded-xl inline-block ${
                  stop.type === 'origin' || stop.type === 'destination' 
                    ? 'border-accent/50' 
                    : stop.type === 'major' 
                    ? 'border-primary/50' 
                    : ''
                }`}>
                  <h3 className={`font-semibold text-lg ${
                    stop.type === 'origin' || stop.type === 'destination' 
                      ? 'text-gradient-gold' 
                      : 'text-foreground'
                  }`}>
                    {stop.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{stop.time} from start</p>
                </div>
              </div>

              {/* Timeline node */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  stop.type === 'origin' 
                    ? 'bg-gradient-to-br from-accent to-accent/80 shadow-gold' 
                    : stop.type === 'destination' 
                    ? 'bg-gradient-to-br from-primary to-primary/80 shadow-glow' 
                    : stop.type === 'major'
                    ? 'bg-secondary border-2 border-primary'
                    : 'bg-secondary border-2 border-muted'
                }`}>
                  {stop.type === 'origin' && <Building2 className="w-5 h-5 text-accent-foreground" />}
                  {stop.type === 'destination' && <Plane className="w-5 h-5 text-primary-foreground" />}
                  {(stop.type === 'stop' || stop.type === 'major') && (
                    <MapPin className={`w-4 h-4 ${stop.type === 'major' ? 'text-primary' : 'text-muted-foreground'}`} />
                  )}
                </div>
              </div>

              {/* Empty space for alignment */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RouteStops;
