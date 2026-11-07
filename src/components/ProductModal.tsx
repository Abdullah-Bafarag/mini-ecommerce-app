import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/hooks/useLanguage";
import type { ProductType } from "@/types/store";
import { transformIntegerPrice } from "@/utils/utils";
import { X, Star, ShoppingBag, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface ProductModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: ProductType | null;
}

export function ProductModal({ open, onOpenChange, product }: ProductModalProps) {
  const { addToCart } = useCart();
  const { t, language } = useLanguage();

  if (!open || !product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(t("itemAdded"));
    onOpenChange(false);
  };

  const isRtl = language === "ar";

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      onClick={() => onOpenChange(false)}
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row max-h-[90vh] text-start"
        onClick={(e) => e.stopPropagation()}
        dir={isRtl ? "rtl" : "ltr"}
      >
        {/* Close Button */}
        <button
          onClick={() => onOpenChange(false)}
          className={`absolute top-4 ${isRtl ? "left-4" : "right-4"} z-10 p-2 text-gray-400 hover:text-gray-700 bg-white/80 hover:bg-white rounded-full shadow-xs transition-colors cursor-pointer`}
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image */}
        <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-6 border-b md:border-b-0 md:border-e border-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 md:h-80 object-cover object-center rounded-xl shadow-xs"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs uppercase font-semibold tracking-wider text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md">
                {product.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                <CheckCircle className="w-3.5 h-3.5" />
                {t("inStock")}
              </span>
            </div>

            <h2 className="text-xl font-bold text-gray-900 leading-snug">
              {product.name}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center text-amber-500">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="ms-1 font-semibold text-gray-800">{product.rating.stars}</span>
              </div>
              <span className="text-gray-400">·</span>
              <span className="text-gray-500 text-xs">
                ({product.rating.count} {t("reviews")})
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Price & Action */}
          <div className="pt-6 border-t border-gray-100 mt-6 flex items-center justify-between gap-4">
            <div>
              <span className="block text-xs text-gray-400">{t("price")}</span>
              <span className="text-2xl font-bold text-gray-900">
                ${transformIntegerPrice(product.priceCents)}
              </span>
            </div>

            <Button
              onClick={handleAddToCart}
              className="bg-[#0D9488] hover:bg-[#29A195] text-white flex items-center gap-2 px-6 py-2.5 rounded-xl shadow-xs font-medium transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{t("addToCart")}</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
