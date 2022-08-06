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
  priceMax: null
}; 