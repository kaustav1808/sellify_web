import Modal from '@components/ui/Modal';
import SelectBox from '@components/ui/SelectBox';
import { NextPage } from 'next';
import { ScriptProps } from 'next/script';

type ItemModalType = ScriptProps & { show: Boolean; reset: Function };

const CreateItem: NextPage<ItemModalType> = ({ show = false, reset }) => {
  let resetItem = (set: boolean = true) => {
    reset(set);
    console.log('I am clicked');
  };

  let selectedItem = (val: string | string[] | number | number[]) => {
    console.log(val);
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
              className="input input-bordered input-md w-full max-w-2xl"
            />
          </div>

          <div className="form-control w-full max-w-2xl">
            <label className="label">
              <span className="label-text text-lg">Short Description</span>
            </label>
            <input
              type="text"
              placeholder="ex: Wooden chair"
              className="input input-bordered input-md w-full max-w-2xl"
            />
          </div>

          <div className="form-control w-full max-w-2xl">
            <label className="label">
              <span className="label-text text-lg">Description</span>
            </label>
            <textarea
              placeholder="ex: Wooden chair"
              className="input input-bordered input-md w-full max-w-2xl h-20"
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
              onInputChange={selectedItem}
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
              onInputChange={selectedItem}
            />
          </div>

          <div className="flex justify-between gap-8">
            <button className="btn btn-error">CANCEL</button>
            <button className="btn btn-success">SAVE</button>
          </div>
        </div>
      </>
    </Modal>
  );
};

export default CreateItem;
