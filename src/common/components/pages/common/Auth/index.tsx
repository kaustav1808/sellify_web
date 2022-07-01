import Modal from '@components/ui/Modal';
import { NextPage } from 'next';
import { Props, ScriptProps } from 'next/script';
import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

type AuthType = ScriptProps & { show: Boolean; reset: Function };

const Auth: NextPage<AuthType> = ({ show = false, reset }) => {
  const [toggleAction, setToggleAction] = useState('signin');

  return (
    <Modal show={show} resetModal={() => reset(false)}>
      <div className="flex hero min-h-auto max-w-auto bg-base-200">
        {toggleAction == 'signin' ? <SignIn /> : <SignUp />}
        <div className="flex flex-col gap-2 text-center lg:text-left">
          <h1 className="text-4xl font-bold">
            {toggleAction == 'signin' ? 'Sign In' : 'Sign Up'}
          </h1>
          {toggleAction == 'signin' ? (
            <a
              className="text-sm text-cyan-500 hover:text-blue-800 cursor-pointer"
              onClick={() => setToggleAction('signup')}
            >
              Don't have a account!
            </a>
          ) : (
            <a
              className="text-sm text-cyan-500 hover:text-blue-800 cursor-pointer"
              onClick={() => setToggleAction('signin')}
            >
              Already have an account!
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Auth;
