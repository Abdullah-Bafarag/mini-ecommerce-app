import type { ProductType } from "@/types/store";
import { API_PRODUCTS_URL } from "@/utils/utils";
import { useCallback } from "react";

function useProductAPI() {
    
    const getAllProducts = useCallback(async(): Promise<ProductType[]> => {
        try {
            const response = await fetch(API_PRODUCTS_URL);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            if (Array.isArray(data)) {
                return data as ProductType[];
            }

            if (data && typeof data === 'object' && 'products' in data) {
                return (data as { products: ProductType[] }).products;
            }
            return [];
        } catch (error) {
            console.error("Failed to fetch products:", error);
            return [];
        }
    }, []);

    return {getAllProducts};
}

export default useProductAPI;