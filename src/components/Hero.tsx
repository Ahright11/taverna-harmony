import { Star, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-taverna.jpg';
import { overallRating, totalReviews } from '@/lib/reviewsData';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Εσωτερικό της ταβέρνας Μουσική Γωνιά" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 taverna-container text-center py-20">
        {/* Rating Badge */}
        <div className="inline-flex items-center gap-2 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-in">
          <Star className="h-5 w-5 fill-gold text-gold" />
          <span className="font-semibold text-foreground">{overallRating}</span>
          <span className="text-muted-foreground">-</span>
          <span className="text-muted-foreground">{totalReviews.toLocaleString('el-GR')} κριτικές</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-cream mb-6 animate-slide-up">
          Μουσική Γωνιά
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-cream/90 font-light mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Παραδοσιακή Ελληνική Κουζίνα & Ζωντανή Μουσική
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Button 
            size="lg" 
            className="taverna-button-primary text-base px-8 py-6"
            onClick={() => scrollToSection('#booking')}
          >
            Κράτηση Τραπεζιού
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-base px-8 py-6 bg-cream/10 backdrop-blur-sm border-cream/30 text-cream hover:bg-cream/20 hover:text-cream"
            onClick={() => scrollToSection('#menu')}
          >
            Δείτε το Μενού
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection('#booking')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/70 hover:text-cream transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;
