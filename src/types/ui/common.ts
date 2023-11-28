import { ScriptProps } from 'next/script';

export type TabsType = ScriptProps & {
  list: string[];
  selected: string;
  changeTab: Function;
};

export const DefaultTabItem = {
  list: [],
  selected: '',
};
