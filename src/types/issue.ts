export interface IssueType {
  id: string;
  label: string;
  description: string;
  icon: string;
}

export interface Issue {
  id: string;
  type: string;
  title: string;
  description: string;
  location: string;
  date: string;
  status: 'pending' | 'in-progress' | 'resolved';
  images?: string[];
  reportedBy: string;
  votes: number;
}