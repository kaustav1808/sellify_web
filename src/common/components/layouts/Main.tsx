import { NextPage } from 'next';
import Navbar from '../pages/common/Navbar';
import { setAuthUser } from '@store/actions/auth';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main: NextPage = ({ user, setAuthUser, children }: any) => {
  useEffect(() => {
    setAuthUser();
  }, []);

  return (
    <div>
      <Navbar />
      <ToastContainer
        position="bottom-right"
        theme="dark"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {children}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { user: state.user };
};

const mapDispatchToProps = {
  setAuthUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
