import { Header } from "../components/Header";
import { LoginHeader } from "../components/LoginHeader";
import "bootstrap/dist/css/bootstrap.css";

import "../styles/globals.css";
import "../styles/Header.css";
import "../styles/LoginHeader.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <LoginHeader />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
