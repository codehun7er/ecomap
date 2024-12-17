import React from 'react';
import { MapPin, Calendar, BookOpen, Trophy, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <MapPin className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">EcoMap</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#map" className="flex items-center space-x-2 hover:text-green-200">
              <MapPin className="h-5 w-5" />
              <span>Map</span>
            </a>
            <a href="#events" className="flex items-center space-x-2 hover:text-green-200">
              <Calendar className="h-5 w-5" />
              <span>Events</span>
            </a>
            <a href="#learn" className="flex items-center space-x-2 hover:text-green-200">
              <BookOpen className="h-5 w-5" />
              <span>Learn</span>
            </a>
            <a href="#rewards" className="flex items-center space-x-2 hover:text-green-200">
              <Trophy className="h-5 w-5" />
              <span>Rewards</span>
            </a>
          </nav>
          
          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}