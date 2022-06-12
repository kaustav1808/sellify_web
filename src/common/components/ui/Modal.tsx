import { NextPage } from 'next';

type Modal = {
  show: Boolean,
  resetModal: Function
}

const Modal: NextPage = (props: Modal) => {
  return (
    <div className={`modal  ${props.show ? 'modal-open' : ''}`}>
      <div className="modal-box w-10/12 bg-base-200">
        <label
          htmlFor="my-modal-3"
          onClick={() => {
            props.resetModal(false);
          }}
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </label>
      </div>
      {props.children}
    </div>
  );
};

export default Modal
