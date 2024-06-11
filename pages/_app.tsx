import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import { theme } from "../styles/theme";
import GlobalStyle from "../globalstyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Attack Capital</title>
          <meta name="description" content="Attack Capital" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <GlobalStyle />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
