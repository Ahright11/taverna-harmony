import { MapPin, Clock, Car } from 'lucide-react';

const LocationSection = () => {
  return (
    <section id="location" className="taverna-section">
      <div className="taverna-container">
        <div className="text-center mb-12">
          <h2 className="taverna-heading mb-4">Πού θα μας βρείτε</h2>
          <p className="taverna-subheading">Σας περιμένουμε!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="aspect-video lg:aspect-auto lg:h-[400px] rounded-xl overflow-hidden shadow-taverna-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.8!2d23.7!3d37.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM3Kw!5e0!3m2!1sen!2sgr!4v1000000000000!5m2!1sen!2sgr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Χάρτης - Μουσική Γωνιά"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="taverna-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Διεύθυνση</h3>
                  <p className="text-muted-foreground">Αβέρωφ 22</p>
                  <p className="text-muted-foreground">Αγία Βαρβάρα 123 51</p>
                  <a
                    href="https://www.google.com/maps/dir/..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm font-medium mt-2 inline-block"
                  >
                    Οδηγίες →
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="taverna-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Ωράριο</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between gap-8">
                      <span className="text-muted-foreground">Δευτέρα - Πέμπτη</span>
                      <span className="text-foreground font-medium">12:00 - 23:00</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="text-muted-foreground">Παρασκευή - Σάββατο</span>
                      <span className="text-foreground font-medium">12:00 - 01:00</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="text-muted-foreground">Κυριακή</span>
                      <span className="text-foreground font-medium">12:00 - 23:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Parking */}
            <div className="taverna-card p-6 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Δωρεάν Πάρκινγκ</h3>
                  <p className="text-muted-foreground text-sm">
                    Διαθέσιμος χώρος στάθμευσης δίπλα στο εστιατόριο
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
