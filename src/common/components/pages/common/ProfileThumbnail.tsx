import { signOutUser } from '@store/actions/auth';
import { NextPage } from 'next';
import { connect } from 'react-redux';

const ProfileThumbnail: NextPage = (props: any) => {
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
          <a onClick={() => props.signOutUser()}>Logout</a>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = {
  signOutUser,
};

export default connect(undefined, mapDispatchToProps)(ProfileThumbnail);
