import type { NextPage } from 'next';
import { ReactElement, useState } from 'react';
import SignIn from './SignIn';

const profile: ReactElement = (handler: Function) => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=33791" />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a onClick={() => handler(false)}>Logout</a>
        </li>
      </ul>
    </div>
  );
};

const signIn: ReactElement = (handler: Function) => {
  return (
    <button className="btn btn-active" onClick={() => handler(true)}>
      {' '}
      SignIn/SignUp{' '}
    </button>
  );
};

const signInModal: ReactElement = (
  show: Boolean,
  handler: Function,
  handler2: Function,
) => {
  return (
    <div className={`modal  ${show ? 'modal-open' : ''}`}>
      <div className="modal-box w-10/12 bg-base-200">
        <label
          htmlFor="my-modal-3"
          onClick={() => {
            handler(false);
          }}
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </label>
        
      </div>
    </div>
  );
};

const Navbar: NextPage = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [showSignInModal, setSignInModal] = useState(false);
  return (
    <div className="navbar bg-base-100">
      <>
        <div className="flex-1">
          <a className="normal-case text-xl">BuyNSell</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          {authenticated ? profile(setAuthenticated) : signIn(setSignInModal)}
        </div>
        <SignIn value={showSignInModal} reset={setSignInModal} />
      </>
    </div>
  );
};

export default Navbar;
