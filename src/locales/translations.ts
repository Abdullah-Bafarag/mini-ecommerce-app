export interface TranslationSchema {
    // Navigation & General
    home: string;
    categories: string;
    allProducts: string;
    search: string;
    searchPlaceholder: string;

    // Categories
    electronicsGadgets: string;
    fashionApparel: string;
    beautyPersonalCare: string;
    homeKitchen: string;
    healthFitness: string;

    // Product Card & Details
    addToCart: string;
    addedToCart: string;
    itemAdded: string;
    removeFromCart: string;
    price: string;
    rating: string;
    reviews: string;
    inStock: string;
    outOfStock: string;
    productDetails: string;

    // Cart Details & Drawer
    viewCart: string;
    shoppingCart: string;
    cartEmpty: string;
    cartEmptySubtext: string;
    clearCart: string;
    quantity: string;
    subtotal: string;
    shipping: string;
    tax: string;
    total: string;
    checkout: string;
    continueShopping: string;

    // Filtering & Sorting
    filter: string;
    sortBy: string;
    priceLowToHigh: string;
    priceHighToLow: string;
    highestRated: string;
    newest: string;
    resetFilters: string;

    // States & Feedback
    loading: string;
    noProducts: string;
    errorTitle: string;
    errorMessage: string;
    retry: string;
    orderSuccess: string;
    orderSuccessMessage: string;
}

export type Language = "en" | "ar";

export const translations: Record<Language, TranslationSchema> = {
    en: {
        // Navigation & General
        home: "Home",
        categories: "Categories",
        allProducts: "All Products",
        search: "Search",
        searchPlaceholder: "Search products...",

        // Categories
        electronicsGadgets: "Electronics & Gadgets",
        fashionApparel: "Fashion & Apparel",
        beautyPersonalCare: "Beauty & Personal Care",
        homeKitchen: "Home & Kitchen",
        healthFitness: "Health & Fitness",

        // Product Card & Details
        addToCart: "Add to Cart",
        addedToCart: "Added to Cart",
        itemAdded: "Item added to cart successfully",
        removeFromCart: "Remove from cart",
        price: "Price",
        rating: "Rating",
        reviews: "Reviews",
        inStock: "In Stock",
        outOfStock: "Out of Stock",
        productDetails: "Product Details",

        // Cart Details & Drawer
        viewCart: "View Cart",
        shoppingCart: "Shopping Cart",
        cartEmpty: "Your cart is empty",
        cartEmptySubtext: "You haven't added any items to your cart yet.",
        clearCart: "Clear All",
        quantity: "Quantity",
        subtotal: "Subtotal",
        shipping: "Shipping",
        tax: "Tax",
        total: "Total",
        checkout: "Proceed to Checkout",
        continueShopping: "Continue Shopping",

        // Filtering & Sorting
        filter: "Filter",
        sortBy: "Sort by",
        priceLowToHigh: "Price: Low to High",
        priceHighToLow: "Price: High to Low",
        highestRated: "Highest Rated",
        newest: "Newest",
        resetFilters: "Reset Filters",

        // States & Feedback
        loading: "Loading products...",
        noProducts: "No products found in this category.",
        errorTitle: "Something went wrong",
        errorMessage: "Failed to load products. Please try again.",
        retry: "Retry",
        orderSuccess: "Order Placed Successfully!",
        orderSuccessMessage: "Thank you for your purchase. We are processing your order.",
    },
    ar: {
        // Navigation & General
        home: "الرئيسية",
        categories: "الأقسام",
        allProducts: "جميع المنتجات",
        search: "بحث",
        searchPlaceholder: "ابحث عن المنتجات...",

        // Categories
        electronicsGadgets: "إلكترونيات وأجهزة",
        fashionApparel: "أزياء وملابس",
        beautyPersonalCare: "الجمال والعناية الشخصية",
        homeKitchen: "المنزل والمطبخ",
        healthFitness: "الصحة واللياقة",

        // Product Card & Details
        addToCart: "أضف إلى السلة",
        addedToCart: "تمت الإضافة للسلة",
        itemAdded: "تمت إضافة المنتج إلى السلة بنجاح",
        removeFromCart: "إزالة من السلة",
        price: "السعر",
        rating: "التقييم",
        reviews: "التقييمات",
        inStock: "متوفر في المخزون",
        outOfStock: "غير متوفر بالمخزون",
        productDetails: "تفاصيل المنتج",

        // Cart Details & Drawer
        viewCart: "عرض السلة",
        shoppingCart: "سلة التسوق",
        cartEmpty: "سلة التسوق فارغة",
        cartEmptySubtext: "لم تقم بإضافة أي منتجات إلى سلتك بعد.",
        clearCart: "مسح الكل",
        quantity: "الكمية",
        subtotal: "المجموع الفرعي",
        shipping: "الشحن",
        tax: "الضريبة",
        total: "الإجمالي",
        checkout: "إتمام الطلب",
        continueShopping: "متابعة التسوق",

        // Filtering & Sorting
        filter: "تصفية",
        sortBy: "ترتيب حسب",
        priceLowToHigh: "السعر: من الأقل إلى الأعلى",
        priceHighToLow: "السعر: من الأعلى إلى الأقل",
        highestRated: "الأعلى تقييماً",
        newest: "الأحدث",
        resetFilters: "إعادة ضبط الفلاتر",

        // States & Feedback
        loading: "جاري تحميل المنتجات...",
        noProducts: "لا توجد منتجات في هذا القسم.",
        errorTitle: "حدث خطأ ما",
        errorMessage: "تعذر تحميل المنتجات. يرجى المحاولة مرة أخرى.",
        retry: "إعادة المحاولة",
        orderSuccess: "تم تقديم الطلب بنجاح!",
        orderSuccessMessage: "شكراً لتسوقك معنا، تم استلام طلبك وجاري تجهيزه.",
    },
};

export type TranslationKey = keyof TranslationSchema;