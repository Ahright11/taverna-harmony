import { Bike } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site.config';

const DeliverySection = () => {
  return (
    <section id="delivery" className="taverna-section bg-primary text-primary-foreground">
      <div className="taverna-container">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-primary-foreground/10 mx-auto mb-6 flex items-center justify-center">
            <Bike className="h-8 w-8" />
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Παραγγείλτε Online
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Απολαύστε τις γεύσεις μας στο σπίτι σας μέσω των αγαπημένων σας πλατφορμών
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.delivery.efood}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#E52723] hover:bg-[#C91F1C] text-white w-full sm:w-auto min-w-[160px]"
              >
                efood
              </Button>
            </a>
            <a
              href={siteConfig.delivery.wolt}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#00C2E8] hover:bg-[#00A8C9] text-white w-full sm:w-auto min-w-[160px]"
              >
                Wolt
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
