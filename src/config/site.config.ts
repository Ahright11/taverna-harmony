// Site Configuration - Edit this file to customize your restaurant website

export const siteConfig = {
  // Business Information
  businessName: "Μουσική Γωνιά",
  tagline: "Παραδοσιακή Ελληνική Κουζίνα & Ζωντανή Μουσική",
  description: "Αυθεντική ελληνική κουζίνα με ζωντανή μουσική κάθε Παρασκευή και Σάββατο",
  foundedYear: 1985,

  // Story / About
  about: {
    founderName: "Γιώργος",
    founderRelation: "παππούς",
    familyMember: "Ελένη",
    familyRelation: "γιαγιά",
    familyQuote: "Η καλύτερη συνταγή είναι η αγάπη που βάζεις σε κάθε πιάτο",
    location: "Αγίας Βαρβάρας",
    story: "Από το 1985, η Μουσική Γωνιά σερβίρει αυθεντική ελληνική κουζίνα στην καρδιά της Αγίας Βαρβάρας. Ο παππούς Γιώργος και η γιαγιά Ελένη ξεκίνησαν με μια απλή ιδέα: σπιτικό φαγητό, καλή μουσική και ζεστή φιλοξενία.",
    sourcing: [
      "Δικό μας ελαιόλαδο από τους ελαιώνες μας",
      "Λαχανικά από τοπικούς παραγωγούς",
      "Κρέατα από επιλεγμένους κτηνοτρόφους"
    ],
    musicNights: "Κάθε Παρασκευή και Σάββατο βράδυ"
  },

  // Contact Information
  phone: "+302105690444",
  phoneDisplay: "21 0569 0444",
  whatsapp: "302105690444",
  whatsappMessage: "Γεια σας, θα ήθελα πληροφορίες για κράτηση στη Μουσική Γωνιά.",
  email: "",
  address: {
    street: "Αβέρωφ 22",
    city: "Αγία Βαρβάρα",
    postalCode: "123 51",
    full: "Αβέρωφ 22, Αγία Βαρβάρα 123 51"
  },

  // Social Links
  socialLinks: {
    instagram: "https://instagram.com/mousikigonia",
    facebook: "https://facebook.com/mousikigonia",
    tripadvisor: "https://tripadvisor.com/",
    googleReviews: "https://www.google.com/maps/place/",
  },

  // Delivery Platforms
  delivery: {
    efood: "https://www.e-food.gr/",
    wolt: "https://wolt.com/",
  },

  // Working Hours
  hours: [
    { day: "Δευτέρα - Πέμπτη", time: "12:00 - 23:00" },
    { day: "Παρασκευή - Σάββατο", time: "12:00 - 01:00" },
    { day: "Κυριακή", time: "12:00 - 23:00" },
  ],

  // Ratings
  rating: 4.6,
  totalReviews: 1128,

  // Parking
  parking: "Δωρεάν parking δίπλα στο εστιατόριο",

  // Google Maps
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.5!2d23.66!3d37.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU4JzEyLjAiTiAyM8KwMzknMzYuMCJF!5e0!3m2!1sen!2sgr!4v1234567890",
  mapsDirectionsUrl: "https://www.google.com/maps/dir//Αβέρωφ+22,+Αγία+Βαρβάρα",

  // Special Dish (featured on menu page)
  specialDish: {
    name: "Αρνί λαδόκολλα",
    description: "Αργά ψημένο με πατάτες στη λαδόκολλα",
    price: 14.50,
  },

  // Menu
  menu: [
    {
      id: "orektika",
      name: "Ορεκτικά",
      items: [
        { name: "Τζατζίκι", description: "Γιαούρτι, αγγούρι, σκόρδο", price: 4.50 },
        { name: "Σαγανάκι", description: "Τηγανητό τυρί κεφαλογραβιέρα", price: 6.00 },
        { name: "Φέτα ψητή", description: "Με ντομάτα και πιπεριά", price: 5.50 },
        { name: "Κολοκυθοκεφτέδες", description: "Με σάλτσα γιαουρτιού", price: 5.00 },
        { name: "Ταραμοσαλάτα", description: "Παραδοσιακή συνταγή", price: 4.50 },
        { name: "Μελιτζανοσαλάτα", description: "Ψητή μελιτζάνα με σκόρδο", price: 4.50 },
      ],
    },
    {
      id: "kyrios",
      name: "Κυρίως",
      items: [
        { name: "Μουσακάς", description: "Με μελιτζάνα και μπεσαμέλ", price: 12.00 },
        { name: "Παστίτσιο", description: "Με κιμά και μπεσαμέλ", price: 11.00 },
        { name: "Γεμιστά", description: "Ντομάτες και πιπεριές με ρύζι", price: 10.00 },
        { name: "Στιφάδο", description: "Μοσχάρι με κρεμμυδάκια", price: 13.00 },
        { name: "Αρνί λαδόκολλα", description: "Αργά ψημένο με πατάτες", price: 14.50, isSpecial: true },
        { name: "Κοκκινιστό", description: "Μοσχάρι με χυλοπίτες", price: 12.50 },
      ],
    },
    {
      id: "schara",
      name: "Σχάρα",
      items: [
        { name: "Παϊδάκια", description: "Αρνίσια με λεμόνι και ρίγανη", price: 15.00 },
        { name: "Μπριζόλα", description: "Χοιρινή 400γρ", price: 14.00 },
        { name: "Σουβλάκια", description: "Χοιρινά με πίτα", price: 12.00 },
        { name: "Κοτόπουλο", description: "Φιλέτο στη σχάρα", price: 11.00 },
        { name: "Μπιφτέκια", description: "Χειροποίητα με τυρί", price: 11.50 },
        { name: "Mix Grill", description: "Ποικιλία κρεάτων για 2", price: 28.00 },
      ],
    },
    {
      id: "thalassina",
      name: "Θαλασσινά",
      items: [
        { name: "Χταπόδι", description: "Ψητό με λάδι και ξύδι", price: 16.00 },
        { name: "Καλαμάρι", description: "Τηγανητό με σάλτσα", price: 14.00 },
        { name: "Γαρίδες σαγανάκι", description: "Με φέτα και ντομάτα", price: 15.00 },
        { name: "Τσιπούρα", description: "Ψητή στο φούρνο", price: 16.00 },
        { name: "Σαρδέλες", description: "Ψητές στη σχάρα", price: 10.00 },
      ],
    },
    {
      id: "salates",
      name: "Σαλάτες",
      items: [
        { name: "Χωριάτικη", description: "Ντομάτα, αγγούρι, φέτα, ελιές", price: 8.00 },
        { name: "Ρόκα", description: "Με παρμεζάνα και βαλσάμικο", price: 9.00 },
        { name: "Μαρούλι", description: "Με άνηθο και σάλτσα", price: 6.00 },
      ],
    },
    {
      id: "pota",
      name: "Ποτά",
      items: [
        { name: "Κρασί κόκκινο", description: "500ml", price: 8.00 },
        { name: "Κρασί λευκό", description: "500ml", price: 8.00 },
        { name: "Μπύρα", description: "Διάφορες επιλογές", price: 4.00 },
        { name: "Ούζο", description: "Με μεζέ", price: 6.00 },
        { name: "Τσίπουρο", description: "Με μεζέ", price: 7.00 },
        { name: "Αναψυκτικά", description: "", price: 2.50 },
      ],
    },
  ],

  // Live Music Events
  events: [
    {
      date: "7 Φεβρουαρίου",
      day: "Παρασκευή",
      artist: "Νίκος Παπαδόπουλος",
      style: "Ρεμπέτικα & Λαϊκά",
      time: "21:00",
    },
    {
      date: "8 Φεβρουαρίου",
      day: "Σάββατο",
      artist: "Μαρία Καραγιάννη",
      style: "Νησιώτικα & Δημοτικά",
      time: "21:30",
    },
    {
      date: "14 Φεβρουαρίου",
      day: "Παρασκευή",
      artist: "Γιώργος Μπουζούκης",
      style: "Ζεϊμπέκικα & Χασάπικα",
      time: "21:00",
    },
  ],

  // Testimonials
  testimonials: [
    {
      name: "Μαρία Κ.",
      rating: 5,
      time: "πριν 2 εβδομάδες",
      text: "Φανταστικό φαγητό! Το αρνί λαδόκολλα ήταν λιωμένο στο στόμα. Η ατμόσφαιρα ζεστή και φιλόξενη. Θα ξαναέρθουμε σίγουρα!",
      platform: "google" as const,
    },
    {
      name: "Γιώργος Π.",
      rating: 5,
      time: "πριν 1 μήνα",
      text: "Τα καλύτερα παϊδάκια που έχω φάει! Η ζωντανή μουσική το Σάββατο ήταν εξαιρετική. Σίγουρα η καλύτερη ταβέρνα στην περιοχή.",
      platform: "google" as const,
    },
    {
      name: "Elena D.",
      rating: 4,
      time: "πριν 3 εβδομάδες",
      text: "Great traditional Greek food! The moussaka was delicious and the atmosphere with live music on Friday was amazing. Highly recommend!",
      platform: "tripadvisor" as const,
    },
    {
      name: "Κώστας Μ.",
      rating: 5,
      time: "πριν 1 εβδομάδα",
      text: "Ό,τι καλύτερο! Παραγγείλαμε σαγανάκι, χταπόδι και μπριζόλα. Όλα τέλεια! Οι τιμές πολύ λογικές για την ποιότητα.",
      platform: "google" as const,
    },
    {
      name: "Αγγελική Σ.",
      rating: 5,
      time: "πριν 2 μήνες",
      text: "Έρχομαι εδώ χρόνια και δεν με έχει απογοητεύσει ποτέ. Σπιτικές γεύσεις, φιλικό προσωπικό και τέλειο περιβάλλον.",
      platform: "google" as const,
    },
  ],

  // Gallery
  gallery: [
    { id: 1, alt: "Εσωτερικός χώρος" },
    { id: 2, alt: "Παραδοσιακά πιάτα" },
    { id: 3, alt: "Ζωντανή μουσική" },
    { id: 4, alt: "Χώρος εστιατορίου" },
    { id: 5, alt: "Σχάρα" },
    { id: 6, alt: "Θαλασσινά" },
  ],

  // Copyright
  copyrightYear: 2026,
};

export type SiteConfig = typeof siteConfig;
