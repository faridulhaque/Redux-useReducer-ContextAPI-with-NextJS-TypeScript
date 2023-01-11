import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store/store";
import useGlobalData from "../hooks/useGlobalData";
import { createContext } from "react";
export const GlobalContext = createContext<any>({} as any);

export default function App({ Component, pageProps }: AppProps) {
  const globalData = useGlobalData();

  
  return (
    <Provider store={store}>
      <GlobalContext.Provider value={globalData}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </Provider>
  );
}
