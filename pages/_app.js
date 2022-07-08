// bootstrap
import { SSRProvider } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// css
import "../assets/css/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
