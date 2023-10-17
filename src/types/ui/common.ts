import { ScriptProps } from 'next/script';

export type Item = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  sellType: string;
  images: {
    original: string,
    thumbnail: string,
    originalClass ?: string
  }[];
  priceMin: number;
  priceMax: number;
  priceOffset: number;
  status: string;
  created_at: Date;
  updated_at: Date;
};

export const DefaultItem = {
  id: '',
  status: '',
  title: '',
  shortDescription: '',
  description: '',
  tags: [],
  images:[],
  sellType: '',
  priceMin: 0,
  priceMax: 0,
  priceOffset: 0,
  created_at: new Date(),
  updated_at: new Date(),
};

export type ItemType = ScriptProps & {
  value: Item;
};

export type CreateItemType = {
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  sellType: string;
  priceMin: number;
  priceMax: number;
  priceOffset: number;
  createdAt: Date;
  updatedAt: Date;
};

export const DefaultCreateItem = {
  title: '',
  shortDescription: '',
  description: '',
  tags: [],
  sellType: '',
  priceMin: 0,
  priceMax: 0,
  priceOffset: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export type TabsType = ScriptProps & {
  list: string[];
  selected: string;
  changeTab: Function;
};

export const DefaultTabItem = {
  list: [],
  selected: '',
};
