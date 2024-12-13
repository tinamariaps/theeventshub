import { useMemo } from 'react';
import { filterEventsByCity, filterEventsByIndustry, filterEventsBySearch } from '../eventFilters';
import { cityEvents } from '../../data/events';
import type { Event } from '../../data/types';

export function useEvents(
  searchQuery: string,
  selectedCity: string | null,
  selectedIndustries: string[]
): Event[] {
  return useMemo(() => {
    // Get all events if no city is selected, otherwise get events for the selected city
    const events = selectedCity 
      ? cityEvents[selectedCity]
      : Object.values(cityEvents).flat();

    // Apply filters
    return filterEventsByIndustry(
      filterEventsBySearch(events, searchQuery),
      selectedIndustries
    );
  }, [searchQuery, selectedCity, selectedIndustries]);
}