import { Building, Phone, MapPin, Bus, Users, Shield, UserCircle, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const currentAuthorities = [
  {
    name: 'Mr. Mallikarjuna',
    role: 'Depot 18 Manager',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Mr. Suresh Kumar',
    role: 'Assistant Traffic Controller',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Mr. Rajashekar & Ms.Vidya',
    role: 'Traffic Controller',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Mr. Lokesh',
    role: 'Depot-18 Administrator',
    photo: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face'
  }
];

const formerAuthorities = [
  {
    name: 'Mr. Satish',
    role: 'Former Depot Manager',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Mr. Janimiya Bhagawan',
    role: 'Former Asst. Traffic Controller',
    photo: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face'
  }
];

const vydehiAuthorities = [
  {
    name: 'Mr. Ramakrishnappa',
    role: 'Traffic Controller',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Mr. Narayanaswamy',
    role: 'Traffic Controller',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Mr. Omkar Reddy',
    role: 'Traffic Controller',
    photo: 'https://images.unsplash.com/photo-1543132220-3ec99c6094dc?w=150&h=150&fit=crop&crop=face'
  }
];

const kadugodiAuthorities = [
  {
    name: 'Mr. Subramani',
    role: 'Assistant Traffic Inspector',
    photo: 'https://firebasestorage.googleapis.com/v0/b/kia-5d-crewlist.appspot.com/o/Subramanisir.png?alt=media&token=45e124ca-98db-407a-8fc1-06f25665c316'
  },
  {
    name: 'Mr. Patil',
    role: 'Traffic Controller',
    photo: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Mr. Mohammed Anif',
    role: 'Traffic Controller',
    photo: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Mr. Chandrashekar',
    role: 'Traffic Controller',
    photo: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face'
  }
];

interface AuthorityCardProps {
  name: string;
  role: string;
  photo: string;
  isFormer?: boolean;
}

const AuthorityCard = ({ name, role, photo, isFormer = false }: AuthorityCardProps) => (
  <div className="flex flex-col items-center text-center p-4 bg-card/50 rounded-xl border border-border/30 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
    <div className="relative mb-3">
      <img 
        src={photo} 
        alt={name}
        className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
      />
      {isFormer && (
        <Badge variant="secondary" className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[10px] px-1.5">
          Former
        </Badge>
      )}
    </div>
    <h4 className="font-semibold text-foreground text-sm">{name}</h4>
    <p className="text-xs text-muted-foreground mt-1">{role}</p>
  </div>
);

const DepotInfo = () => {
  return (
    <section id="depot" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Operating Depot</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Managed by BMTC's Whitefield 18 division
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          {/* Main depot card */}
          <div className="glass-strong rounded-2xl p-8 shadow-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-glow">
                  <Building className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Depot-18 Whitefield</h3>
                  <p className="text-muted-foreground">BMTC Airport Division</p>
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
                    <p className="font-medium text-foreground">Helpline Numbers</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p className="flex items-center gap-2">
                        <span className="text-accent font-medium">Vydehi TTMC:</span>
                        <a href="tel:7760991125" className="text-primary hover:underline">7760991125</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-accent font-medium">Airport T1:</span>
                        <a href="tel:7760991269" className="text-primary hover:underline">7760991269</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-accent font-medium">Airport T2:</span>
                        <a href="tel:7760991250" className="text-primary hover:underline">7760991250</a>
                      </p>
                    </div>
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
                <p className="text-3xl font-bold text-gradient-gold">6+</p>
                <p className="text-sm text-muted-foreground">Premium Volvo Buses</p>
              </div>
            </div>

            <div className="glass p-6 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gradient">100+</p>
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

        {/* Depot 18 Authorities */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Depot 18 Authorities
            </h3>
            <p className="text-muted-foreground">Meet the dedicated team managing operations</p>
          </div>

          {/* Current Authorities */}
          <Card className="glass border-border/50 mb-6">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <UserCircle className="w-5 h-5 text-primary" />
                Current Authorities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {currentAuthorities.map((auth, index) => (
                  <AuthorityCard key={index} {...auth} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Former Authorities */}
          <Card className="glass border-border/50">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="w-5 h-5 text-muted-foreground" />
                Former Authorities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {formerAuthorities.map((auth, index) => (
                  <AuthorityCard key={index} {...auth} isFormer />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Vydehi TTMC & Kadugodi Bus Station */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Vydehi TTMC Authorities */}
          <Card className="glass border-border/50">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Building2 className="w-5 h-5 text-primary" />
                Vydehi TTMC Authorities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {vydehiAuthorities.map((auth, index) => (
                  <AuthorityCard key={index} {...auth} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Kadugodi Bus Station */}
          <Card className="glass border-border/50">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Building2 className="w-5 h-5 text-primary" />
                Kadugodi Bus Station
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {kadugodiAuthorities.map((auth, index) => (
                  <AuthorityCard key={index} {...auth} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DepotInfo;
