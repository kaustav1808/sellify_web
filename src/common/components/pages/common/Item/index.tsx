import ShowPieceImages from './ShowPieceImages';
import type { NextPage } from 'next';
import { Item as ItemT } from '@customtypes/business/Item';
import { ItemConstants } from '../../../../../constants/ItemConstants';
import {
  getShortDescription,
} from 'src/services/helpers';
import Link from 'next/link';
import { ScriptProps } from 'next/script';
import Badges from '@components/ui/Badges';

type ItemType = ScriptProps & { value: ItemT };

const Item: NextPage<ItemType> = ({ value }: ItemType) => {
  const getPrice = () => {
    if (value.sellType === ItemConstants.RANGE)
      return (
        <>
          {value.minPrice}&#8377; - {value.maxPrice}&#8377;
        </>
      );
    else return <>`${value.maxPrice}`&#8377;</>;
  };

  return (
    <div className="relative flex w-full flex-col rounded-xl bg-stone-300 bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 mt-4 h-auto overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <ShowPieceImages />
      </div>
      <div className="flex flex-col gap-4 h-auto p-4">
        <div className="flex flex-col h-auto px-6">
          <div className="mb-2 flex items-center h-1/6 justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {value.title}
            </p>
          </div>
          <p
            className="mb-2 tooltip tooltip-warning tooltip-down block font-sans text-sm h-3/6 font-normal leading-normal text-gray-700 antialiased opacity-75"
            data-tip={value.description}
          >
            {getShortDescription(value.description)}
          </p>
          <div className="mb-2 flex items-center h-1/6 justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {getPrice()}
            </p>
          </div>
          <div className="mb-2 flex flex-row h-1/6 gap-2">
            <Badges values={value.tags} isShort={true} label='tag' />
          </div>
        </div>
        <div className="px-6">
          <Link href={`/items/${value.id}`}>
            <button className="btn btn-wide btn-info">Buy</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

//

export default Item;
