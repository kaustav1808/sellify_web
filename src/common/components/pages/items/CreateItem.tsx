import Modal from '@components/ui/Modal';
import { NextPage } from 'next';
import { ScriptProps } from 'next/script';

type ItemModalType = ScriptProps & { show: Boolean; reset: Function };

const CreateItem: NextPage<ItemModalType> = ({ show = false, reset }) => {
  let resetItem = (set: boolean = true) => {
    reset(set);
    console.log('I am clicked');
  };

  return (
    <Modal show={show} resetModal={() => resetItem(false)} width="2xl">
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
          <select className="select select-bordered">
            <option disabled selected>
              Pick one
            </option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </select>
        </div>

        <div className="form-control w-full max-w-2xl">
          <label className="label">
            <span className="label-text text-lg">Sell Type</span>
          </label>
          <select className="select select-bordered">
            <option>Pick one</option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
          </select>
        </div>

        <div className="flex justify-between gap-8">
          <button className="btn btn-error">Cancel</button>
          <button className="btn btn-success">Success</button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateItem;
