import Modal from '@components/ui/Modal';
import SelectBox from '@components/ui/SelectBox';
import { NextPage } from 'next';
import { ScriptProps } from 'next/script';
import { useState } from 'react';
import { CreateItemType, DefaultCreateItem } from '@customtypes/ui/common';
import client from 'src/api/client';
import { toast } from 'react-toastify';

type ItemModalType = ScriptProps & { show: Boolean; reset: Function };

const CreateItem: NextPage<ItemModalType> = ({ show = false, reset }) => {
  const [state, setState] = useState<CreateItemType>(DefaultCreateItem);

  const updateState = (obj: any) => {
    let curr = state;
    setState({ ...curr, ...obj });
  };

  let resetItem = (set: boolean = true) => {
    updateState(DefaultCreateItem);
    reset(set);
  };

  let selectedItem = (val: Array<number | string>, key: string) => {
    const value = key === 'tags' ? val : val.length ? val[0] : null;
    let params = { [key]: value };

    if (key === 'sellType') {
      params['priceMin'] = 0;
      params['priceMax'] = 0;
    }

    updateState(params);
  };

  let saveItem = async () => {
    try {
      await client.post('/items', state);
      toast.success('Item created Successfully');
      resetItem(false);
    } catch (e) {
      console.log(e);
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
          value={state.priceMax}
          placeholder="ex: 100"
          className="input input-bordered input-md w-full max-w-2xl"
          onChange={(e) => updateState({ priceMax: e.target.value })}
        />
      </div>
    );
    return (
      <div className="flex max-w-2xl gap-2">
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text text-lg">Min Price</span>
          </label>
          <input
            type="text"
            value={state.priceMin}
            placeholder="ex: 100"
            className="input input-bordered input-md w-full max-w-2xl"
            onChange={(e) => updateState({ priceMin: e.target.value })}
          />
        </div>
        {state.sellType === 'range' ? priceMax : ''}
      </div>
    );
  };

  return (
    <Modal show={show} resetModal={() => resetItem(false)} width="2xl">
      <>
        <label className="text-2xl">Create an Item</label>
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
            <SelectBox
              options={[
                { id: 1, name: 'book', label: 'Book' },
                { id: 2, name: 'wooden chair', label: 'Wooden Chair' },
                { id: 3, name: 'macbook', label: 'Macbook' },
              ]}
              value="id"
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
            <SelectBox
              options={[
                { id: 1, name: 'fixed', label: 'Fixed Price' },
                { id: 2, name: 'range', label: 'Price range' },
                { id: 3, name: 'auction', label: 'Auction' },
              ]}
              onInputChange={(val: Array<number | string>) =>
                selectedItem(val, 'sellType')
              }
            />
          </div>

          {state.sellType ? priceSection() : ''}

          <div className="flex justify-between gap-8">
            <button className="btn btn-error" onClick={() => resetItem(false)}>
              CANCEL
            </button>
            <button className="btn btn-success" onClick={saveItem}>
              SAVE
            </button>
          </div>
        </div>
      </>
    </Modal>
  );
};

export default CreateItem;
