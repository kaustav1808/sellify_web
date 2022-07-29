import type { NextPage } from 'next';
import Main from '@components/layouts/Main';
import { ReactElement, ReactNode } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const CreateBid: NextPageWithLayout = () => {
  return <div className="w-full h-inherit">new create item</div>;
};

CreateBid.getLayout = function getLayout(page: ReactElement) {
  return <Main>{page}</Main>;
};

export default CreateBid;
