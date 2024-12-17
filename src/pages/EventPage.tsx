import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Users, Phone, User } from 'lucide-react';
import { events } from '../data/events';
import Button from '../components/ui/Button';

export default function EventPage() {
  const { id } = useParams();
  const event = events.find(e => e.id === id);

  if (!event) {
    return <div className="text-center py-12">Событие не найдено</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <img 
        src={event.image} 
        alt={event.title} 
        className="w-full h-96 object-cover rounded-lg shadow-lg"
      />
      
      <div className="mt-8">
        <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center text-gray-600">
              <Calendar className="h-5 w-5 mr-3" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-3" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="h-5 w-5 mr-3" />
              <span>{event.participants} участников</span>
            </div>
            <div className="flex items-center text-gray-600">
              <User className="h-5 w-5 mr-3" />
              <span>{event.organizer}</span>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-4">Контактная информация</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <User className="h-5 w-5 mr-3" />
                {event.contactPerson}
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                {event.contactPhone}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Описание</h2>
          <p className="text-gray-700">{event.description}</p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Что взять с собой</h2>
          <ul className="list-disc list-inside space-y-2">
            {event.requirements.map((req, index) => (
              <li key={index} className="text-gray-700">{req}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <Button className="w-full md:w-auto">
            Принять участие
          </Button>
        </div>
      </div>
    </div>
  );
}