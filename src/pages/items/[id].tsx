import Main from '@components/layouts/Main';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import client from 'src/api/client';
import { getShortTags } from 'src/services/helpers';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Item: NextPageWithLayout = () => {
  const [item, setItem] = useState({})
  const router = useRouter();
 
  useEffect(()=>{
    const { id } = router.query;
    if(id){
      client.get(`/item/${id}`)
      .then(res=>setItem(res.data.data))
      .catch(err=>console.log(err))
    }
    
   },[router.query])
  
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-1 p-4 h-full overflow-auto">
      <div className="max-h-fit col-span-2">
        <ImageGallery items={images} showPlayButton={false} />
      </div>
      <div className="max-h-fit h-full col-span-2">
        <div className='flex flex-col px-2 gap-2'>
          <div className='text-4xl text-white text-left underline decoration-1 underline-offset-2 font-sans'>
            {item.title || ''}
          </div>
          <div className='text-sm text-slate-300 text-left font-sans'>
            {item.shortDescription || ''}
          </div>
          <div className='flex flex-wrap gap-1'>
             {item.tags? item.tags.map((element) => (
                <div key={element} className="badge badge-success">
                  {element}
                </div>
              )):""}
          </div>
          <div className='text-lg text-slate-100 text-left font-sans'>
            {item.description || ''}
          </div>

        </div>

      </div>
      <div className="max-h-fit h-48 bg-slate-300"></div>
      <div className="max-h-fit h-48 bg-slate-300"></div>
      <div className="max-h-fit h-48 bg-slate-300"></div>
      <div className="max-h-fit h-48 bg-slate-300"></div>
    </div>
  );
};

Item.getLayout = function getLayout(page: ReactElement) {
  return <Main>{page}</Main>;
};

export default Item;
