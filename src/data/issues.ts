export interface Issue {
  id: number;
  type: string;
  location: [number, number];
  description: string;
  status: string;
}

export const issues: Issue[] = [
  {
    id: 1,
    type: 'Свалка',
    location: [55.7558, 37.6173], // Moscow
    description: 'Несанкционированная свалка строительного мусора',
    status: 'На рассмотрении'
  },
  {
    id: 2,
    type: 'Загрязнение воды',
    location: [59.9343, 30.3351], // St. Petersburg
    description: 'Загрязнение реки промышленными отходами',
    status: 'В процессе решения'
  }
];