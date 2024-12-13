import React from 'react';
import { Calendar, Users, ArrowRight } from 'lucide-react';

interface FeaturedSectionProps {
  onNavigate: (page: string) => void;
}

const featuredEvents = [
  {
    id: 1,
    title: "CES 2025",
    date: "January 7-10, 2025",
    location: "Las Vegas, NV",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "HIMSS Global Health Conference",
    date: "March 10-14, 2025",
    location: "Orlando, FL",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80"
  }
];

const featuredVendors = [
  {
    id: 1,
    name: "DisplayTech Solutions",
    category: "Exhibition Design",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "EventPro Services",
    category: "Event Management",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80"
  }
];

export default function FeaturedSection({ onNavigate }: FeaturedSectionProps) {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Events */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
            <button 
              onClick={() => onNavigate('events')}
              className="flex items-center text-indigo-600 hover:text-indigo-500"
            >
              View all <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredEvents.map((event) => (
              <div 
                key={event.id} 
                className="relative rounded-lg overflow-hidden group cursor-pointer"
                onClick={() => onNavigate('events')}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                  <div className="mt-2 flex items-center text-white/80">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <p className="text-white/80">{event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Vendors */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Vendors</h2>
            <button 
              onClick={() => onNavigate('directory')}
              className="flex items-center text-indigo-600 hover:text-indigo-500"
            >
              View directory <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredVendors.map((vendor) => (
              <div 
                key={vendor.id} 
                className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg cursor-pointer"
                onClick={() => onNavigate('directory')}
              >
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{vendor.name}</h3>
                  <p className="text-gray-600">{vendor.category}</p>
                  <div className="mt-2 flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-gray-600">{vendor.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}