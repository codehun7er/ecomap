import React from 'react';
import EventCard from './EventCard';

export default function Events() {
  const events = [
    {
      title: "Community Forest Cleanup",
      date: "March 15, 2024",
      location: "Greenwood Park",
      participants: 45,
      image: "https://images.unsplash.com/photo-1615387000571-bdcfe92eb67c"
    },
    {
      title: "River Conservation Day",
      date: "March 20, 2024",
      location: "Blue River Valley",
      participants: 32,
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
    },
    {
      title: "Urban Garden Workshop",
      date: "March 25, 2024",
      location: "Community Center",
      participants: 28,
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}