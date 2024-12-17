export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  participants: number;
  image: string;
  description: string;
  organizer: string;
  requirements: string[];
  contactPerson: string;
  contactPhone: string;
}