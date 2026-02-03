import { useState } from 'react';
import { X } from 'lucide-react';
import heroImage from '@/assets/hero-taverna.jpg';
import musicImage from '@/assets/music-performance.jpg';
import moussakaImage from '@/assets/food-moussaka.jpg';
import paidakiaImage from '@/assets/food-paidakia.jpg';
import octopusImage from '@/assets/food-octopus.jpg';
import tzatzikiImage from '@/assets/food-tzatziki.jpg';
import terraceImage from '@/assets/gallery-terrace.jpg';
import ownerImage from '@/assets/owner-portrait.jpg';

const galleryImages = [
  { src: heroImage, alt: 'Εσωτερικό ταβέρνας' },
  { src: moussakaImage, alt: 'Μουσακάς' },
  { src: terraceImage, alt: 'Βεράντα' },
  { src: paidakiaImage, alt: 'Παϊδάκια' },
  { src: musicImage, alt: 'Ζωντανή μουσική' },
  { src: octopusImage, alt: 'Χταπόδι' },
  { src: tzatzikiImage, alt: 'Τζατζίκι' },
  { src: ownerImage, alt: 'Ιδιοκτήτης' },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="taverna-section bg-cream-dark">
      <div className="taverna-container">
        <div className="text-center mb-12">
          <h2 className="taverna-heading mb-4">Φωτογραφίες</h2>
          <p className="taverna-subheading">Στιγμές από τη Μουσική Γωνιά</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-cream hover:text-cream/80 transition-colors"
              aria-label="Close"
            >
              <X className="h-8 w-8" />
            </button>
            
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Navigation dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setSelectedImage(index); }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === selectedImage ? 'bg-cream' : 'bg-cream/40'
                  }`}
                  aria-label={`Image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
