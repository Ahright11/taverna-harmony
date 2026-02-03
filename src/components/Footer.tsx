import { MapPin, Phone, Clock, Instagram, Facebook, UtensilsCrossed } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-wood text-cream">
      <div className="taverna-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif font-bold mb-4">Μουσική Γωνιά</h3>
            <p className="text-cream/70 text-sm leading-relaxed">
              Παραδοσιακή ελληνική κουζίνα και ζωντανή μουσική από το 1985.
              Αυθεντικές γεύσεις, ζεστή φιλοξενία.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Σύνδεσμοι</h4>
            <nav className="space-y-2">
              {[
                { href: '#home', label: 'Αρχική' },
                { href: '#booking', label: 'Κράτηση' },
                { href: '#menu', label: 'Μενού' },
                { href: '#music', label: 'Ζωντανή Μουσική' },
                { href: '#gallery', label: 'Φωτογραφίες' },
                { href: '#about', label: 'Η Ιστορία μας' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="block text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Επικοινωνία</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-cream/50 flex-shrink-0 mt-0.5" />
                <div className="text-cream/70">
                  <p>Αβέρωφ 22</p>
                  <p>Αγία Βαρβάρα 123 51</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cream/50" />
                <a href="tel:+302105690444" className="text-cream/70 hover:text-cream">
                  21 0569 0444
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-cream/50 flex-shrink-0 mt-0.5" />
                <div className="text-cream/70">
                  <p>Δευ-Πέμ: 12:00-23:00</p>
                  <p>Παρ-Σάβ: 12:00-01:00</p>
                  <p>Κυρ: 12:00-23:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Social Media</h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/mousikigonia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/mousikigonia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://tripadvisor.com/..."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
                aria-label="TripAdvisor"
              >
                <UtensilsCrossed className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cream/10 text-center text-sm text-cream/50">
          <p>© 2026 Μουσική Γωνιά. Με επιφύλαξη παντός δικαιώματος.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
