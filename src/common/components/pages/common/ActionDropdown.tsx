import { signOutUser } from '@store/actions/auth';
import { NextPage } from 'next';
import { connect } from 'react-redux';const ActionDropdown: NextPage = ({ user }: any) => {
  return (
    <div className="dropdown dropdown-left p-1">
        <label tabIndex={0} className='btn btn-active btn-ghost'>
        Hi! {user.username}
      </label>

      <ul
        tabIndex={0}
        className="dropdown-content menu mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li className="menu-title">
          <span>Category</span>
        </li>
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
        <li className="menu-title">
          <span>Category</span>
        </li>
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>


  );
};

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  signOutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionDropdown);
