import { ShortUser } from './User';

export type Item = {
  id?: string;
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  sellType: string;
  isArchive: boolean;
  images: {
    original: string;
    thumbnail: string;
    originalClass?: string;
  }[];
  minPrice: number;
  maxPrice: number;
  priceOffset: number;
  status: string;
  created_at: Date;
  updated_at: Date;
  owner?: ShortUser;
};

export const DefaultItem = {
  id: '',
  status: '',
  title: '',
  shortDescription: '',
  description: '',
  tags: [],
  images: [],
  sellType: '',
  isArchive: false,
  minPrice: 0,
  maxPrice: 0,
  priceOffset: 0,
  created_at: new Date(),
  updated_at: new Date(),
};
