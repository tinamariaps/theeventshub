import type { Event } from '../types';

export const floridaEvents: Event[] = [
  // Orlando Events
  {
    id: 40,
    name: "HIMSS Global Health Conference 2025",
    startDate: "2025-03-10",
    endDate: "2025-03-14",
    location: "Orlando, Florida",
    venue: "Orange County Convention Center",
    industry: "Healthcare",
    description: "Leading health information and technology conference.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    expectedAttendees: 45000,
    boothOptions: ["10x10", "10x20", "20x20"]
  },
  {
    id: 41,
    name: "PGA Merchandise Show 2025",
    startDate: "2025-01-24",
    endDate: "2025-01-27",
    location: "Orlando, Florida",
    venue: "Orange County Convention Center",
    industry: "Sports",
    description: "The largest gathering of golf industry professionals worldwide.",
    website: "https://www.pgashow.com",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80",
    expectedAttendees: 40000,
    boothOptions: ["10x10", "10x20", "20x20"]
  },
  // Miami Events
  {
    id: 42,
    name: "eMerge Americas 2025",
    startDate: "2025-04-20",
    endDate: "2025-04-21",
    location: "Miami Beach, Florida",
    venue: "Miami Beach Convention Center",
    industry: "Technology",
    description: "Premier technology event connecting Latin America, North America and Europe.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
    expectedAttendees: 16000
  },
  // Fort Lauderdale Events
  {
    id: 43,
    name: "Fort Lauderdale International Boat Show 2025",
    startDate: "2025-10-29",
    endDate: "2025-11-02",
    location: "Fort Lauderdale, Florida",
    venue: "Bahia Mar Yachting Center",
    industry: "Maritime",
    description: "The largest in-water boat show in the world.",
    image: "https://images.unsplash.com/photo-1544119154-ef2599fcd10b?auto=format&fit=crop&q=80",
    expectedAttendees: 100000
  },
  // Tampa Events
  {
    id: 44,
    name: "Florida Restaurant & Lodging Show 2025",
    startDate: "2025-09-22",
    endDate: "2025-09-23",
    location: "Tampa, Florida",
    venue: "Tampa Convention Center",
    industry: "Food & Beverage",
    description: "Florida's only comprehensive business-to-business event serving the restaurant and foodservice industry.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
    expectedAttendees: 8000
  }
];