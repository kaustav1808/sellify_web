import { NextPage } from 'next';
import Navbar from '../pages/common/Navbar';
import { setAuthUser } from '@store/actions/auth';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

const Main = ({ user, setAuthUser, children }: any) => {
  useEffect(() => {
    setAuthUser();
  },[]);

  return (
    <div className="h-full">
      <Head>
        <title>Sellify</title>
        <link
          rel="icon"
          href="https://asset.sell-ify.co.in/logo_icon.png"
          type="image/x-icon"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col h-full">
        <Navbar />
        <div className="h-[95%] bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r overflow-auto">
          {children}
        </div>
      </div>

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
