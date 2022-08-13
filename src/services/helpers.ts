export const getClass = (obj: any) => {
  let classname = '';

  for (const [key, value] of Object.entries(obj)) {
    if (value) classname += ' ' + key;
  }

  return classname;
};

export const getShortTags = (arr: string[]) => {
  if (arr.length > 4) {
    return arr
      .slice(0, 3)
      .map((o) => o)
      .concat([`+${arr.length - 3}`]);
  } else {
    return arr.map((o) => o);
  }
};

export const getShortDescription = (str: string) => {
  if (str.length > 100) {
    return str.slice(0, 100).concat(`........`);
  } else {
    return str;
  }
};
