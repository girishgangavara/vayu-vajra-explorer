import { Users, Calendar, UserCheck } from 'lucide-react';

const crewData = [
  {
    busNumber: "KIA-15/1",
    crews: [
      { name: "HariKrishna (1295)", photo: "https://firebasestorage.googleapis.com/v0/b/kia-5d-crewlist.appspot.com/o/harikrishna.png?alt=media&token=aecaaf5e-d8fa-45b8-854d-66b16f1b9ea5", days: ["Monday", "Thursday", "Saturday"] },
      { name: "Ananda", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face", days: ["Tuesday", "Friday", "Sunday"] }
    ]
  },
  {
    busNumber: "KIA-15/2",
    crews: [
      { name: "Narayanaswamy (4817)", photo: "https://firebasestorage.googleapis.com/v0/b/kia-5d-crewlist.appspot.com/o/Narayanaswamy.jpg?alt=media&token=4b340f82-bd1d-4b4a-b75c-0dee8b40b0b4", days: ["Monday", "Thursday", "Saturday"] },
      { name: "Sivappa", photo: "https://images.unsplash.com/photo-1599566150163-29194dcabd9c?w=150&h=150&fit=crop&crop=face", days: ["Tuesday", "Friday", "Sunday"] }
    ]
  },
  {
    busNumber: "KIA-15/3",
    crews: [
      { name: "Raghunathreddy (451)", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face", days: ["Monday", "Thursday", "Saturday"] },
      { name: "Chandrashekar (403)", photo: "https://firebasestorage.googleapis.com/v0/b/kia-5d-crewlist.appspot.com/o/IMG_20240425_221946_907-removebg-preview.png?alt=media&token=c90da2ea-88f0-4da6-b906-151454d3617d", days: ["Tuesday", "Friday", "Sunday"] }
    ]
  },
  {
    busNumber: "KIA-15/4",
    crews: [
      { name: "Narayanaswamy (2197)", photo: "https://firebasestorage.googleapis.com/v0/b/kia-5d-crewlist.appspot.com/o/narayanaswamy-removebg-preview.png?alt=media&token=415360a3-c4c6-47d5-a87d-ba98b23667b8", days: ["Monday", "Thursday", "Saturday"] },
      { name: "Babu (1415)", photo: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face", days: ["Tuesday", "Friday", "Sunday"] }
    ]
  },
  {
    busNumber: "KIA-15/5",
    crews: [
      { name: "Maruthi (2959)", photo: "https://firebasestorage.googleapis.com/v0/b/kia-5d-crewlist.appspot.com/o/IMG_20240425_223438-removebg-preview.png?alt=media&token=26071e20-4de4-479c-a8fa-8c18dafde5bc", days: ["Monday", "Thursday", "Saturday"] },
      { name: "SivaRaman (2250)", photo: "https://firebasestorage.googleapis.com/v0/b/kia-5d-crewlist.appspot.com/o/IMG_20240425_222312_317-removebg-preview.png?alt=media&token=f6a58a69-6f17-4a10-9aca-651d99aea684", days: ["Tuesday", "Friday", "Sunday"] }
    ]
  },
  {
    busNumber: "KIA-15/7",
    crews: [
      { name: "Basappa", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] }
    ]
  }
];

const reliefCrews = [
  { name: "Ravikumar (10095)", photo: "https://firebasestorage.googleapis.com/v0/b/kia-5d-crewlist.appspot.com/o/IMG_20240116_230603_135-removebg-preview.png?alt=media&token=53a4da18-5598-4ceb-9b24-c4c6fecc12cd", role: "Relief Driver" },
  { name: "Keshava (5483)", photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face", role: "Relief Driver" },
];

const RotationCrews = () => {
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
                {bus.crews.map((crew) => (
                  <div
                    key={crew.name}
                    className="flex items-center gap-4 p-3 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <img 
                      src={crew.photo} 
                      alt={crew.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/30 flex-shrink-0"
                    />
                    
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

        {/* Relief/Backup Crews Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <UserCheck className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Backup Support</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Relief / Backup Crews
            </h3>
            <p className="text-muted-foreground mt-2">
              Our relief team steps in when regular crews are off duty
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {reliefCrews.map((crew, index) => (
              <div
                key={crew.name}
                className="glass-card rounded-2xl p-6 hover:border-accent/40 transition-all duration-300 text-center min-w-[200px]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={crew.photo} 
                  alt={crew.name}
                  className="w-20 h-20 rounded-full object-cover border-3 border-accent/40 mx-auto mb-4"
                />
                <h4 className="font-semibold text-foreground text-lg">{crew.name}</h4>
                <p className="text-sm text-accent mt-1">{crew.role}</p>
              </div>
            ))}
          </div>
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
              <span className="text-sm text-muted-foreground">Relief / Backup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RotationCrews;
