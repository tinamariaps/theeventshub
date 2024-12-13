import React, { useState, useEffect } from 'react';
import { industries } from '../../data/types';
import { cityEvents } from '../../data/events'; // Updated import
import EventList from './EventList';
import SearchBar from '../search/SearchBar';
import FilterSection from '../common/FilterSection';
import PageHeader from '../common/PageHeader';
import { useEvents } from '../../utils/hooks/useEvents';
import { useSearch } from '../../contexts/SearchContext';

export default function EventsPage() {
  const { globalSearchQuery, setGlobalSearchQuery } = useSearch();
  const [searchQuery, setSearchQuery] = useState(globalSearchQuery);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);

  useEffect(() => {
    setSearchQuery(globalSearchQuery);
  }, [globalSearchQuery]);

  const industryOptions = industries.map(industry => ({
    value: industry.toLowerCase(),
    label: industry
  }));

  const cityOptions = Object.keys(cityEvents).map(city => ({
    value: city.toLowerCase(),
    label: city
  }));

  const filteredEvents = useEvents(searchQuery, selectedCity, selectedIndustries);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setGlobalSearchQuery(query);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader 
        title="Trade Shows & Events 2025"
        description="Discover upcoming trade shows and events in your industry."
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Filters</h2>
              
              <FilterSection
                title="Cities"
                options={cityOptions}
                selectedValues={selectedCity ? [selectedCity.toLowerCase()] : []}
                onChange={(values) => setSelectedCity(values[0] ? values[0] : null)}
              />
              
              <FilterSection
                title="Industries"
                options={industryOptions}
                selectedValues={selectedIndustries}
                onChange={setSelectedIndustries}
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="mb-6">
            <SearchBar 
              onSearch={handleSearch}
              placeholder="Search events..."
              initialValue={searchQuery}
            />
          </div>

          <EventList events={filteredEvents} />
        </div>
      </div>
    </div>
  );
}