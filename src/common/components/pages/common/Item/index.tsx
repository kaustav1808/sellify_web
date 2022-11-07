import ShowPieceImages from './ShowPieceImages';
import type { NextPage } from 'next';
import { ItemType } from '@customtypes/ui/common';
import { getShortDescription, getShortTags } from 'src/services/helpers';
import Link from 'next/link';
import style from './items.module.css';

const Item: NextPage<ItemType> = ({ value }: ItemType) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="w-80 max-w-sm">
        <div className="bg-slate-300 shadow-2xl rounded-3xl overflow-hidden">
          <ShowPieceImages />
          <div className="flex flex-col">
            <h2 className="text-center text-gray-800 text-2xl font-bold pt-2">
              {value.title}
            </h2>
            <div className="w-5/6 m-auto">
              <p className="text-center text-gray-500 pt-4">
                {getShortDescription(value.shortDescription)}
              </p>
            </div>
            <div className="flex items-center w-72 lg:w-5/6 m-auto bg-indigo-50 my-5 p-4 lg:p-4 rounded-2xl">
              <div className="w-1/5 content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="w-2/5 pt-1">
                <p className="text-gray-800 font-bold lg:text-sm">Anual Plan</p>
                <p className="text-gray-500 text-sm">$59.99/year</p>
              </div>
              <div className="w-2/5 pt-2">
                <div className="bg-blue-700 w-72 lg:w-5/6 m-auto mt-2 p-2 hover:bg-indigo-500 rounded-2xl  text-white text-center shadow-xl shadow-bg-blue-700">
                  <button className=" text-sm font-bold">Place Bid</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//

export default Item;
