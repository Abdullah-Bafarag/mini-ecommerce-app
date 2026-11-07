import Navbar from "../components/Navbar";
import CategoryBar from "../components/CategoryBar";
import ProductGrid from "../components/ProductGrid";
import ElevationButton from "@/components/ElevationButton";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
import { CartDrawer } from "@/components/CartDrawer";
import useProductAPI from "@/hooks/useProductAPI";
import type { ProductType } from "@/types/store";
import { useLanguage } from "@/hooks/useLanguage";


const categoryMapping: Record<number, string> = {
        1: "Electronics & Gadgets",
        2: "Fashion & Apparel",
        3: "Beauty & Personal Care",
        4: "Home & Kitchen",
        5: "Health & Fitness",
    };


export default function ShopPage() {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const { totalItems, totalPriceCents } = useCart();
    const [categorySelector, setCategorySelector] = useState<number>(0);
    const { getAllProducts } = useProductAPI();
    const [products, setProducts] = useState<ProductType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                const data = await getAllProducts();
                setProducts(data || []);
            } catch (error) {
                console.error("Failed to fetch products:", error);
                setProducts([]);
            } finally {
                setIsLoading(false); 
            }
        };

        fetchProducts();
    }, [getAllProducts]);

    const filteredProducts = products.filter((product) => {
        if (categorySelector === 0) return true;
        return product.category === categoryMapping[categorySelector];
    });

 
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col gap-4 sm:gap-6">
            <Navbar setLanguage={setLanguage} language={language} />
            <CategoryBar setCategorySelector={setCategorySelector}/>
            {isLoading ? (
                <div className="text-center py-20 text-gray-500 font-medium">
                    {t("loading")} {/* <--- إبدال النص الثابت بدالة الترجمة */}
                </div>
            ) : filteredProducts.length === 0 ? (
                <div className="text-center py-20 text-gray-500 font-medium">
                    {t("noProducts")} {/* <--- إبدال النص الثابت بدالة الترجمة */}
                </div>
            ) : (
                <ProductGrid products={filteredProducts} />
            )}
            <ElevationButton onClick={() => setIsCartOpen(true)}>
                <div className="flex items-center gap-2 font-medium relative">
                    <ShoppingBag className="w-5 h-5" />
                    <span>{t("viewCart")}</span> {/* <--- إبدال النص الثابت بدالة الترجمة */}
                    {(
                        <span className="absolute -top-2 left-1 bg-[#76E4C4] text-teal-950 text-[11px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-md">
                            {totalItems}
                        </span>
                    )}
                    {(
                        <span className="bg-[#0b7c72] text-white text-sm font-medium px-2.5 py-1 rounded-full shadow-inner">
                            ${(totalPriceCents / 100).toFixed(2)}
                        </span>
                    )}
                </div>
            </ElevationButton>

            <CartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} />
        </div>
    );
}