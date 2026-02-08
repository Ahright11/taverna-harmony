import { siteConfig } from '@/config/site.config';

export interface Review {
  id: string;
  authorName: string;
  rating: number;
  text: string;
  relativeTime: string;
  profilePhoto?: string;
}

export const mockReviews: Review[] = siteConfig.testimonials.map((t, i) => ({
  id: String(i + 1),
  authorName: t.name,
  rating: t.rating,
  text: t.text,
  relativeTime: t.time,
}));

export const overallRating = siteConfig.rating;
export const totalReviews = siteConfig.totalReviews;
