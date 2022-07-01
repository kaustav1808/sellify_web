import type { NextPage } from 'next';
import Main from '@components/layouts/Main';
import { ReactElement, ReactNode } from 'react';
import ShowPiece from '@components/pages/common/ShowPiece';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Home: NextPageWithLayout = () => {
  return (
    <div className="p-2 grid md:grid-cols-3 gap-8 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
      <ShowPiece />
      <ShowPiece />
      <ShowPiece />
      <ShowPiece />
      <ShowPiece />
      <ShowPiece />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Main>{page}</Main>;
};

export default Home;
