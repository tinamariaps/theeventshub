export interface Event {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  venue: string;
  industry: string;
  description: string;
  website?: string;
  image: string;
  expectedAttendees?: number;
  boothOptions?: string[];
}

export interface Location {
  value: string;
  label: string;
  state: string;
}

export interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
  excerpt: string;
  image: string;
  tags: string[];
}

export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  posts: BlogPost[];
}

export type CityEvents = {
  [city: string]: Event[];
};

export const industries = [
  'Technology',
  'Healthcare',
  'Manufacturing',
  'Marketing',
  'Education',
  'Construction',
  'Food & Beverage',
  'Automotive',
  'Energy',
  'Fashion',
  'Sports',
  'Entertainment',
  'Maritime'
] as const;

export type Industry = typeof industries[number];