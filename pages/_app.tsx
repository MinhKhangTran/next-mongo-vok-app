import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Router from "next/router";
//Nprogress
import NProgress from "nprogress";
import "@/styles/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
