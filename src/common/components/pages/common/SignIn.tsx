import { NextPage } from 'next';
import Modal from '../../ui/Modal';

type SignIn = {
  value: Boolean;
  reset: Function;
};

const SignIn: NextPage = (props: SignIn) => {
  return (
    <Modal show={props.value} resetModal={() => props.reset()}>
      <div className="flex hero min-h-auto max-w-auto bg-base-200">
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
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
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
                    console.log('hi! all');
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign In!</h1>
        </div>
      </div>
    </Modal>
  );
};

export default SignIn;
