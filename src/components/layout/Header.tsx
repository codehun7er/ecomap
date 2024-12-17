import React from 'react';
import { MapPin, Calendar, BookOpen, Trophy, Menu, AlertTriangle, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <MapPin className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">ЭкоКарта</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/issues" className="flex items-center space-x-2 hover:text-green-200">
              <AlertTriangle className="h-5 w-5" />
              <span>Проблемы</span>
            </Link>
            <Link to="/events" className="flex items-center space-x-2 hover:text-green-200">
              <Calendar className="h-5 w-5" />
              <span>События</span>
            </Link>
            <Link to="/learn" className="flex items-center space-x-2 hover:text-green-200">
              <BookOpen className="h-5 w-5" />
              <span>Обучение</span>
            </Link>
            <Link to="/rewards" className="flex items-center space-x-2 hover:text-green-200">
              <Trophy className="h-5 w-5" />
              <span>Награды</span>
            </Link>
            <Link to="/signin" className="flex items-center space-x-2 hover:text-green-200">
              <LogIn className="h-5 w-5" />
              <span>Войти</span>
            </Link>
          </nav>
          
          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}