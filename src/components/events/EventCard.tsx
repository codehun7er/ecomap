import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Event } from '../../types/event';
import Button from '../ui/Button';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img className="h-48 w-full object-cover" src={event.image} alt={event.title} />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="h-5 w-5 mr-2" />
            <span>{event.participants} участников</span>
          </div>
        </div>
        <div className="mt-6 flex space-x-4">
          <Link to={`/events/${event.id}`} className="flex-1">
            <Button variant="secondary" className="w-full">
              Подробнее
            </Button>
          </Link>
          <Button className="flex-1">
            Участвовать
          </Button>
        </div>
      </div>
    </div>
  );
}