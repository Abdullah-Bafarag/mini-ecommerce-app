import { createContext, useContext } from "react";
import type { CartItem } from "@/types/cart";
import type { ProductType } from "@/types/store";



export interface CartContextType {
    cart: CartItem[];

    addToCart: (product: ProductType) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;

    totalItems: number;
    totalPriceCents: number;
}


export const CartContext = createContext<CartContextType | undefined>(undefined);




export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}