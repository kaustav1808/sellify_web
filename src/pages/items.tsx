import type { NextPage } from 'next';
import Main from '@components/layouts/Main';
import { ReactElement, ReactNode } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Items: NextPageWithLayout = () => {
  return (
    <div className="w-full h-inherit p-2">
      <div className=""></div>
    </div>
  );
};

Items.getLayout = function getLayout(page: ReactElement) {
  return <Main>{page}</Main>;
};

export default Items;
