import { Star, ExternalLink } from 'lucide-react';
import { mockReviews, overallRating, totalReviews } from '@/lib/reviewsData';

const ReviewsSection = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'fill-gold text-gold' : 'fill-muted text-muted'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="taverna-section bg-cream-dark">
      <div className="taverna-container">
        <div className="text-center mb-12">
          <h2 className="taverna-heading mb-4">Τι λένε οι πελάτες μας</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              {renderStars(Math.round(overallRating))}
            </div>
            <span className="text-lg font-semibold text-foreground">{overallRating}</span>
            <span className="text-muted-foreground">({totalReviews.toLocaleString('el-GR')} κριτικές)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
          {mockReviews.slice(0, 5).map((review) => (
            <div
              key={review.id}
              className="taverna-card p-6 hover:shadow-taverna-elevated transition-shadow"
            >
              <div className="flex items-center gap-1 mb-3">
                {renderStars(review.rating)}
              </div>
              <p className="text-foreground mb-4 line-clamp-4">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-foreground">{review.authorName}</span>
                <span className="text-muted-foreground">{review.relativeTime}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Link */}
        <div className="text-center">
          <a
            href="https://www.google.com/maps/place/..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Δείτε όλες τις κριτικές στο Google
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
