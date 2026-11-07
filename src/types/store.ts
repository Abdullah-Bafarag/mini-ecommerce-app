
type Rating = {
    stars: number;
    count: number;
}

export type ProductType = {
    id: string;
    image: string;
    name: string;
    rating: Rating;
    priceCents: number;
    category: string;
    subCategory: string;
    keywords: string[];
    description: string;
}


/* 

{
    "id": "1",
    "image": "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/moisturizer.jpg",
    "name": "Hydrating Facial Moisturizer",
    "rating": {
      "stars": 4.7,
      "count": 120
    },
    "priceCents": 2000,
    "category": "Beauty & Personal Care",
    "subCategory": "Skincare",
    "keywords": [
      "moisturizer",
      "hydration",
      "skincare",
      "beauty"
    ],
    "description": "This Hydrating Facial Moisturizer is expertly formulated to deeply nourish and hydrate your skin, providing lasting moisture and a smooth, radiant complexion. Ideal for daily use."
  }

*/