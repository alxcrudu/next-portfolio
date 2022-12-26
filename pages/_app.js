import "../styles/globals.css";
import { ThemeProvider } from "../context/ThemeProvider";
import { MenuProvider } from "../context/MenuProvider";
import { LanguageProvider } from "../context/LanguageContext";

import { Epilogue } from "@next/font/google";

const epilogue = Epilogue({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <MenuProvider>
        <ThemeProvider>
          <style jsx global>{`
            * {
              font-family: ${epilogue.style.fontFamily};
            }
            html {
              scroll-behavior: smooth;
            }
          `}</style>
          <Component {...pageProps} />
        </ThemeProvider>
      </MenuProvider>
    </LanguageProvider>
  );
}
