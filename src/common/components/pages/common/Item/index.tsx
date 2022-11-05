import ShowPieceImages from './ShowPieceImages';
import type { NextPage } from 'next';
import { ItemType } from '@customtypes/ui/common';
import { getShortDescription, getShortTags } from 'src/services/helpers';
import Link from 'next/link';

const Item: NextPage<ItemType> = ({ value }: ItemType) => {
  return (
    <div className="max-w-2xl mx-auto">
      <Link href={`/items/${value.id}`} className="cursor-pointer">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <ShowPieceImages />

          <div className="p-5">
            <a href="#">
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                {value.title}
              </h5>
            </a>
            <div className="card-actions">
              {getShortTags(value.tags).map((element) => (
                <div key={element} className="badge badge-success">
                  {element}
                </div>
              ))}
            </div>
            <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
              {getShortDescription(value.shortDescription)}
            </p>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Know more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
};

//

export default Item;
