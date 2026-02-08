import { siteConfig } from '@/config/site.config';

export interface MusicEvent {
  id: string;
  date: string;
  dayName: string;
  artist: string;
  style: string;
  time: string;
}

export const upcomingEvents: MusicEvent[] = siteConfig.events.map((e, i) => ({
  id: String(i + 1),
  date: e.date,
  dayName: e.day,
  artist: e.artist,
  style: e.style,
  time: e.time,
}));
