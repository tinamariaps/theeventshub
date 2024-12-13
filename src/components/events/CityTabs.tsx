import React from 'react';

interface CityTabsProps {
  cities: string[];
  selectedCity: string | null;
  onCitySelect: (city: string | null) => void;
}

export default function CityTabs({ cities, selectedCity, onCitySelect }: CityTabsProps) {
  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8">
        <button
          onClick={() => onCitySelect(null)}
          className={`${
            selectedCity === null
              ? 'border-indigo-500 text-indigo-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
        >
          All Cities
        </button>
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => onCitySelect(city)}
            className={`${
              selectedCity === city
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
          >
            {city}
          </button>
        ))}
      </nav>
    </div>
  );
}