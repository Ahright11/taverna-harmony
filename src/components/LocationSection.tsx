import { MapPin, Clock, Car } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

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
              src={siteConfig.mapsEmbedUrl}
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
                  <p className="text-muted-foreground">{siteConfig.address.street}</p>
                  <p className="text-muted-foreground">{siteConfig.address.city} {siteConfig.address.postalCode}</p>
                  <a
                    href={siteConfig.mapsDirectionsUrl}
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
                    {siteConfig.hours.map(h => (
                      <div key={h.day} className="flex justify-between gap-8">
                        <span className="text-muted-foreground">{h.day}</span>
                        <span className="text-foreground font-medium">{h.time}</span>
                      </div>
                    ))}
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
                    {siteConfig.parking}
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
