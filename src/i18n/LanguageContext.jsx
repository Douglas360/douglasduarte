import { createContext, useContext, useState, useEffect } from "react";
import translations from "./translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const detectLanguage = async () => {
      try {
        // Check browser's navigator language first (fast, no API call needed)
        const browserLang = navigator.language || navigator.userLanguage || "";
        
        // Try geolocation via IP API (free, no key needed)
        const response = await fetch("https://ipapi.co/json/", {
          signal: AbortSignal.timeout(3000), // 3s timeout
        });
        
        if (response.ok) {
          const data = await response.json();
          const country = data.country_code;
          setLanguage(country === "BR" ? "pt" : "en");
        } else {
          // Fallback: use browser language
          setLanguage(browserLang.startsWith("pt") ? "pt" : "en");
        }
      } catch (error) {
        // Fallback: use browser language
        const browserLang = navigator.language || navigator.userLanguage || "";
        setLanguage(browserLang.startsWith("pt") ? "pt" : "en");
      } finally {
        setLoading(false);
      }
    };

    detectLanguage();
  }, []);

  const t = (section) => translations[language][section] || translations["en"][section];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, loading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
