import React from 'react';
import { Trophy, Star, Award, Gift } from 'lucide-react';

const leaderboard = [
  {
    rank: 1,
    name: 'Анна Петрова',
    points: 1250,
    badges: 8,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
  },
  {
    rank: 2,
    name: 'Михаил Иванов',
    points: 980,
    badges: 6,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
  },
  {
    rank: 3,
    name: 'Елена Смирнова',
    points: 845,
    badges: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
  },
  {
    rank: 4,
    name: 'Дмитрий Козлов',
    points: 780,
    badges: 4,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
  },
  {
    rank: 5,
    name: 'Ольга Новикова',
    points: 720,
    badges: 4,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2'
  },
  {
    rank: 6,
    name: 'Сергей Морозов',
    points: 650,
    badges: 3,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
  }
];

const rewards = [
  {
    id: 1,
    name: 'Экологичная бутылка',
    points: 1000,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8'
  },
  {
    id: 2,
    name: 'Набор многоразовых приборов',
    points: 750,
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa'
  }
];

export default function RewardsPage() {
  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Рейтинг и награды</h1>
          <p className="text-gray-600">
            Участвуйте в экологических инициативах, зарабатывайте баллы и получайте награды
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <Trophy className="w-6 h-6 text-yellow-500 mr-2" />
              Лидеры месяца
            </h2>
            <div className="space-y-4">
              {leaderboard.map((user) => (
                <div key={user.rank} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <span className={`text-2xl font-bold w-12 ${
                    user.rank === 1 ? 'text-yellow-500' :
                    user.rank === 2 ? 'text-gray-400' :
                    user.rank === 3 ? 'text-amber-600' :
                    'text-gray-500'
                  }`}>{user.rank}</span>
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="font-semibold">{user.name}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      {user.points} баллов
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-blue-500 mr-1" />
                    <span className="text-gray-600">{user.badges}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <Gift className="w-6 h-6 text-green-500 mr-2" />
              Доступные награды
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {rewards.map((reward) => (
                <div key={reward.id} className="bg-gray-50 rounded-lg p-4">
                  <img
                    src={reward.image}
                    alt={reward.name}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold mb-2">{reward.name}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    {reward.points} баллов
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}