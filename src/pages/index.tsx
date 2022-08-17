import type { NextPage } from 'next';
import Main from '@components/layouts/Main';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import Item from '@components/pages/common/Item';
import { ItemType } from '@customtypes/ui/common';
import client from 'src/api/client';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Home: NextPageWithLayout = () => {
  const [items, setItems] = useState<ItemType[]>([]);

  useEffect(() => {
    client
      .get('/items')
      .then((res) => {
        setItems(res.data.items);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="p-4 grid grid-cols-5 gap-2 h-auto">
      {items.map((item) => (
        <Item key={item.id} value={item} />
      ))}
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Main>{page}</Main>;
};

export default Home;
