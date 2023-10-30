import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Auth from './Auth';
import ProfileThumbnail from './ProfileThumbnail';
import Image from 'next/image';
import Link from 'next/link';

const signIn = (handler: Function) => {
  return (
    <button className="btn btn-active" onClick={() => handler(true)}>
      SignIn/SignUp
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
    <div className="navbar bg-base-100 h-[5%]">
      <div className="flex w-full gap-8">
        <div className="w-1/5">
          <Link href="/">
            <a>
              <Image width={60} height={60} src="/logo_icon_sm.png" alt="No Image" />
            </a>
          </Link>
        </div>

        <div className="w-3/5 text-center text-2xl text-amber-200">
          {authenticated ? `Hi! ${user.username}` : `Welcome to sellify`}
        </div>

        <div className="flex w-1/5 content-around justify-end  gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <div>
            {authenticated ? <ProfileThumbnail /> : signIn(setSignInModal)}
          </div>
        </div>
      </div>
      <Auth show={showSignInModal} reset={setSignInModal} />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Navbar);
