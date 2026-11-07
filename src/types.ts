export interface Product {
  id: number | string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  rating?: number;
  reviewsCount?: number;
  description?: string;
  features?: string[];
  inStock?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  colors?: string[];
  sizes?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}
