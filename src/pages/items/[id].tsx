import Main from '@components/layouts/Main';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode } from 'react';
import ImageGallery from 'react-image-gallery';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Item: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
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
    <div className="flex flex-col gap-1 h-full">
      <div className="p-4 flex gap-2 w-full h-2/3">
        <div className="w-1/2 max-h-fit h-full">
          <ImageGallery items={images} />
        </div>
        <div className="w-1/2 max-h-fit h-full bg-slate-300"></div>
      </div>
      <div className="p-4 flex w-full gap-1 h-1/3">
        <div className="w-1/4 max-h-fit h-full bg-slate-300"></div>
        <div className="w-1/4 max-h-fit h-full bg-slate-300"></div>
        <div className="w-1/4 max-h-fit h-full bg-slate-300"></div>
        <div className="w-1/4 max-h-fit h-full bg-slate-300"></div>
      </div>
    </div>
  );
};

Item.getLayout = function getLayout(page: ReactElement) {
  return <Main>{page}</Main>;
};

export default Item;
