import { useState, useEffect } from 'react';
import { Menu, X, Plane } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAppMenuOpen, setIsAppMenuOpen] = useState(false);
  const [isMobileAppMenuOpen, setIsMobileAppMenuOpen] = useState(false);

  // Handle scroll blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    if (!isMenuOpen) {
      setIsMobileAppMenuOpen(false);
    }
  }, [isMenuOpen]);

  const { t } = useLanguage();

  const navLinks = [
    { href: '#route', label: t('Route', 'ಮಾರ್ಗ') },
    { href: '#schedule', label: t('Schedule', 'ವೇಳಾಪಟ್ಟಿ') },
    { href: '#amenities', label: t('Amenities', 'ಸೌಲಭ್ಯಗಳು') },
    { href: '#fare', label: t('Fare', 'ಭಾಡೆ') },
    { href: '#depot', label: t('Depot', 'ಡಿಪೋ') },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'glass-strong py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow group-hover:shadow-gold transition-shadow">
              <Plane className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg text-foreground">KIA-15/15A</span>
              <span className="hidden sm:block text-xs text-muted-foreground">
                Vayu Vajra
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Language Toggle & App Dropdown */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <div
              className="relative"
              onMouseEnter={() => setIsAppMenuOpen(true)}
              onMouseLeave={() => setIsAppMenuOpen(false)}
            >
              <div className="pb-4">
                <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium text-sm hover:shadow-glow transition-shadow">
                  KIA-15 App
                </button>

                {isAppMenuOpen && (
                  <div className="absolute right-0 top-full w-48 glass-strong rounded-xl shadow-xl p-3 flex flex-col gap-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <a
                      href="https://play.google.com/store/search?q=kia-15&c=apps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg text-sm font-medium bg-secondary hover:bg-secondary/80 text-center"
                    >
                      📱 Play Store
                    </a>
                    <a
                      href="https://apps.apple.com/in/app/kia-15/id6751138454"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg text-sm font-medium bg-secondary hover:bg-secondary/80 text-center"
                    >
                      🍎 App Store
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-6 border-t border-border">
            <div className="flex flex-col gap-4 pt-6">

              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Language Toggle */}
              <div className="mt-2">
                <LanguageToggle />
              </div>

              {/* Mobile App Dropdown */}
              <div className="mt-2">
                <button
                  onClick={() =>
                    setIsMobileAppMenuOpen(!isMobileAppMenuOpen)
                  }
                  className="w-full px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium text-sm flex items-center justify-center gap-2"
                >
                  KIA-15 App
                  <span
                    className={`transition-transform ${
                      isMobileAppMenuOpen ? 'rotate-180' : ''
                    }`}
                  >
                    ▲
                  </span>
                </button>

                {isMobileAppMenuOpen && (
                  <div className="mt-3 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    <a
                      href="https://play.google.com/store/search?q=kia-15&c=apps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-full bg-secondary text-sm font-medium text-center"
                    >
                      📱 Play Store
                    </a>
                    <a
                      href="https://apps.apple.com/in/app/kia-15/id6751138454"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-full bg-secondary text-sm font-medium text-center"
                    >
                      🍎 App Store
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
