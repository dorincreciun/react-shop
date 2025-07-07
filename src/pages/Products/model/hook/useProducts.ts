import { useEffect, useState } from "react";
import type {ProductCardType} from "@/pages/Products/model/types.ts";

export const useProducts = () => {
    const [products, setProducts] = useState<ProductCardType[] | null>(null);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setProducts([]);
            });
    }, []);

    return products;
};
