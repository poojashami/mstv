import "../styles/bootstrap.min.css";
import "../styles/animate.css";
import "../styles/boxicons.min.css";
import "../styles/flaticon.css";
import "react-toastify/dist/ReactToastify.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Style
import "../styles/style.css";
import "../styles/responsive.css";

import { Provider } from "react-redux";
import Layout from "../components/_App/Layout";
import { useStore } from "../store/reducers/reducers";

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
};

export default MyApp;
