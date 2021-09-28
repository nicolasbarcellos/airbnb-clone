import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../../styles/global.css";
import NextNprogress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <NextNprogress 
        color={'#F87171'}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
    </>
  );
}

export default MyApp;
