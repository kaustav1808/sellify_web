import { NextPage } from 'next';
import { ScriptProps } from 'next/script';
import { useState, useEffect } from 'react';
import client from 'src/api/client';
import { Item as ItemType } from '@customtypes/business/Item';
import Item from '../common/Item';
import { Rings } from 'react-loader-spinner';

type ItemModalType = ScriptProps & { type: string };

const ItemList: NextPage<ItemModalType> = ({ type = 'all' }) => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true)
    client
      .get(`/items?type=${type}`)
      .then((res) => {
        setItems(res.data);
        setLoading(false)
      })
      .catch((e) => {
        console.log(e);
        setLoading(false)
      });
  }, []);

  const getItems = () => {
    if (items.length) {
      return (<div className="p-4 grid grid-cols-4 gap-2 h-auto">
        {items.map((item) => <Item key={item.id} value={item} />)}
      </div>);
    }
  };

  const getLoader = () => {
    return (
      <div className='flex bg-cover bg-transparent justify-center place-items-center h-full w-full'>
      <Rings
  height="80"
  width="80"
  color="#D2CEC9"
  ariaLabel="rings-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
    )
  };

  return (
    <>
       
      <div className="p-4">{loading ? "Loading items...." :  `${items.length} No of results found`}</div>
      {loading?getLoader():getItems()}
    </>
  );
};

export default ItemList;
