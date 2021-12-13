import { Header } from "../components/Header";
import { LoginHeader } from "../components/LoginHeader";
import { Footer } from "../components/Footer";

import "bootstrap/dist/css/bootstrap.css";

import "../styles/globals.css";
import "../styles/Header.css";
import "../styles/LoginHeader.css";
import "../styles/logo.css";
import "../styles/footer.css";
import "../styles/home.css";
import "../styles/input.css";
import "../styles/auth.css";
import "../styles/loginregister.css";
import "../styles/loginform.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <LoginHeader />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
