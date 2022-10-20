import '../styles/globals.css';
import type { AppType } from 'next/dist/shared/lib/utils';
import { Navigation } from '../Layout/Navigation';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Navigation>
      <Component {...pageProps} />
    </Navigation>
  );
};

export default MyApp;
