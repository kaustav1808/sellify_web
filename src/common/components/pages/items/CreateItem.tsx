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
    <Modal show={show} resetModal={() => resetItem(false)}>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">What is your name?</span>
          <span className="label-text-alt">Alt label</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text-alt">Alt label</span>
          <span className="label-text-alt">Alt label</span>
        </label>
      </div>
    </Modal>
  );
};

export default CreateItem;
