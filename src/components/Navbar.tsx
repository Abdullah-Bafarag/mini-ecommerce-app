import { Button } from "react-aria-components";
import logo from "../assets/logo.png";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/hooks/useLanguage";
import type { Language } from "@/locales/translations";

interface NavbarProps {
    setLanguage?: (lang: Language) => void;
    language?: Language;
}

export default function Navbar({ setLanguage: propSetLanguage, language: propLanguage }: NavbarProps = {}) {
    const context = useLanguage();
    const currentLanguage = propLanguage ?? context.language;
    const changeLanguage = propSetLanguage ?? context.setLanguage;
    const { t } = context;

    return (
        <div className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md py-4 px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center justify-between w-full sm:w-auto">
                    <img src={logo} alt="Logo" width={130} />
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:max-w-md mx-auto">
                    <Input placeholder={t("searchPlaceholder")} className="w-full" />
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto sm:justify-end justify-center">
                    <Button
                        onClick={() => changeLanguage(currentLanguage === "ar" ? "en" : "ar")}
                        className="px-4 py-2 text-sm font-medium border rounded-lg bg-[#0D9488] text-white hover:bg-[#29A195] transition-all duration-200 cursor-pointer">
                        {currentLanguage === "ar" ? "English" : "العربية"}
                    </Button>
                </div>
            </div>
        </div>
    );
}