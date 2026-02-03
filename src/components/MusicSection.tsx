import { Music, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { upcomingEvents } from '@/lib/eventsData';
import musicImage from '@/assets/music-performance.jpg';

const MusicSection = () => {
  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="music" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={musicImage} 
          alt="Ζωντανή μουσική στη Μουσική Γωνιά" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-wood/95 via-wood/85 to-wood/70" />
      </div>

      <div className="relative z-10 taverna-container">
        <div className="max-w-4xl">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <Music className="h-8 w-8 text-gold" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream">
              Ζωντανή Μουσική
            </h2>
          </div>
          
          <p className="text-xl text-cream/80 mb-10 max-w-2xl">
            Κάθε Παρασκευή & Σάββατο απολαύστε αυθεντική ελληνική μουσική με 
            παραδοσιακά όργανα και τραγούδια που ζωντανεύουν τις βραδιές μας.
          </p>

          {/* Upcoming Events */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-xl p-5 hover:bg-cream/15 transition-colors"
              >
                <div className="flex items-center gap-2 text-gold text-sm font-medium mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{event.dayName}, {event.date}</span>
                </div>
                <h3 className="text-lg font-serif font-semibold text-cream mb-1">
                  {event.artist}
                </h3>
                <p className="text-cream/70 text-sm mb-3">{event.style}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cream/60 text-sm">Έναρξη: {event.time}</span>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="text-gold hover:text-gold hover:bg-gold/10"
                    onClick={scrollToBooking}
                  >
                    Κρατήστε θέση
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <Button 
            onClick={scrollToBooking}
            className="taverna-button-secondary"
          >
            Κράτηση για Μουσική Βραδιά
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
