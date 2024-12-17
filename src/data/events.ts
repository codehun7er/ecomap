import { Event } from '../types/event';

export const events: Event[] = [
  {
    id: '1',
    title: 'Уборка Сокольнического парка',
    date: '15 марта 2024',
    location: 'Парк Сокольники, Москва',
    participants: 45,
    image: 'https://images.unsplash.com/photo-1615387000571-bdcfe92eb67c',
    description: 'Присоединяйтесь к нашей инициативе по уборке одного из красивейших парков Москвы.',
    organizer: 'Экологическое движение Москвы',
    requirements: ['Перчатки', 'Удобная одежда', 'Питьевая вода'],
    contactPerson: 'Анна Петрова',
    contactPhone: '+7 (999) 123-45-67'
  },
  {
    id: '2',
    title: 'День охраны реки Невы',
    date: '20 марта 2024',
    location: 'Набережная реки Невы, Санкт-Петербург',
    participants: 32,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789',
    description: 'Мероприятие по очистке берегов Невы и образовательная программа.',
    organizer: 'Экологический центр Санкт-Петербурга',
    requirements: ['Резиновые сапоги', 'Рабочие перчатки', 'Дождевик'],
    contactPerson: 'Михаил Иванов',
    contactPhone: '+7 (999) 234-56-78'
  },
  {
    id: '3',
    title: 'Мастер-класс по городскому садоводству',
    date: '25 марта 2024',
    location: 'Культурный центр ЗИЛ, Москва',
    participants: 28,
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735',
    description: 'Научитесь создавать и поддерживать городские сады.',
    organizer: 'Городские Садоводы',
    requirements: ['Блокнот', 'Садовые инструменты', 'Хорошее настроение'],
    contactPerson: 'Елена Смирнова',
    contactPhone: '+7 (999) 345-67-89'
  },
  {
    id: '4',
    title: 'Экологический марафон в Казани',
    date: '1 апреля 2024',
    location: 'Центральный парк, Казань',
    participants: 55,
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5',
    description: 'Спортивное мероприятие с уборкой территории парка.',
    organizer: 'ЭкоСпорт Казань',
    requirements: ['Спортивная одежда', 'Перчатки', 'Вода'],
    contactPerson: 'Рустам Хасанов',
    contactPhone: '+7 (999) 456-78-90'
  },
  {
    id: '5',
    title: 'Посадка деревьев в Екатеринбурге',
    date: '10 апреля 2024',
    location: 'Парк Маяковского, Екатеринбург',
    participants: 40,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
    description: 'Масштабная акция по озеленению городского парка.',
    organizer: 'Зеленый Екатеринбург',
    requirements: ['Лопата', 'Рабочие перчатки', 'Удобная обувь'],
    contactPerson: 'Ольга Соколова',
    contactPhone: '+7 (999) 567-89-01'
  }
];