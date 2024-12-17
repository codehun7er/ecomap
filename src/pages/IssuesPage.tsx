import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ThumbsUp, MessageCircle, Clock } from 'lucide-react';
import Button from '../components/ui/Button';

const getStatusStyles = (status: string) => {
  return status === 'pending'
    ? 'bg-yellow-100 text-yellow-800'
    : 'bg-green-100 text-green-800';
};

const getStatusText = (status: string) => {
  return status === 'pending' ? 'На рассмотрении' : 'В работе';
};

const issues = [
  {
    id: '1',
    title: 'Несанкционированная свалка в парке Сокольники',
    type: 'Незаконная свалка',
    location: 'Москва, парк Сокольники',
    date: '2024-03-10',
    status: 'pending',
    votes: 15,
    comments: 8,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09'
  },
  {
    id: '2',
    title: 'Загрязнение реки Невы промышленными отходами',
    type: 'Загрязнение воды',
    location: 'Санкт-Петербург, набережная Невы',
    date: '2024-03-09',
    status: 'in-progress',
    votes: 32,
    comments: 12,
    image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f'
  }
];

export default function IssuesPage() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Экологические проблемы</h1>
        <Link to="/report">
          <Button>
            <div className="flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Сообщить о проблеме
            </div>
          </Button>
        </Link>
      </div>

      <div className="grid gap-6">
        {issues.map((issue) => (
          <div key={issue.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full md:w-48 object-cover"
                  src={issue.image}
                  alt={issue.title}
                />
              </div>
              <div className="p-6 flex-1">
                <div className="flex items-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    {issue.type}
                  </span>
                  <span className="ml-2 text-sm text-gray-500 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {new Date(issue.date).toLocaleDateString()}
                  </span>
                </div>
                <h2 className="mt-2 text-xl font-semibold">{issue.title}</h2>
                <p className="mt-1 text-gray-600">{issue.location}</p>
                <div className="mt-4 flex items-center space-x-4">
                  <button className="flex items-center text-gray-600 hover:text-green-600">
                    <ThumbsUp className="w-5 h-5 mr-1" />
                    {issue.votes}
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-green-600">
                    <MessageCircle className="w-5 h-5 mr-1" />
                    {issue.comments}
                  </button>
                </div>
              </div>
              <div className="p-6 md:w-48">
                <div className="mb-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyles(issue.status)}`}>
                    {getStatusText(issue.status)}
                  </span>
                </div>
                <Button variant="secondary" className="w-full">
                  Подробнее
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}