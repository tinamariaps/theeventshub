import React from 'react';
import { Location } from '../../data/types';

interface CityFilterProps {
  locations: Location[];
  selectedLocations: string[];
  onChange: (locations: string[]) => void;
}

export default function CityFilter({ locations, selectedLocations, onChange }: CityFilterProps) {
  const handleLocationChange = (value: string) => {
    const newLocations = selectedLocations.includes(value)
      ? selectedLocations.filter(v => v !== value)
      : [...selectedLocations, value];
    onChange(newLocations);
  };

  // Group locations by state
  const locationsByState = locations.reduce((acc, location) => {
    if (!acc[location.state]) {
      acc[location.state] = [];
    }
    acc[location.state].push(location);
    return acc;
  }, {} as Record<string, Location[]>);

  return (
    <div className="space-y-6">
      {Object.entries(locationsByState).map(([state, stateLocations]) => (
        <div key={state} className="space-y-2">
          <h4 className="font-medium text-gray-900">{state}</h4>
          {stateLocations.map((location) => (
            <label key={location.value} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedLocations.includes(location.value)}
                onChange={() => handleLocationChange(location.value)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700">{location.label}</span>
            </label>
          ))}
        </div>
      ))}
    </div>
  );
}