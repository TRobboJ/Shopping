import "../styles/globals.scss";
import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import store from "../store/store";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}
export default MyApp;
