export interface Review {
  id: string;
  authorName: string;
  rating: number;
  text: string;
  relativeTime: string;
  profilePhoto?: string;
}

// Mock data - in production, this would come from Google Places API
export const mockReviews: Review[] = [
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

export const overallRating = 4.6;
export const totalReviews = 1128;
