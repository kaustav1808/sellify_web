import { ScriptProps } from 'next/script';

export type CreateItemType = {
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  sellType: string;
  priceMin: number | null;
  priceMax: number | null;
};

export const DefaultCreateItem = {
  title: '',
  shortDescription: '',
  description: '',
  tags: [],
  sellType: '',
  priceMin: null,
  priceMax: null,
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
