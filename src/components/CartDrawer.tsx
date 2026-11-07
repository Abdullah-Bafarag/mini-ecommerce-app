import { 
  Sheet, 
  SheetHeader, 
  SheetTitle, 
  SheetFooter 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/hooks/useLanguage";
import { Trash2, ShoppingBag, Plus, Minus } from "lucide-react";

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  const { cart, removeFromCart, updateQuantity, clearCart, totalItems, totalPriceCents } = useCart();
  const { t, language } = useLanguage();

  const isRtl = language === "ar";

  return (
    <Sheet isOpen={open} onOpenChange={onOpenChange} side={isRtl ? "left" : "right"}>
      <SheetHeader className={isRtl ? "pl-14 pr-4" : "pr-14 pl-4"}>
        <SheetTitle className="flex items-center justify-between text-xl font-bold text-gray-800">
          <span>{t("shoppingCart")} ({totalItems})</span>
          {cart.length > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearCart}
              className="text-red-500 hover:text-red-700 h-auto p-1 text-xs"
            >
              {t("clearCart")}
            </Button>
          )}
        </SheetTitle>
      </SheetHeader>

      <div className="flex-1 overflow-y-auto py-4 space-y-4 px-6">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-2 py-12">
            <ShoppingBag className="w-12 h-12 stroke-1 text-[#0D9488]" />
            <p className="text-sm font-medium">{t("cartEmpty")}</p>
            <p className="text-xs text-gray-400">{t("cartEmptySubtext")}</p>
          </div>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4 gap-3">
              <div className="flex-1">
                <h4 className="font-medium text-sm text-gray-800">{item.name}</h4>
                <p className="text-sm font-semibold text-[#0D9488]">
                  ${(item.priceCents / 100).toFixed(2)}
                </p>
              </div>

              <div className="flex items-center border rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 rounded-none"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3 h-3" />
                </Button>
                <span className="px-2 text-sm font-medium">{item.quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 rounded-none"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3 h-3" />
                </Button>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-red-600 h-8 w-8"
                onClick={() => removeFromCart(item.id)}
                aria-label={t("removeFromCart")}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <SheetFooter className="border-t pt-4 flex flex-col gap-3 px-6 pb-6">
          <div className="flex justify-between items-center w-full text-base font-semibold">
            <span>{t("total")}:</span>
            <span className="text-[#0D9488]">
              ${(totalPriceCents / 100).toFixed(2)}
            </span>
          </div>
          <Button className="w-full bg-[#0D9488] hover:bg-[#29A195] text-white">
            {t("checkout")}
          </Button>
        </SheetFooter>
      )}
    </Sheet>
  );
}