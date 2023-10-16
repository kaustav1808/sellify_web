import ShowPieceImages from './ShowPieceImages';
import type { NextPage } from 'next';
import { ItemType } from '@customtypes/ui/common';
import {
  getRandomColor,
  getShortDescription,
  getShortTags,
} from 'src/services/helpers';
import Link from 'next/link';

const Item: NextPage<ItemType> = ({ value }: ItemType) => {
  const getPrice = () => {
    if (value.sellType === 'RANGE')
      return (
        <>
          ${value.priceMin}&#8377; - ${value.priceMin}&#8377;
        </>
      );
    else return <>`${value.priceMin}`&#8377;</>;
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
            {getShortTags(value.tags).map((element) => (
              <div
                key={element}
                className={`badge badge-${getRandomColor()} badge-outline`}
              >
                {element}
              </div>
            ))}
          </div>
        </div>
        <div className="px-6">
          <button className="btn btn-wide btn-info">
            <Link href={`/items/${value.id}`}>Buy</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

//

export default Item;
