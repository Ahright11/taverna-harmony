import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BookingSection from '@/components/BookingSection';
import MenuSection from '@/components/MenuSection';
import MusicSection from '@/components/MusicSection';
import GallerySection from '@/components/GallerySection';
import AboutSection from '@/components/AboutSection';
import ReviewsSection from '@/components/ReviewsSection';
import LocationSection from '@/components/LocationSection';
import ContactSection from '@/components/ContactSection';
import DeliverySection from '@/components/DeliverySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BookingSection />
        <MenuSection />
        <MusicSection />
        <GallerySection />
        <AboutSection />
        <ReviewsSection />
        <LocationSection />
        <ContactSection />
        <DeliverySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
