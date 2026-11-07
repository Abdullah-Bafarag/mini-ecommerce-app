import type { ProductType } from "./store";

export interface CartItem extends ProductType {
    quantity: number;
}

