import React from 'react';
import SearchBar from './search/SearchBar';
import { useSearch } from '../contexts/SearchContext';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const { setGlobalSearchQuery } = useSearch();

  const handleSearch = (query: string) => {
    setGlobalSearchQuery(query);
    onNavigate('events');
  };

  return (
    <div className="relative bg-indigo-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
          alt="Trade show background"
        />
        <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply" />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Your Ultimate Trade Show & Event Resource
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-300">
          Discover and connect with the best trade shows, exhibitions, and industry events worldwide.
        </p>
        
        <div className="mt-10 max-w-xl">
          <SearchBar
            onSearch={handleSearch}
            placeholder="Search for events, venues, or industries..."
          />
        </div>
      </div>
    </div>
  );
}