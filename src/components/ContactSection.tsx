import { Phone, MessageCircle, Instagram, Facebook, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const whatsappMessage = encodeURIComponent('Γεια σας, θα ήθελα πληροφορίες για κράτηση στη Μουσική Γωνιά.');

  return (
    <section id="contact" className="taverna-section bg-cream-dark">
      <div className="taverna-container">
        <div className="text-center mb-12">
          <h2 className="taverna-heading mb-4">Επικοινωνία</h2>
          <p className="taverna-subheading">Είμαστε εδώ για εσάς</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Main Contact Options */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {/* Phone */}
            <a href="tel:+302105690444">
              <div className="taverna-card p-6 text-center hover:shadow-taverna-elevated transition-shadow group">
                <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Καλέστε μας</h3>
                <p className="text-xl font-medium text-primary">21 0569 0444</p>
                <p className="text-sm text-muted-foreground mt-1">Κάθε μέρα 12:00 - 23:00</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/302105690444?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="taverna-card p-6 text-center hover:shadow-taverna-elevated transition-shadow group">
                <div className="w-16 h-16 rounded-full bg-[#25D366] mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                <p className="text-lg text-primary">Στείλτε μήνυμα</p>
                <p className="text-sm text-muted-foreground mt-1">Γρήγορη απάντηση</p>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Ακολουθήστε μας</p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://instagram.com/mousikigonia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/mousikigonia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://tripadvisor.com/..."
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="TripAdvisor"
              >
                <UtensilsCrossed className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
