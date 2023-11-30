import { ShortUser } from '@customtypes/business/User';
import { Item } from 'src/types/business/Item';

export const getClass = (obj: any) => {
  let classname = '';

  for (const [key, value] of Object.entries(obj)) {
    if (value) classname += ' ' + key;
  }

  return classname;
};

export const getShortTags = (arr: string[], offset = 4) => {
  if (arr.length > offset) {
    return arr
      .slice(0, offset - 1)
      .map((o) => o)
      .concat([`+${arr.length - offset} more`]);
  } else {
    return arr.map((o) => o);
  }
};

export const getShortDescription = (str: string) => {
  if (str.length > 50) {
    return str.slice(0, 50).concat(`........`);
  } else {
    return str;
  }
};

export const getRandomColor = () => {
  const colorArray = [
    'red',
    'amber',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
  ];
  return colorArray[Math.floor(Math.random() * colorArray.length)];
};

export const checkValidItemUser = (user: ShortUser, item: Item) => {
  if (!user.id) return false;
  if (!item.owner) return false;

  if (item.owner.id !== user.id) return false;

  return true;
};
