import { signIn } from '@store/actions/auth';
import { NextPage } from 'next';
import { useState } from 'react';
import { connect } from 'react-redux';

const SignIn: NextPage = ({ signIn }: any) => {
  const [user, setUser] = useState({ email: '', username: '', password: '' });

  const updateUser = (e: any) => {
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button
              className="btn btn-primary"
              onClick={() => {
                signIn(user);
              }}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  signIn,
};

export default connect(undefined, mapDispatchToProps)(SignIn);
