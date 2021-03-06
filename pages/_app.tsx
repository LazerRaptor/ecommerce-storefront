import { GlobalStyle } from "../styles/global";
import { LayoutContextProvider } from "../lib/contexts";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </LayoutContextProvider>
  );
}

export default MyApp;
