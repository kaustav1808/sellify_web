import { NextPage } from 'next';
import { ReactElement } from 'react';

type ModalType = {
  show: Boolean;
  resetModal: Function;
  children: ReactElement;
};

const Modal: NextPage = ({ show = false, resetModal, children }: ModalType) => {
  return (
    <div className={`modal  ${show ? 'modal-open' : ''}`}>
      <div className="modal-box w-10/12 bg-base-200">
        <label
          htmlFor="my-modal-3"
          onClick={() => {
            resetModal(false);
          }}
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </label>
        {children}
      </div>
    </div>
  );
};

export default Modal;
