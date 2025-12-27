import { Plane, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Plane className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg text-foreground">KIA-15/15A Vayu Vajra</span>
              <p className="text-xs text-muted-foreground">BMTC Premium Airport Service</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://mybmtc.karnataka.gov.in/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              BMTC Official <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://www.bengaluruairport.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              BLR Airport <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://tummoc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              Book on Tummoc <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} KIA-15 Vayu Vajra Service<br />
            An initiative by BMTC-Depot-18 and Girish, Government of Karnataka
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
