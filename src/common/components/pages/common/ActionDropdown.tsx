import { signOutUser } from '@store/actions/auth';
import { NextPage } from 'next';
import { connect } from 'react-redux';
import Link from 'next/link';

const ActionDropdown: NextPage = ({ user }: any) => {
  return (
    <div className="dropdown dropdown-left p-1">
      <label tabIndex={0} className="btn btn-active btn-ghost">
        Hi! {user.username}
      </label>

      <ul
        tabIndex={0}
        className="dropdown-content menu mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a>
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>{' '}
            Manage My Bids
          </a>
        </li>

        <li>
          <Link href="/create-item">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
              </svg>
              Create an Item
            </a>
          </Link>
        </li>

        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
            My items
          </a>
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
