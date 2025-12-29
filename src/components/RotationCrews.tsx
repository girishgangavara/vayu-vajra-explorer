import { Users, Calendar } from 'lucide-react';

const crewData = [
  {
    busNumber: "KIA-15/1",
    crews: [
      { name: "HariKrishna", days: ["Monday", "Thursday", "Saturday"] },
      { name: "Ananda", days: ["Tuesday", "Friday", "Sunday"] }
    ]
  },
  {
    busNumber: "KIA-15/2",
    crews: [
      { name: "Narayanaswamy", days: ["Monday", "Thursday", "Saturday"] },
      { name: "Sivappa", days: ["Tuesday", "Friday", "Sunday"] }
    ]
  },
  {
    busNumber: "KIA-15/3",
    crews: [
      { name: "Raghunathreddy", days: ["Monday", "Thursday", "Saturday"] },
      { name: "Chandrashekar", days: ["Tuesday", "Friday", "Sunday"] }
    ]
  },
  {
    busNumber: "KIA-15/4",
    crews: [
      { name: "Narayanaswamy", days: ["Monday", "Thursday", "Saturday"] },
      { name: "Babu", days: ["Tuesday", "Friday", "Sunday"] }
    ]
  },
  {
    busNumber: "KIA-15/5",
    crews: [
      { name: "Maruthi", days: ["Monday", "Thursday", "Saturday"] },
      { name: "SivaRaman", days: ["Tuesday", "Friday", "Sunday"] }
    ]
  },
  {
    busNumber: "KIA-15/7",
    crews: [
      { name: "Basappa", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] }
    ]
  }
];

const RotationCrews = () => {
  const getInitials = (name: string) => {
    return name.slice(0, 2).toUpperCase();
  };

  const formatDays = (days: string[]) => {
    if (days.length === 6 && !days.includes("Sunday")) {
      return "Mon - Sat";
    }
    return days.map(d => d.slice(0, 3)).join(", ");
  };

  return (
    <section id="crews" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Rotation Crews</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet our dedicated crew members who ensure your safe and comfortable journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {crewData.map((bus, index) => (
            <div
              key={bus.busNumber}
              className="glass-card rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    {bus.busNumber.split('/')[1]}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{bus.busNumber}</h3>
                  <p className="text-xs text-muted-foreground">Crew Schedule</p>
                </div>
              </div>

              <div className="space-y-4">
                {bus.crews.map((crew, crewIndex) => (
                  <div
                    key={crew.name}
                    className="flex items-center gap-4 p-3 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    {/* Avatar placeholder */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-lg">{getInitials(crew.name)}</span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground truncate">{crew.name}</h4>
                      <div className="flex items-center gap-1.5 mt-1">
                        <Calendar className="w-3 h-3 text-accent" />
                        <span className="text-xs text-muted-foreground">{formatDays(crew.days)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-4 px-6 py-4 rounded-2xl bg-background/50 border border-border/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-sm text-muted-foreground">Regular Rotation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <span className="text-sm text-muted-foreground">Weekly Schedule</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RotationCrews;
