import Modal from '@components/ui/Modal';
import SelectBoxRevamp from '@components/ui/SelectBoxRevamp';
import { NextPage } from 'next';
import { ScriptProps } from 'next/script';
import { useEffect, useState } from 'react';
import { DefaultItem, Item } from '@customtypes/business/Item';
import client from 'src/api/client';
import { toast } from 'react-toastify';
import { ItemConstants } from 'src/constants/ItemConstants';
import { ResponseCode } from 'src/constants/ResponseCode';

type ItemModalType = ScriptProps & {
  show: Boolean;
  reset: Function;
  item?: null | Item;
  onUpdate?: Function;
};

const ItemOperation: NextPage<ItemModalType> = ({
  show = false,
  reset,
  item,
  onUpdate,
}) => {
  const [state, setState] = useState<Item>(DefaultItem);

  useEffect(() => {
    if (item) {
      setState(item);
    }
  }, [item]);

  const updateState = (obj: any) => {
    let curr = state;
    setState({ ...curr, ...obj });
  };

  let resetItem = (set: boolean = true) => {
    updateState(item || DefaultItem);
    reset(set);
  };

  let selectedItem = (val: Array<number | string>, key: string) => {
    const value = key === 'tags' ? val : val.length ? val[0] : null;
    let params = { [key]: value };

    if (key === 'sellType') {
      params['minPrice'] = 0;
      params['maxPrice'] = 0;
      params['priceOffset'] = 0;
    }

    updateState(params);
  };

  let saveItem = async () => {
    try {
      let params: any = {};

      params['title'] = state.title;
      params['description'] = state.description;
      params['shortDescription'] = state.shortDescription;
      params['minPrice'] = state.minPrice;
      params['maxPrice'] = state.maxPrice;
      params['sellType'] = state.sellType;
      if (state.sellType === ItemConstants.AUCTION)
        params['priceOffset'] = state.priceOffset;
      params['tags'] = state.tags;

      await client.post('/items', params);
      toast.success('Item created Successfully');
      resetItem(false);
    } catch (e:any) {
      if (e.response.data.code === ResponseCode.SLFY_VALIDATION_ERROR) {
        e.response.data.errors.forEach((element: { message: string }) => {
          toast.error(element.message);
        });
      } else {
        toast.error(e.response.data.message);
      }
    }
  };

  let updateItem = async () => {
    try {
      let params: any = {};

      params['title'] = state.title;
      params['description'] = state.description;
      params['shortDescription'] = state.shortDescription;
      params['minPrice'] = state.minPrice;
      params['maxPrice'] = state.maxPrice;
      params['sellType'] = state.sellType;
      if (state.sellType === ItemConstants.AUCTION)
        params['priceOffset'] = state.priceOffset;
      params['tags'] = state.tags;

      const res = await client.put('/items/'.concat(state.id || ''), params);
      toast.success('Item updated Successfully');
      console.log(res);
      if (onUpdate) {
        onUpdate(res.data);
      }

      resetItem(false);
    } catch (e: any) {
      if (e.response.data.code === ResponseCode.SLFY_VALIDATION_ERROR) {
        e.response.data.errors.forEach((element: { message: string }) => {
          toast.error(element.message);
        });
      } else {
        toast.error(e.response.data.message);
      }
    }
  };

  let priceSection = () => {
    let priceMax = (
      <div className="form-control w-1/2">
        <label className="label">
          <span className="label-text text-lg">Max Price</span>
        </label>
        <input
          type="text"
          value={state.maxPrice}
          placeholder="ex: 100"
          className="input input-bordered input-md w-full max-w-2xl"
          onChange={(e) => updateState({ maxPrice: e.target.value })}
        />
      </div>
    );
    let priceAuction = (
      <div className="form-control w-1/2">
        <label className="label">
          <span className="label-text text-lg">Minimum bid</span>
        </label>
        <input
          type="text"
          value={state.priceOffset}
          placeholder="ex: 100"
          className="input input-bordered input-md w-full max-w-2xl"
          onChange={(e) => updateState({ priceOffset: e.target.value })}
        />
      </div>
    );
    return (
      <div className="flex max-w-2xl gap-2">
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text text-lg">
              {state.sellType === ItemConstants.RANGE
                ? 'Minimum Price'
                : 'Base Price'}
            </span>
          </label>
          <input
            type="text"
            value={state.minPrice}
            placeholder="ex: 100"
            className="input input-bordered input-md w-full max-w-2xl"
            onChange={(e) => updateState({ minPrice: e.target.value })}
          />
        </div>
        {state.sellType === ItemConstants.RANGE ? priceMax : priceAuction}
      </div>
    );
  };

  return (
    <Modal show={show} resetModal={() => resetItem(false)} width="2xl">
      <>
        <label className="text-2xl">
          {item && item?.id ? 'Update '.concat(item.title) : 'Create an Item'}
        </label>
        <div className="divider"></div>

        <div className="flex flex-col gap-2">
          <div className="form-control w-full max-w-2xl">
            <label className="label">
              <span className="label-text text-lg">Title</span>
            </label>
            <input
              type="text"
              placeholder="ex: Wooden chair"
              value={state.title}
              className="input input-bordered input-md w-full max-w-2xl"
              onChange={(e) => updateState({ title: e.target.value })}
            />
          </div>

          <div className="form-control w-full max-w-2xl">
            <label className="label">
              <span className="label-text text-lg">Short Description</span>
            </label>
            <input
              type="text"
              value={state.shortDescription}
              placeholder="ex: Wooden chair"
              className="input input-bordered input-md w-full max-w-2xl"
              onChange={(e) =>
                updateState({ shortDescription: e.target.value })
              }
            />
          </div>

          <div className="form-control w-full max-w-2xl">
            <label className="label">
              <span className="label-text text-lg">Description</span>
            </label>
            <textarea
              placeholder="ex: Wooden chair"
              value={state.description}
              className="input input-bordered input-md w-full max-w-2xl h-20"
              onChange={(e) => updateState({ description: e.target.value })}
            ></textarea>
          </div>

          <div className="form-control w-full max-w-2xl">
            <label className="label">
              <span className="label-text text-lg">Tags</span>
            </label>
            <SelectBoxRevamp
              options={['Book', 'Wooden Chair', 'Macbook']}
              selected={state.tags}
              multiple={true}
              onInputChange={(val: Array<number | string>) =>
                selectedItem(val, 'tags')
              }
            />
          </div>

          <div className="form-control w-full max-w-2xl">
            <label className="label">
              <span className="label-text text-lg">Sell Type</span>
            </label>
            <SelectBoxRevamp
              options={[ItemConstants.RANGE, ItemConstants.AUCTION]}
              selected={state.sellType}
              onInputChange={(val: Array<number | string>) =>
                selectedItem(val, 'sellType')
              }
            />
          </div>

          {state.sellType ? priceSection() : ''}
          {state.sellType === ItemConstants.AUCTION ? (
            <p className="w-full">
              (*) Please note the auction will end in 3 days from the time of
              creation.
            </p>
          ) : (
            ''
          )}

          <div className="flex justify-between gap-8">
            <button className="btn btn-error" onClick={() => resetItem(false)}>
              CANCEL
            </button>

            {item && item.id ? (
              <button className="btn btn-primary" onClick={updateItem}>
                UPDATE
              </button>
            ) : (
              <button className="btn btn-success" onClick={saveItem}>
                SAVE
              </button>
            )}
          </div>
        </div>
      </>
    </Modal>
  );
};

export default ItemOperation;
