import ShowPieceImages from './ShowPieceImages';
import type { NextPage } from 'next';
import { ItemType } from '@customtypes/ui/common';
import { ScriptProps } from 'next/script';
import { getShortDescription, getShortTags } from 'src/services/helpers';

const Item: NextPage<ItemType> = ({ value }: ItemType) => {
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
        <ShowPieceImages />
        <div className="p-4">
          <span className="text-lg uppercase text-slate-100 font-bold subpixel-antialiased">
            {value.title}
            {/* <div className="badge badge-secondary">NEW</div> */}
          </span>
          <div className="card-actions">
            {getShortTags(value.tags).map((element) => (
              <div key={element} className="badge badge-success">
                {element}
              </div>
            ))}
          </div>
          <p className="text-slate-300 h-1/2 overflow-hidden text-ellipsis mb-2">
            {getShortDescription(value.shortDescription)}
          </p>
        </div>
      </div>
    </>
  );
};

//

export default Item;
