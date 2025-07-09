import {useQuery} from '@tanstack/react-query';
import {useLoaderStore} from "@/shared/model/store/LoaderStore.ts";

export const useProducts = () => {
    const { show, hide } = useLoaderStore();

    return useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            show();
            try {
                const res = await fetch('https://dummyjson.com/products');
                if (!res.ok) {
                    throw new Error('Eroare la încărcarea produselor');
                }
                return await res.json();
            } finally {
                hide();
            }
        },
    });
};
