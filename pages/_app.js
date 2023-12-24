import "../styles/globals.css";
import { useEffect } from "react";

import { ThemeProvider } from "../context/ThemeProvider";
import { MenuProvider } from "../context/MenuProvider";
import { LanguageProvider } from "../context/LanguageContext";

import { SnackbarProvider } from "notistack";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

import { Epilogue } from "@next/font/google";

const epilogue = Epilogue({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const lenis = useLenis();
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
      <LanguageProvider>
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
      </LanguageProvider>
    </SnackbarProvider>
  );
}
