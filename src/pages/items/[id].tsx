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
    <div className="grid grid-cols-4 gap-1 p-4 h-full overflow-auto">
      <div className="max-h-fit col-span-2">
        <ImageGallery items={images} showPlayButton={false} />
      </div>
      <div className="max-h-fit h-full bg-slate-300 col-span-2"></div>
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
