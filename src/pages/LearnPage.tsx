import React from 'react';
import { BookOpen, Award, Play } from 'lucide-react';
import Button from '../components/ui/Button';

const courses = [
  {
    id: 1,
    title: 'Основы экологии',
    description: 'Базовый курс по экологии и защите окружающей среды',
    duration: '2 часа',
    level: 'Начальный',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09'
  },
  {
    id: 2,
    title: 'Раздельный сбор отходов',
    description: 'Как правильно сортировать мусор и почему это важно',
    duration: '1.5 часа',
    level: 'Начальный',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b'
  },
  {
    id: 3,
    title: 'Городское озеленение',
    description: 'Практический курс по озеленению городских пространств',
    duration: '3 часа',
    level: 'Средний',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735'
  }
];

export default function LearnPage() {
  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Экологическое образование</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Изучайте экологию, получайте практические навыки и делитесь знаниями с сообществом
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <Play className="w-4 h-4 mr-1" />
                    {course.duration}
                  </span>
                  <span className="flex items-center">
                    <Award className="w-4 h-4 mr-1" />
                    {course.level}
                  </span>
                </div>
                <Button className="w-full">
                  Начать обучение
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-green-50 rounded-lg p-8 text-center">
          <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Хотите поделиться знаниями?</h2>
          <p className="text-gray-600 mb-6">
            Станьте преподавателем на нашей платформе и помогите другим узнать больше об экологии
          </p>
          <Button variant="secondary">
            Стать преподавателем
          </Button>
        </div>
      </div>
    </div>
  );
}