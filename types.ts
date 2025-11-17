export type Page = 'registration' | 'blog' | 'calculator' | 'confirmation';

export interface Destination {
  id: string;
  title: string;
  image: string;
  content: string;
}

export interface ItineraryItem {
  id: string;
  name: string;
  price: number;
}

export interface ItineraryCategory {
  title: string;
  items: ItineraryItem[];
}
