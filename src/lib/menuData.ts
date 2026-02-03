export interface MenuItem {
  name: string;
  description?: string;
  price: number;
  isSpecial?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'orektika',
    name: 'Ορεκτικά',
    items: [
      { name: 'Τζατζίκι', description: 'Γιαούρτι, αγγούρι, σκόρδο', price: 4.50 },
      { name: 'Σαγανάκι', description: 'Τηγανητό τυρί κεφαλογραβιέρα', price: 6.00 },
      { name: 'Φέτα ψητή', description: 'Με ντομάτα και πιπεριά', price: 5.50 },
      { name: 'Κολοκυθοκεφτέδες', description: 'Με σάλτσα γιαουρτιού', price: 5.00 },
      { name: 'Ταραμοσαλάτα', description: 'Παραδοσιακή συνταγή', price: 4.50 },
      { name: 'Μελιτζανοσαλάτα', description: 'Ψητή μελιτζάνα με σκόρδο', price: 4.50 },
    ],
  },
  {
    id: 'kyrios',
    name: 'Κυρίως',
    items: [
      { name: 'Μουσακάς', description: 'Με μελιτζάνα και μπεσαμέλ', price: 12.00 },
      { name: 'Παστίτσιο', description: 'Με κιμά και μπεσαμέλ', price: 11.00 },
      { name: 'Γεμιστά', description: 'Ντομάτες και πιπεριές με ρύζι', price: 10.00 },
      { name: 'Στιφάδο', description: 'Μοσχάρι με κρεμμυδάκια', price: 13.00 },
      { name: 'Αρνί λαδόκολλα', description: 'Αργά ψημένο με πατάτες', price: 14.50, isSpecial: true },
      { name: 'Κοκκινιστό', description: 'Μοσχάρι με χυλοπίτες', price: 12.50 },
    ],
  },
  {
    id: 'schara',
    name: 'Σχάρα',
    items: [
      { name: 'Παϊδάκια', description: 'Αρνίσια με λεμόνι και ρίγανη', price: 15.00 },
      { name: 'Μπριζόλα', description: 'Χοιρινή 400γρ', price: 14.00 },
      { name: 'Σουβλάκια', description: 'Χοιρινά με πίτα', price: 12.00 },
      { name: 'Κοτόπουλο', description: 'Φιλέτο στη σχάρα', price: 11.00 },
      { name: 'Μπιφτέκια', description: 'Χειροποίητα με τυρί', price: 11.50 },
      { name: 'Mix Grill', description: 'Ποικιλία κρεάτων για 2', price: 28.00 },
    ],
  },
  {
    id: 'thalassina',
    name: 'Θαλασσινά',
    items: [
      { name: 'Χταπόδι', description: 'Ψητό με λάδι και ξύδι', price: 16.00 },
      { name: 'Καλαμάρι', description: 'Τηγανητό με σάλτσα', price: 14.00 },
      { name: 'Γαρίδες σαγανάκι', description: 'Με φέτα και ντομάτα', price: 15.00 },
      { name: 'Τσιπούρα', description: 'Ψητή στο φούρνο', price: 16.00 },
      { name: 'Σαρδέλες', description: 'Ψητές στη σχάρα', price: 10.00 },
    ],
  },
  {
    id: 'salates',
    name: 'Σαλάτες',
    items: [
      { name: 'Χωριάτικη', description: 'Ντομάτα, αγγούρι, φέτα, ελιές', price: 8.00 },
      { name: 'Ρόκα', description: 'Με παρμεζάνα και βαλσάμικο', price: 9.00 },
      { name: 'Μαρούλι', description: 'Με άνηθο και σάλτσα', price: 6.00 },
    ],
  },
  {
    id: 'pota',
    name: 'Ποτά',
    items: [
      { name: 'Κρασί κόκκινο', description: '500ml', price: 8.00 },
      { name: 'Κρασί λευκό', description: '500ml', price: 8.00 },
      { name: 'Μπύρα', description: 'Διάφορες επιλογές', price: 4.00 },
      { name: 'Ούζο', description: 'Με μεζέ', price: 6.00 },
      { name: 'Τσίπουρο', description: 'Με μεζέ', price: 7.00 },
      { name: 'Αναψυκτικά', description: '', price: 2.50 },
    ],
  },
];
