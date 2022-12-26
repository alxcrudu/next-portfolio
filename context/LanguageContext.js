import React, { useState } from "react";
import { useRouter } from "next/router";

import en from "../public/locales/en";
import ro from "../public/locales/ro";

export const LanguageContext = React.createContext();

export function LanguageProvider({ children }) {
  const [lan, setLan] = useState("en");
  
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'ro' ? ro : en;

  function setLanguage(e){
    setLan(e)
  }

  return (
    <LanguageContext.Provider value={{ lan, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
