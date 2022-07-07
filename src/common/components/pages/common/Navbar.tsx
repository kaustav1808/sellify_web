import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Auth from './Auth';
import ProfileThumbnail from './ProfileThumbnail';
import Image from 'next/image';

const signIn = (handler: Function) => {
  return (
    <button className="btn btn-active" onClick={() => handler(true)}>
      {' '}
      SignIn/SignUp{' '}
    </button>
  );
};

const Navbar: NextPage = ({ user }: any) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [showSignInModal, setSignInModal] = useState(false);

  useEffect(() => {
    if (
      user &&
      Object.keys(user).length !== 0 &&
      Object.getPrototypeOf(user) === Object.prototype
    ) {
      setAuthenticated(true);
      setSignInModal(false);
    } else {
      setAuthenticated(false);
    }
  }, [user]);

  return (
    <div className="navbar bg-base-100">
      <>
        <div className="flex-1">
          <Image width={150} height={50} src="/logo.png" alt="No Image" />
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          {authenticated ? <ProfileThumbnail /> : signIn(setSignInModal)}
        </div>
        <Auth show={showSignInModal} reset={setSignInModal} />
      </>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Navbar);
