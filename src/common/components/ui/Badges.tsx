import { BadgeType } from '@customtypes/ui/Common';
import { NextPage } from 'next';
import { getShortId } from 'src/services/helpers';

const Badges: NextPage<BadgeType> = ({
  label = 'name',
  isShort = false,
  values = [],
}: BadgeType) => {
  const badge = (label: string, color: string) => (
    <div
      key={getShortId()}
      className={`bg-[${color}] text-[${color}] py-2 px-4 rounded-full text-xs font-bold`}
    >
      {label}
    </div>
  );

  const getShortbadges = (arr: Array<any>, offset = 4) => {
    if (arr.length > offset) {
      return arr
        .slice(0, offset - 1)
        .map((o) => badge(o[label], o['colorCode']))
        .concat([badge(`+${arr.length - offset} more`, '#787c82')]);
    } else {
      return arr.map((o) => badge(o[label], o['colorCode']));
    }
  };

  return isShort
    ? getShortbadges(values)
    : values.map((o: any) => badge(o[label], o['colorCode']));
};

export default Badges;
