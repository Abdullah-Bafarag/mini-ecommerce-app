import { Button } from "./ui/button";
import { useLanguage } from "@/hooks/useLanguage";

interface ElevationButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

export default function ElevationButton({ children, onClick }: ElevationButtonProps) {
    const { language } = useLanguage();
    const isRtl = language === "ar";

    return (
        <Button
            onClick={onClick}
            className={`bg-[#0D9488] text-white fixed bottom-6 z-50 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#29A195] hover:scale-[1.03] rounded-full h-15 px-8 py-7 ${
                isRtl ? "left-4" : "right-4"
            }`}>
            {children}
        </Button>
    );
}