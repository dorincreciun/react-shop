import {useQuery} from "@tanstack/react-query";
import {useLoaderStore} from "@/shared/model/store/LoaderStore.ts";

export const useProductDetails = (productId: string | undefined) => {
    const { show, hide } = useLoaderStore();

    return useQuery({
        queryKey: [`products-${productId}`],
        queryFn: async () => {
            show();
            try {
                const res = await fetch(`https://dummyjson.com/products/${productId}`);
                if (!res.ok) {
                    throw new Error('Eroare la încărcarea produselor');
                }
                return await res.json();
            } finally {
                hide();
            }
        },
        staleTime: 1000 * 60 * 5
    });
}

