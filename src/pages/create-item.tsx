import type { NextPage } from 'next';
import Main from '@components/layouts/Main';
import { ReactElement, ReactNode } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const CreateItem: NextPageWithLayout = () => {
  return <div className="w-full h-inherit">new create item</div>;
};

CreateItem.getLayout = function getLayout(page: ReactElement) {
  return <Main>{page}</Main>;
};

export default CreateItem;
