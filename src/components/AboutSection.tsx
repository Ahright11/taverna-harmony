import ownerImage from '@/assets/owner-portrait.jpg';
import { siteConfig } from '@/config/site.config';

const AboutSection = () => {
  return (
    <section id="about" className="taverna-section">
      <div className="taverna-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src={ownerImage}
                alt="Ο ιδιοκτήτης της Μουσικής Γωνιάς"
                className="w-full rounded-2xl shadow-taverna-elevated"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground text-center text-sm font-medium">
                  Από το<br />
                  <span className="text-2xl font-serif font-bold">{siteConfig.foundedYear}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="taverna-heading mb-6">Η Ιστορία μας</h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Η <strong className="text-foreground">{siteConfig.businessName}</strong> άνοιξε τις πόρτες της το {siteConfig.foundedYear}
                από τον {siteConfig.about.founderRelation} {siteConfig.about.founderName}, με όνειρο να φέρει τις αυθεντικές γεύσεις της {siteConfig.about.familyRelation}ς {siteConfig.about.familyMember}ς
                σε κάθε τραπέζι της {siteConfig.about.location}.
              </p>

              <p>
                Τρεις γενιές μετά, συνεχίζουμε να μαγειρεύουμε τις ίδιες οικογενειακές συνταγές
                με την ίδια αγάπη και προσοχή. Κάθε πιάτο που σερβίρουμε φέρνει μαζί του την
                ιστορία και την παράδοση του τόπου μας.
              </p>

              <p>
                Χρησιμοποιούμε μόνο <strong className="text-foreground">φρέσκα, τοπικά υλικά</strong> —
                ελαιόλαδο από τους δικούς μας ελαιώνες, λαχανικά από παραγωγούς της περιοχής,
                και κρέατα από επιλεγμένους κτηνοτρόφους.
              </p>

              <p>
                Η ζωντανή μουσική κάθε Παρασκευή και Σάββατο δεν είναι απλά ψυχαγωγία —
                είναι μέρος της παράδοσης που τιμούμε. Γιατί στην Ελλάδα, το φαγητό
                και η μουσική πάνε πάντα μαζί.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-serif text-lg italic text-foreground">
                "{siteConfig.about.familyQuote}"
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                — {siteConfig.about.familyRelation.charAt(0).toUpperCase() + siteConfig.about.familyRelation.slice(1)} {siteConfig.about.familyMember}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
