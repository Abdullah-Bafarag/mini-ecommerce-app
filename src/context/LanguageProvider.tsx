import React, { useState, useEffect } from "react";
import { translations } from "@/locales/translations";
import { LanguageContext } from "./LanguageContext";
import type { Language } from "@/locales/translations";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("ar");

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    }, [language]);

    const t = (key: keyof typeof translations["en"]) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}