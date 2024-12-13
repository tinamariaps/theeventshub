import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import type { Event } from '../../data/events';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={event.image}
        alt={event.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{event.name}</h3>
            <span className="inline-block mt-1 px-2 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full">
              {event.industry}
            </span>
          </div>
        </div>

        <p className="mt-2 text-gray-600 line-clamp-2">{event.description}</p>

        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">
              {formatDate(event.startDate)} - {formatDate(event.endDate)}
            </span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{event.venue}, {event.location}</span>
          </div>

          {event.expectedAttendees && (
            <div className="flex items-center text-gray-600">
              <Users className="h-4 w-4 mr-2" />
              <span className="text-sm">{event.expectedAttendees.toLocaleString()} Expected Attendees</span>
            </div>
          )}
        </div>

        {event.website && (
          <div className="mt-6">
            <a
              href={event.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Visit Website
            </a>
          </div>
        )}
      </div>
    </div>
  );
}