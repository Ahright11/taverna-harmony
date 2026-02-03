export interface MusicEvent {
  id: string;
  date: string;
  dayName: string;
  artist: string;
  style: string;
  time: string;
}

export const upcomingEvents: MusicEvent[] = [
  {
    id: '1',
    date: '7 Φεβρουαρίου',
    dayName: 'Παρασκευή',
    artist: 'Νίκος Παπαδόπουλος',
    style: 'Ρεμπέτικα & Λαϊκά',
    time: '21:00',
  },
  {
    id: '2',
    date: '8 Φεβρουαρίου',
    dayName: 'Σάββατο',
    artist: 'Μαρία Καραγιάννη',
    style: 'Νησιώτικα & Δημοτικά',
    time: '21:30',
  },
  {
    id: '3',
    date: '14 Φεβρουαρίου',
    dayName: 'Παρασκευή',
    artist: 'Γιώργος Μπουζούκης',
    style: 'Ζεϊμπέκικα & Χασάπικα',
    time: '21:00',
  },
];
