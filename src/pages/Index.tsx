import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import RouteStops from '@/components/RouteStops';
import Schedule from '@/components/Schedule';
import RouteMaps from '@/components/RouteMaps';
import Amenities from '@/components/Amenities';
import FareInfo from '@/components/FareInfo';
import DepotInfo from '@/components/DepotInfo';
import RotationCrews from '@/components/RotationCrews';
import AppDownload from '@/components/AppDownload';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <main>
        <HeroSection />
        <RouteStops />
        <Schedule />
        <RouteMaps />
        <Amenities />
        <FareInfo />
        <DepotInfo />
        <RotationCrews />
        <AppDownload />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
