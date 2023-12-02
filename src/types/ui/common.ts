import { ScriptProps } from 'next/script';
import { ReactElement } from 'react';

export type TabsType = ScriptProps & {
  list: string[];
  selected: string;
  changeTab: Function;
};

export const DefaultTabItem = {
  list: [],
  selected: '',
};

export type ModalType = ScriptProps & {
  show: Boolean;
  resetModal: Function;
  children: ReactElement;
  width?: String;
};

export type DialogBoxType = ScriptProps & {
  show: boolean;
  message: String;
  header?: String;
  onSuccess: Function;
  onFailure: Function;
};
