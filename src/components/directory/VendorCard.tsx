import React from 'react';
import { MapPin, Star, Globe, Phone, Mail } from 'lucide-react';
import type { Vendor } from '../../data/vendors';

interface VendorCardProps {
  vendor: Vendor;
}

export default function VendorCard({ vendor }: VendorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={vendor.image}
        alt={vendor.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{vendor.name}</h3>
            <p className="text-sm text-indigo-600">{vendor.category}</p>
          </div>
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-600">{vendor.rating}</span>
          </div>
        </div>
        
        <p className="mt-2 text-gray-600">{vendor.description}</p>
        
        <div className="mt-4 flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{vendor.location}</span>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {vendor.services.map((service) => (
            <span
              key={service}
              className="px-2 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full"
            >
              {service}
            </span>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-100 grid grid-cols-3 gap-4">
          {vendor.website && (
            <a
              href={vendor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-indigo-600"
            >
              <Globe className="h-4 w-4 mr-1" />
              <span className="text-sm">Website</span>
            </a>
          )}
          {vendor.phone && (
            <a
              href={`tel:${vendor.phone}`}
              className="flex items-center text-gray-600 hover:text-indigo-600"
            >
              <Phone className="h-4 w-4 mr-1" />
              <span className="text-sm">Call</span>
            </a>
          )}
          {vendor.email && (
            <a
              href={`mailto:${vendor.email}`}
              className="flex items-center text-gray-600 hover:text-indigo-600"
            >
              <Mail className="h-4 w-4 mr-1" />
              <span className="text-sm">Email</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}