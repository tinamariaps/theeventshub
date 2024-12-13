import type { Event } from '../types';

export const lasVegasEvents: Event[] = [
  {
    id: 20,
    name: "CES 2025",
    startDate: "2025-01-07",
    endDate: "2025-01-10",
    location: "Las Vegas, Nevada",
    venue: "Las Vegas Convention Center",
    industry: "Technology",
    description: "The world's largest consumer electronics show featuring the latest innovations in tech.",
    website: "https://www.ces.tech",
    image: "https://images.unsplash.com/photo-1550305080-4e029753abcf?auto=format&fit=crop&q=80",
    expectedAttendees: 180000,
    boothOptions: ["10x10", "10x20", "20x20", "Custom Island"]
  },
  {
    id: 21,
    name: "MAGIC Fashion Trade Show 2025",
    startDate: "2025-02-12",
    endDate: "2025-02-14",
    location: "Las Vegas, Nevada",
    venue: "Las Vegas Convention Center",
    industry: "Fashion",
    description: "The most comprehensive fashion marketplace in the U.S.",
    website: "https://www.magicfashionevents.com",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
    expectedAttendees: 85000,
    boothOptions: ["10x10", "10x20", "20x20"]
  },
  {
    id: 22,
    name: "World of Concrete 2025",
    startDate: "2025-01-20",
    endDate: "2025-01-23",
    location: "Las Vegas, Nevada",
    venue: "Las Vegas Convention Center",
    industry: "Construction",
    description: "The largest annual international event dedicated to concrete and masonry professionals.",
    image: "https://images.unsplash.com/photo-1590644365607-1c5a5535c0ef?auto=format&fit=crop&q=80",
    expectedAttendees: 60000
  },
  {
    id: 23,
    name: "NAB Show 2025",
    startDate: "2025-04-12",
    endDate: "2025-04-16",
    location: "Las Vegas, Nevada",
    venue: "Las Vegas Convention Center",
    industry: "Technology",
    description: "The ultimate event for the media, entertainment and technology industry.",
    image: "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?auto=format&fit=crop&q=80",
    expectedAttendees: 90000
  },
  {
    id: 24,
    name: "SEMA Show 2025",
    startDate: "2025-11-04",
    endDate: "2025-11-07",
    location: "Las Vegas, Nevada",
    venue: "Las Vegas Convention Center",
    industry: "Automotive",
    description: "The premier automotive specialty products trade event in the world.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80",
    expectedAttendees: 160000
  }
];