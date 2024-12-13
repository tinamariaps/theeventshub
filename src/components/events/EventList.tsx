import React from 'react';
import EventCard from './EventCard';
import type { Event } from '../../data/events';

interface EventListProps {
  events: Event[];
}

export default function EventList({ events }: EventListProps) {
  return (
    <div className="grid grid-cols-1 gap-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      {events.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No events found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}