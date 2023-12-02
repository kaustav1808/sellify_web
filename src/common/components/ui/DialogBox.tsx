import { DialogBoxType } from '@customtypes/ui/Common';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const DialogBox: NextPage<DialogBoxType> = ({
  show = false,
  message,
  header,
  onSuccess,
  onFailure,
}: DialogBoxType) => {
  return (
    <div className={`modal  ${show ? 'modal-open' : ''}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">{header}</h3>
        <p className="py-4">{message}</p>
        <div className="modal-action">
          <button onClick={() => onSuccess()} className="btn btn-success">
            Yes
          </button>
          <button onClick={() => onFailure()} className="btn btn-error">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
