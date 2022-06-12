import '@styles/globals.css';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import {wrapper} from '../redux/store'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const Myapp = ({ Component, pageProps }: AppPropsWithLayout) => {
// Use the layout defined at the page level, if available
const getLayout = Component.getLayout ?? ((page) => page);

return getLayout(<Component {...pageProps} />);
}

export default wrapper.withRedux(Myapp)
