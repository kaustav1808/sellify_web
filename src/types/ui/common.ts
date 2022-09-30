import { ScriptProps } from 'next/script';

export type Item = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  sellType: string;
  priceMin: number;
  priceMax: number;
  status: string;
};

export type ItemType = ScriptProps & {
  key: string | undefined;
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
};

export const DefaultCreateItem = {
  title: '',
  shortDescription: '',
  description: '',
  tags: [],
  sellType: '',
  priceMin: 0,
  priceMax: 0,
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
