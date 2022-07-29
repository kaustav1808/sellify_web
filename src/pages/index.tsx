import type { NextPage } from 'next';
import Main from '@components/layouts/Main';
import { ReactElement, ReactNode } from 'react';
import ShowPiece from '@components/pages/common/ShowPiece';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Home: NextPageWithLayout = () => {
  return (
    <div className="p-2 flex gap-2">
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
