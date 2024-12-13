import type { Event } from '../data/types';

export const filterEventsByCity = (events: Event[], city: string | null): Event[] => {
  if (!city) return events;
  return events.filter(event => event.location.includes(city));
};

export const filterEventsByIndustry = (events: Event[], industries: string[]): Event[] => {
  if (industries.length === 0) return events;
  return events.filter(event => 
    industries.some(industry => event.industry.toLowerCase() === industry.toLowerCase())
  );
};

export const filterEventsBySearch = (events: Event[], search: string): Event[] => {
  const searchLower = search.toLowerCase();
  return events.filter(event => 
    event.name.toLowerCase().includes(searchLower) ||
    event.description.toLowerCase().includes(searchLower)
  );
};