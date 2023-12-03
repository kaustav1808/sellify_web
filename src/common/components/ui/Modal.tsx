import { ModalType } from '@customtypes/ui/Common';
import { NextPage } from 'next';

const Modal: NextPage<ModalType> = (props: ModalType) => {
  return (
    <div className={`modal  ${props.show ? 'modal-open' : ''}`}>
      <div
        className={`modal-box w-10/12 bg-base-200 max-w-${props.width || 'xl'}`}
      >
        <label
          htmlFor="my-modal-3"
          onClick={() => {
            props.resetModal(false);
          }}
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </label>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
