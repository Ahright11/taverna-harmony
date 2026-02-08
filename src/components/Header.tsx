import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site.config';

const navLinks = [
  { href: '#home', label: 'Αρχική' },
  { href: '#booking', label: 'Κράτηση' },
  { href: '#menu', label: 'Μενού' },
  { href: '#music', label: 'Μουσική' },
  { href: '#about', label: 'Η Ιστορία μας' },
  { href: '#contact', label: 'Επικοινωνία' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="taverna-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            className="flex items-center gap-2"
          >
            <span className="text-xl md:text-2xl font-serif font-bold text-primary">
              {siteConfig.businessName}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Call Button & Mobile Menu */}
          <div className="flex items-center gap-3">
            <a href={`tel:${siteConfig.phone}`} className="hidden sm:flex">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                <span className="hidden md:inline">{siteConfig.phoneDisplay}</span>
              </Button>
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a href={`tel:${siteConfig.phone}`} className="sm:hidden">
                <Button variant="default" className="w-full mt-2 gap-2">
                  <Phone className="h-4 w-4" />
                  Καλέστε μας
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
