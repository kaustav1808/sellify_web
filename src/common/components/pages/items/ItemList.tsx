import { NextPage } from 'next';
import { ScriptProps } from 'next/script';
import { useState, useEffect } from 'react';
import client from 'src/api/client';
import { Item as ItemType } from '@customtypes/business/Item';
import Item from '../common/Item';

type ItemModalType = ScriptProps & { type: string };

const ItemList: NextPage<ItemModalType> = ({ type = 'all' }) => {
  const [items, setItems] = useState<ItemType[]>([]);

  useEffect(() => {
    client
      .get(`/items?type=${type}`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const getItems = () => {
    if (items.length) {
      return items.map((item) => <Item key={item.id} value={item} />);
    }
  };

  return (
    <>
      <div className="p-4">{items.length} No of results found</div>
      <div className="p-4 grid grid-cols-4 gap-2 h-auto">{getItems()}</div>
    </>
  );
};

export default ItemList;
