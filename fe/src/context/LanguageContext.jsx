import { createContext, useContext, useEffect, useState } from "react";
import languages from "../i18n";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") || "vi";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const value = {
    lang,
    setLang,
    t: languages[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// custom hook cho gọn
export const useLanguage = () => {
  return useContext(LanguageContext);
};
