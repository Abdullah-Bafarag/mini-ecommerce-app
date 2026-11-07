import { useState } from "react";
import { Button } from "./ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import type { TranslationKey } from "@/locales/translations";

const categoriesList: { id: number; key: TranslationKey }[] = [
    { id: 0, key: "allProducts" },
    { id: 1, key: "electronicsGadgets" },
    { id: 2, key: "fashionApparel" },
    { id: 3, key: "beautyPersonalCare" },
    { id: 4, key: "homeKitchen" },
    { id: 5, key: "healthFitness" },
];

type Tab = (typeof categoriesList)[number]["id"];

type CategorySelectorProps = {
    setCategorySelector: (categorySelector: number) => void;
};

function CategoryBar({ setCategorySelector }: CategorySelectorProps) {
    const [activeTab, setActiveTab] = useState<Tab>(0);
    const { t } = useLanguage();

    const handleCategory = (id: number) => {
        setActiveTab(id);
        setCategorySelector(id);
    };
    
    return (
        <div className="w-full overflow-x-auto py-2">
            <div className="flex items-center gap-3 sm:gap-4 min-w-max px-2">
                {categoriesList.map((category) => (
                    <div key={category.id} className="shrink-0">
                        <Button 
                            variant="outline"
                            onClick={() => handleCategory(category.id)}
                            className={`min-w-35 sm:min-w-40 rounded-full hover:bg-[#E7F2FF] text-sm cursor-pointer ${
                                activeTab === category.id 
                                    ? "bg-[#0D9488] text-white hover:bg-[#0D9488] hover:text-white" 
                                    : ""
                            }`}
                        >
                            {t(category.key)}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryBar;