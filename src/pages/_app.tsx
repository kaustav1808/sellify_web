import '@styles/globals.css';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { wrapper } from '../redux/store';
import { makeServer } from '../mocks/mirage';

if (process.env.NEXT_PUBLIC_DEMO_ENV === 'true') {
  console.log("Starting Mocking server...!!!")
  makeServer();
}


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const Myapp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default wrapper.withRedux(Myapp);
