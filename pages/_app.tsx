import "antd/dist/antd.css";
import axios from "axios";
import { SWRConfig } from "swr";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 0,
        fetcher: (url: string) => axios(url).then((r) => r.data),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
