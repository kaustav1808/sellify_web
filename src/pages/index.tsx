import type { NextPage } from 'next';
import Main from '@components/layouts/Main';
import { ReactElement, ReactNode } from 'react';
import ItemList from '@components/pages/items/ItemList';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Home: NextPageWithLayout = () => <ItemList type="all" />;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Main>{page}</Main>;
};

export default Home;
