import { Users, Calendar, UserCheck } from 'lucide-react';

const crewData = [
  {
    busNumber: "KIA-15/1",
    crews: [
      { name: "(1295) HariKrishna", photo: "https://lfuthmexacgvbyjufbih.supabase.co/storage/v1/object/public/vayuvajra/harikrishna.png", days: ["Tuesday", "Friday", "Sunday"] },
      { name: "(12040) Ananda", photo: "https://lfuthmexacgvbyjufbih.supabase.co/storage/v1/object/public/vayuvajra/Ananda.png", days: ["Monday", "Wednesday", "Saturday"] },
      { name: "(5483) Keshava", photo: "https://lfuthmexacgvbyjufbih.supabase.co/storage/v1/object/public/vayuvajra/keshava.png", days: ["Thursday"] },
    ]
  },
  {
    busNumber: "KIA-15/2",
    crews: [
      { name: "(4817) Narayanaswamy", photo: "https://lfuthmexacgvbyjufbih.supabase.co/storage/v1/object/public/vayuvajra/narayanaswamy.jpg", days: ["Monday", "Thursday", "Saturday"] },
      { name: "(11542) Sivappa", photo: "https://lfuthmexacgvbyjufbih.supabase.co/storage/v1/object/public/vayuvajra/siavppa.png", days: ["Wednesday", "Friday", "Sunday"] },
      { name: "(5483) Keshava", photo: "https://lfuthmexacgvbyjufbih.supabase.co/storage/v1/object/public/vayuvajra/keshava.png", days: ["Tuesday"] },
    ]
  },
  {
    busNumber: "KIA-15/3",
    crews: [
      { name: "(451) Raghunathreddy", photo: "https://lfuthmexacgvbyjufbih.supabase.co/storage/v1/object/public/vayuvajra/Raghunathreddy.jpeg", days: ["Monday", "Wednesday", "Friday"] },
      { name: "(403) Chandrashekar Reddy", photo: "https://lfuthmexacgvbyjufbih.supabase.co/storage/v1/object/public/vayuvajra/chandrashekar.png", days: ["Tuesday", "Thursday", "Saturday"] },
      { name: "(5483) Keshava", photo: "https://lfuthmexacgvbyjufbih.supabase.co/storage/v1/object/public/vayuvajra/keshava.png", days: ["Sunday"] },
    ]
  },
  {
    busNumber: "KIA-15/4",
    crews: [
      { name: "(2197) Narayanaswamy", photo: "https://lfuthmexacgvbyjufbih.supabase.co/storage/v1/object/public/vayuvajra/narayanaswamy.png", days: ["Wednesday", "Friday", "Sunday"] },
      { name: "(1415) Babu", photo: "https://lfuthmexacgvbyjufbih.supabase.co/storage/v1/object/public/vayuvajra/BABU.jpeg", days: ["Monday", "Thursday", "Saturday"] },
      { name: "(10095) Ravi Kumar N", photo: "https://lfuthmexacgvbyjufbih.supabase.co/storage/v1/object/public/vayuvajra/ravikumarn.png", days: ["Tuesday"] },
    ]
  },
  {
    busNumber: "KIA-15/5",
    crews: [
      { name: "(2250) Siva Raman", photo: "https://lfuthmexacgvbyjufbih.supabase.co/storage/v1/object/public/vayuvajra/shivaraman.jpg", days: ["Monday", "Wednesday", "Friday"] },
      { name: "(2959) Maruthi", photo: "https://lfuthmexacgvbyjufbih.supabase.co/storage/v1/object/public/vayuvajra/maruti.png", days: ["Tuesday", "Thursday", "Saturday"] },
      { name: "(10095) Ravi Kumar N", photo: "https://lfuthmexacgvbyjufbih.supabase.co/storage/v1/object/public/vayuvajra/ravikumarn.png", days: ["Sunday"] },
    ]
  },
  {
    busNumber: "KIA-15/7",
    crews: [
      { name: "(23338) Shivaraj", photo: "https://lfuthmexacgvbyjufbih.supabase.co/storage/v1/object/public/vayuvajra/pictures/23338Shivaraj", days: [ "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"] }
    ]
  }
];

const reliefCrews = [
  { name: "(10095) Ravikumar", photo: "https://lfuthmexacgvbyjufbih.supabase.co/storage/v1/object/public/vayuvajra/ravikumarn.png", role: "Relief Driver",days: [" Sunday (KIA-15/5), "," Tuesday (KIA-15/4)"] },
  { name: "(5483) Keshava", photo: "https://lfuthmexacgvbyjufbih.supabase.co/storage/v1/object/public/vayuvajra/keshava.png", role: "Relief Driver",days: [" Sunday (KIA-15/3), "," Tuesday (KIA-15/2), "," Thursday (KIA-15/1)"] },
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
            <span className="text-gradient">KIA-15 Rotation Crews</span>
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
        {/* <div className="mt-5">
          <div className="text-center mb-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <UserCheck className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Backup Support</span>
            </div>
            <h2 className="text-4xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">KIA-15 Half Lever Crews</span>
            </h2>
            <p className="text-muted-foreground mt-2">
              Half Lever team steps in when regular crews are off duty
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
                <p className="text-sm text-accent mt-1">{crew.days}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Legend */}
        {/* <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-4 px-6 py-4 rounded-2xl bg-background/50 border border-border/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-sm text-muted-foreground">Regular Rotation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <span className="text-sm text-muted-foreground">Half Lever</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default RotationCrews;
