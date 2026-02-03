import type { VercelRequest, VercelResponse } from '@vercel/node';

// This is a Vercel Serverless Function
// In production, this would connect to Google Places API

interface Review {
  id: string;
  authorName: string;
  rating: number;
  text: string;
  relativeTime: string;
  profilePhoto?: string;
}

interface ReviewsResponse {
  reviews: Review[];
  rating: number;
  total: number;
  placeId: string;
}

// Simple in-memory cache
let cachedReviews: ReviewsResponse | null = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const now = Date.now();

    // Check cache
    if (cachedReviews && (now - cacheTimestamp) < CACHE_DURATION) {
      return res.status(200).json(cachedReviews);
    }

    // TODO: Connect to Google Places API
    // const placeId = process.env.GOOGLE_PLACE_ID;
    // const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    //
    // const response = await fetch(
    //   `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`
    // );
    //
    // const data = await response.json();
    //
    // if (data.status !== 'OK') {
    //   throw new Error(`Places API error: ${data.status}`);
    // }
    //
    // const result = data.result;
    // const reviews: Review[] = (result.reviews || []).map((review: any, index: number) => ({
    //   id: `review-${index}`,
    //   authorName: review.author_name,
    //   rating: review.rating,
    //   text: review.text,
    //   relativeTime: review.relative_time_description,
    //   profilePhoto: review.profile_photo_url,
    // }));

    // For demo, return mock data
    const mockReviews: Review[] = [
      {
        id: '1',
        authorName: 'Μαρία Κ.',
        rating: 5,
        text: 'Εξαιρετικό φαγητό και υπέροχη ατμόσφαιρα! Το αρνί λαδόκολλα ήταν το καλύτερο που έχω φάει. Η ζωντανή μουσική το Σάββατο ήταν καταπληκτική!',
        relativeTime: 'πριν 2 εβδομάδες',
      },
      {
        id: '2',
        authorName: 'Γιώργος Π.',
        rating: 5,
        text: 'Αυθεντική ελληνική ταβέρνα με φανταστικές γεύσεις. Τα παϊδάκια είναι must! Πολύ φιλικό προσωπικό.',
        relativeTime: 'πριν 1 μήνα',
      },
      {
        id: '3',
        authorName: 'Elena D.',
        rating: 4,
        text: 'Beautiful traditional taverna with delicious food. The live music on Friday was amazing. Highly recommend the moussaka!',
        relativeTime: 'πριν 3 εβδομάδες',
      },
      {
        id: '4',
        authorName: 'Κώστας Μ.',
        rating: 5,
        text: 'Πολύ καλές τιμές για την ποιότητα που προσφέρουν. Το σαγανάκι και το χταπόδι ήταν τέλεια. Θα ξαναέρθω σίγουρα!',
        relativeTime: 'πριν 1 εβδομάδα',
      },
      {
        id: '5',
        authorName: 'Αγγελική Σ.',
        rating: 5,
        text: 'Έρχομαι εδώ χρόνια και δεν με έχει απογοητεύσει ποτέ. Οι συνταγές της γιαγιάς είναι αυθεντικές!',
        relativeTime: 'πριν 2 μήνες',
      },
    ];

    const reviewsResponse: ReviewsResponse = {
      reviews: mockReviews,
      rating: 4.6,
      total: 1128,
      placeId: process.env.GOOGLE_PLACE_ID || 'demo',
    };

    // Update cache
    cachedReviews = reviewsResponse;
    cacheTimestamp = now;

    return res.status(200).json(reviewsResponse);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return res.status(500).json({ error: 'Failed to fetch reviews' });
  }
}
