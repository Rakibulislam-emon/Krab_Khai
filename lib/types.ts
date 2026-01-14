export type SpiceLevel = 0 | 1 | 2 | 3; // 0=None, 3=Extra Hot

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  image: string;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  isSpicy?: boolean;
  spiceLevel?: SpiceLevel;
  calories?: number;
}

export interface MenuCategory {
  id: string;
  title: string;
  description?: string;
  items: MenuItem[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface BrandValue {
  title: string;
  description: string;
  icon?: string;
}

export interface BrandStory {
  headline: string;
  subheadline: string;
  intro: string;
  fullStory: string;
  values: BrandValue[];
  history: TimelineEvent[];
}

export interface Location {
  id: string;
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
  image: string;
}
