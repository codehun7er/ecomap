import React from 'react';
import { ArrowRight, Leaf, Users, MapPin, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { icon: Leaf, label: 'Экологических инициатив', value: '150+' },
  { icon: Users, label: 'Активных участников', value: '5,000+' },
  { icon: MapPin, label: 'Отмеченных проблем', value: '300+' },
  { icon: Award, label: 'Выполненных проектов', value: '80+' }
];

export default function HomePage() {
  return (
    <div>
      <div className="relative bg-green-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1543699936-c901ddbf0c05"
            alt="Природа России"
          />
          <div className="absolute inset-0 bg-green-800 mix-blend-multiply" />
        </div>
        
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Сделайте вклад в защиту природы России
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-green-100">
            Присоединяйтесь к ЭкоКарте, чтобы сообщать об экологических проблемах,
            участвовать в местных инициативах и помогать создавать устойчивое
            будущее для нашей страны.
          </p>
          <div className="mt-10">
            <Link
              to="/events"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50"
            >
              Начать
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="mx-auto h-12 w-12 text-green-600" />
                <p className="mt-4 text-3xl font-extrabold text-gray-900">{stat.value}</p>
                <p className="mt-2 text-base text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Как это работает</h2>
            <p className="mt-4 text-lg text-gray-600">
              Простые шаги к улучшению экологической ситуации
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <MapPin className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Отметьте проблему</h3>
              <p className="text-gray-600">
                Укажите на карте место экологической проблемы и опишите ситуацию
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <Users className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Объединяйтесь</h3>
              <p className="text-gray-600">
                Находите единомышленников и участвуйте в экологических мероприятиях
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <Award className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Получайте награды</h3>
              <p className="text-gray-600">
                Зарабатывайте баллы за активность и обменивайте их на эко-подарки
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}