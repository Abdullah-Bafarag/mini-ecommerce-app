import type { ProductType } from "@/types/store";
import { ProductCard } from "./ProductCard";
import { useLanguage } from "@/hooks/useLanguage";

type ProductGridProps = {
    products: ProductType[];
};

function ProductGrid({ products }: ProductGridProps) {
    const { t } = useLanguage();

    if (products.length === 0) {
        return (
            <div className="text-center py-20 text-gray-500 font-medium">
                {t("noProducts")}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 p-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductGrid;