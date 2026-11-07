export function transformIntegerPrice(integerPrice: number): string {
    return (integerPrice / 100).toFixed(2);
}

export const API_PRODUCTS_URL = 'https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json';
export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";
