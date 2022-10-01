import Main from '@components/layouts/Main';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Item: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>Item : {id}</div>;
};

Item.getLayout = function getLayout(page: ReactElement) {
  return <Main>{page}</Main>;
};

export default Item;
