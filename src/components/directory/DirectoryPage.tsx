import React, { useState, useMemo, useEffect } from 'react';
import SearchBar from './SearchBar';
import FilterSection from './FilterSection';
import VendorCard from './VendorCard';
import ContactPopup from '../ContactPopup';
import PlanningGuide from '../planning/PlanningGuide';
import { vendors } from '../../data/vendors';
import { locations } from '../../data/locations';

const categories = [
  { value: 'exhibition-design', label: 'Exhibition Design' },
  { value: 'event-management', label: 'Event Management' },
  { value: 'rental-solutions', label: 'Rental Solutions' },
  { value: 'av-services', label: 'AV Services' },
  { value: 'catering', label: 'Catering' },
];

export default function DirectoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showPlanningGuide, setShowPlanningGuide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const filteredVendors = useMemo(() => {
    return vendors.filter(vendor => {
      const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          vendor.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategories.length === 0 ||
                            selectedCategories.some(cat => 
                              vendor.category.toLowerCase().includes(cat.toLowerCase()));
      
      const matchesLocation = selectedLocations.length === 0 ||
                             selectedLocations.some(loc => 
                               vendor.location.toLowerCase().includes(loc.toLowerCase()));
      
      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [searchQuery, selectedCategories, selectedLocations]);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Vendor Directory</h1>
            <p className="mt-2 text-gray-600">Find and connect with the best trade show and event vendors.</p>
          </div>
          <button
            onClick={() => setShowPlanningGuide(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Exhibition Planning Guide
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Filters</h2>
              
              <FilterSection
                title="Categories"
                options={categories}
                selectedValues={selectedCategories}
                onChange={setSelectedCategories}
              />
              
              <FilterSection
                title="Locations"
                options={locations}
                selectedValues={selectedLocations}
                onChange={setSelectedLocations}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredVendors.map((vendor) => (
                <VendorCard key={vendor.id} vendor={vendor} />
              ))}
            </div>

            {filteredVendors.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No vendors found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <ContactPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
      <PlanningGuide isOpen={showPlanningGuide} onClose={() => setShowPlanningGuide(false)} />
    </>
  );
}