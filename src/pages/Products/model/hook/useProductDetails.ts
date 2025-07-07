import {useQuery} from "@tanstack/react-query";

export const useProductDetails = (productId: string | undefined) => {
    return useQuery({
        queryKey: [`products-${productId}`],
        queryFn: () => fetch(`https://dummyjson.com/products/${productId}`).then(res => res.json())
    })
}

