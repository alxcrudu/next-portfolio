import React from "react";
import { useRouter } from "next/router";

import en from "../public/locales/en";
import ro from "../public/locales/ro";

export const LanguageContext = React.createContext();

export function LanguageProvider({ children }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'ro' ? ro : en;

  function setLanguage(e){
    const locale = e.target.value; // this works for option form
    // const locale = e;
    router.push("/", "/", { locale });
  };

  return (
    <LanguageContext.Provider value={{ setLanguage, t, locale }}>
      {children}
    </LanguageContext.Provider>
  );
}
