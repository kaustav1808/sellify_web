import type { NextPage } from 'next';
import Main from '@components/layouts/Main';
import { ReactElement, ReactNode, useState } from 'react';
import CreateItem from '@components/pages/items/CreateItem';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Items: NextPageWithLayout = () => {
  const [createItem, setCreateItem] = useState(false);
  return (
    <div className="w-full h-inherit p-4">
      <div className="flex">
        <div className="tabs w-11/12">
          <a className="tab tab-lg tab-bordered">All</a>
          <a className="tab tab-lg tab-bordered tab-active">Setteled</a>
          <a className="tab tab-lg tab-bordered">Closed</a>
        </div>
        <div className="w-1/12">
          <button
            className="btn btn-active btn-primary"
            onClick={() => setCreateItem(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
            </svg>
            Add Item
          </button>
        </div>
        <CreateItem show={createItem} reset={setCreateItem} />
      </div>
    </div>
  );
};

Items.getLayout = function getLayout(page: ReactElement) {
  return <Main>{page}</Main>;
};

export default Items;
