import Main from '@components/layouts/Main';
import KebabMenu from '@components/ui/KebabMenu';
import { Item, DefaultItem } from '@customtypes/business/Item';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import client from 'src/api/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { checkValidItemUser, getRandomColor } from 'src/services/helpers';
import {
  faFilePen,
  faBoxesPacking,
  faBoxArchive,
} from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import ItemOperation from '@components/pages/items/ItemOperation';
import { connect } from 'react-redux';
import DialogBox from '@components/ui/DialogBox';
import { toast } from 'react-toastify';
import { ResponseCode } from 'src/constants/ResponseCode';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Item: NextPageWithLayout = ({ user }: any) => {
  const [item, setItem] = useState<Item>(DefaultItem);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [showArchive, setArchive] = useState<boolean>(false);
  const [editItem, setEditItem] = useState(false);
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
        .catch((e) => {
          if (e.response.data.code === ResponseCode.SLFY_INVALID_ITEM) {
            toast.error(e.response.data.message);
            router.replace('/');
          }
        });
    }

    return () => {
      document.title = 'Sellify';
    };
  }, [router.query]);

  const deleteItem = () => {
    client
      .del(`/items/${item.id}`)
      .then(() => {
        toast.success(`Item ${item.title} successfully deleted`);
        setShowDelete(false);
        router.replace('/');
      })
      .catch((e: any) => toast.error(e.response.data.message));
  };

  const archiveItem = () => {
    client
      .get(`/items/set-archive/${item.id}`)
      .then(() => {
        toast.success(`Item ${item.title} successfully archived`);
        setArchive(false);
      })
      .catch((e: any) => toast.error(e.response.data.message));
  };

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
    <>
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
              {item.isArchive ? (
                <div
                  className={`flex gap-2 p-2 rounded items-center bg-[#f59e0b] text-black`}
                >
                  <FontAwesomeIcon icon={faBoxArchive} width="20" height="20" />
                  Archived
                </div>
              ) : (
                ''
              )}
              {checkValidItemUser(user, item) ? (
                <KebabMenu>
                  <>
                    <li onClick={() => setEditItem(true)}>
                      <a>
                        <FontAwesomeIcon
                          icon={faFilePen}
                          width="20"
                          height="20"
                        />{' '}
                        Edit Item
                      </a>
                    </li>
                    <li>
                      <a onClick={() => setShowDelete(true)}>
                        <FontAwesomeIcon
                          icon={faTrashCan}
                          width="20"
                          height="20"
                        />{' '}
                        Delete Item
                      </a>
                    </li>
                    <li onClick={() => setArchive(true)}>
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
              ) : (
                ''
              )}
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

      <ItemOperation
        show={editItem}
        reset={setEditItem}
        item={item}
        onUpdate={(item: Item) => setItem(item)}
      />

      <DialogBox
        show={showDelete}
        message={`Are you sure to remove the item "${item.title}" ?`}
        header={`Removing item ${item.title}`}
        onSuccess={() => deleteItem()}
        onFailure={() => setShowDelete(false)}
      />

      <DialogBox
        show={showArchive}
        message={`Are you sure to archive the item "${item.title}" ?`}
        header={`Archiving item ${item.title}`}
        onSuccess={() => archiveItem()}
        onFailure={() => setArchive(false)}
      />
    </>
  );
};

Item.getLayout = function getLayout(page: ReactElement) {
  return <Main>{page}</Main>;
};

const mapStateToProps = (state: any) => ({ user: state.user });

export default connect(mapStateToProps)(Item);
