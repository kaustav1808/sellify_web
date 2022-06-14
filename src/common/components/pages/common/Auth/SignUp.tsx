import { NextPage } from 'next';
import { connect } from 'react-redux';
import { signUp } from '@store/actions/auth';
import { useState } from 'react';

const SignUp: NextPage = (props: any) => {
  const [user, setUser] = useState({ email: '', username: '', password: '' });

  const updateUser = (e) => {
    let key = e.target.id;
    setUser({ ...user, [key]: e.target.value });
  };

  return (
    <div className="hero-content">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              id="email"
              value={user.email}
              onChange={updateUser}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              id="username"
              placeholder="username"
              value={user.username}
              onChange={updateUser}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="password"
              value={user.password}
              onChange={updateUser}
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button
              className="btn btn-primary"
              onClick={() => {
                props.signUp(user);
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { user: state.user };
};

const mapDispatchToProps = {
  signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
