import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/hooks/useLanguage";
import type { ProductType } from "@/types/store";
import { transformIntegerPrice } from "@/utils/utils";
import { Button } from "react-aria-components";
import { toast } from "sonner";

interface ProductCardProps {
  product: ProductType;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { t } = useLanguage();

  const handleAddToCart = (product: ProductType) => {
    addToCart(product);
    toast.success(t("itemAdded"));
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow max-w-sm sm:max-w-none flex flex-col justify-between hover:border-teal-100 cursor-pointer">
      <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover object-center h-full w-full"
        />
      </div>

      <div className="flex flex-col grow">
        <span className="text-xs text-gray-400 uppercase tracking-wider mb-1">
          {product.category}
        </span>
        <h3 className="font-semibold text-gray-800 text-base mb-2 line-clamp-1">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1 text-sm text-amber-500 mb-3">
          <span>★</span>
          <span className="font-medium text-gray-700">{product.rating.stars}</span>
          <span className="text-gray-400 text-xs">({product.rating.count})</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-50 mt-auto">
        <span className="text-lg font-bold text-gray-900">
          ${transformIntegerPrice(product.priceCents)}
        </span>
        <Button 
          className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors cursor-pointer"
          onClick={() => handleAddToCart(product)}
        >
          {t("addToCart")}
        </Button>
      </div>
    </div>
  );
}