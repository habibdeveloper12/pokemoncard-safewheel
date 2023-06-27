import React from "react";
import "./../src/styles/globals.css";
import { AppProps } from "next/app";
import { ReduxProvider } from "../src/redux/provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ReduxProvider>
        <Component {...pageProps} />
      </ReduxProvider>
    </>
  );
}
