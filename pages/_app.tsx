import { FlagsmithProvider } from 'flagsmith/react';
import flagsmith from 'flagsmith/isomorphic';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { IState } from 'flagsmith/types';

type ExtendedAppProps = AppProps & {
  flagsmithState?: IState<string, string>
}

function MyApp({ Component, pageProps, flagsmithState }: ExtendedAppProps) {
  return (
    <FlagsmithProvider flagsmith={flagsmith} serverState={flagsmithState}>
      <Component {...pageProps} />
    </FlagsmithProvider>
  );
}

MyApp.getInitialProps = async () => {
  await flagsmith.init({
    environmentID: 'ID',
  });

  return { flagsmithState: flagsmith.getState() };
};

export default MyApp;
