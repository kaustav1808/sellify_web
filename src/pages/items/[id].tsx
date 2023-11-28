import Main from '@components/layouts/Main';
import KebabMenu from '@components/ui/KebabMenu';
import { Item, DefaultItem } from '@customtypes/business/Item';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import client from 'src/api/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getRandomColor } from 'src/services/helpers';
import { faFilePen, faBoxesPacking } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Item: NextPageWithLayout = () => {
  const [item, setItem] = useState<Item>(DefaultItem);
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      client
        .get(`/items/${id}`)
        .then((res) => {
          const response: Item = res.data;
          setItem(response);
          document.title = `Sellify | ${response.title}`;
        })
        .catch((err) => console.log(err));
    }

    return () => {
      document.title = 'Sellify';
    };
  }, [router.query]);

  const getShortBids = () => {
    return [1, 2, 3, 4].map((o) => {
      if (o == 4) {
        return (
          <div key={o} className="max-h-fit h-64 ">
            <div className="card w-full bg-base-100 shadow-xl image-full">
              <figure>
                <img src="https://picsum.photos/400/225" alt="Shoes" />
              </figure>
              <div className="card-body">
                <div>
                  <h6 className="text-6xl text-center align-middle">More +</h6>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div key={o} className="max-h-fit h-64 hover:cursor-pointer">
            <div className="card w-full bg-base-100 shadow-xl image-full">
              <figure>
                <img src="https://picsum.photos/400/225" alt="Shoes" />
              </figure>
              <div className="card-body">
                <div className="flex gap-2">
                  <div className="avatar">
                    <div className="w-24 rounded ring ring-success ring-offset-base-100 ring-offset-2">
                      <img src="https://picsum.photos/200/100" />
                    </div>
                  </div>
                  <div>
                    <h2 className="card-title text-slate-100">
                      Kaustav Bhattacharya
                    </h2>
                    <p className="text-slate-100">(+91)........64</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
  };

  const images = () => {
    if (item.images.length) {
      return item.images.map((o) => {
        return {
          original: `https://picsum.photos/id/${o.original}`,
          thumbnail: `https://picsum.photos/id/${o.thumbnail}`,
          originalClass: 'rounded-lg',
        };
      });
    } else {
      return [
        {
          original: `https://picsum.photos/id/100/1000/600`,
          thumbnail: `https://picsum.photos/id/100/250/150/`,
          originalClass: 'rounded-lg',
        },
      ];
    }
  };

  return (
    <div className="grid grid-cols-4 gap-1 p-4 h-full overflow-auto">
      <div className="max-h-fit col-span-2">
        <ImageGallery items={images()} showPlayButton={false} />
      </div>
      <div className="max-h-fit h-full col-span-2">
        <div className="flex flex-col px-2 gap-2">
          <div className="flex justify-between">
            <div className="text-4xl text-white text-left underline decoration-1 underline-offset-2 font-sans">
              {item.title || ''}
            </div>
            <KebabMenu>
              <>
                <li>
                  <a>
                    <FontAwesomeIcon icon={faFilePen} width="20" height="20" />{' '}
                    Edit Item
                  </a>
                </li>
                <li>
                  <a>
                    <FontAwesomeIcon icon={faTrashCan} width="20" height="20" />{' '}
                    Delete Item
                  </a>
                </li>
                <li>
                  <a>
                    <FontAwesomeIcon
                      icon={faBoxesPacking}
                      width="20"
                      height="20"
                    />{' '}
                    Archive Item
                  </a>
                </li>
              </>
            </KebabMenu>
          </div>

          <div className="text-sm text-slate-300 text-left font-sans">
            {item.shortDescription || ''}
          </div>
          <div className="flex flex-wrap gap-1">
            {item.tags
              ? item.tags.map((element) => (
                  <div
                    key={item.id + element}
                    className={`flex badge badge-${getRandomColor()} text-black`}
                  >
                    {element}
                  </div>
                ))
              : ''}
          </div>
          <div className="text-lg text-slate-100 text-left font-sans">
            {item.description || ''}
          </div>
        </div>
      </div>
      <div className="col-span-4">
        <div className="grid grid-cols-4 gap-2">{getShortBids()}</div>
      </div>
    </div>
  );
};

Item.getLayout = function getLayout(page: ReactElement) {
  return <Main>{page}</Main>;
};

export default Item;
