import "../styles/globals.css";
import { useEffect } from "react";

import { ThemeProvider } from "../context/ThemeProvider";
import { MenuProvider } from "../context/MenuProvider";

import { appWithTranslation } from "next-i18next";

import { SnackbarProvider } from "notistack";

import { ReactLenis } from "@studio-freight/react-lenis";

import { Epilogue } from "@next/font/google";

const epilogue = Epilogue({ subsets: ["latin"] });

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SnackbarProvider
      maxSnack={3}
      preventDuplicate
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <MenuProvider>
        <ThemeProvider>
          <style jsx global>{`
            * {
              font-family: ${epilogue.style.fontFamily};
            }
          `}</style>
          <ReactLenis root>
            <Component {...pageProps} />
          </ReactLenis>
        </ThemeProvider>
      </MenuProvider>
    </SnackbarProvider>
  );
};

export default appWithTranslation(App);
