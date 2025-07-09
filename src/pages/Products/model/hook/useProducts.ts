import { useQuery } from '@tanstack/react-query';
import { useLoaderStore } from "@/shared/model/store/LoaderStore.ts";

export const useProducts = () => {
    const { show, hide } = useLoaderStore();

    return useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            show(); // afișează loaderul
            try {
                const res = await fetch('https://dummyjson.com/products');
                if (!res.ok) {
                    throw new Error('Eroare la încărcarea produselor');
                }
                return await res.json();
            } catch (e) {
                console.error(e);
                throw e; // 🔥 Asta este esențial
            } finally {
                hide(); // ascunde loaderul indiferent de rezultat
            }
        },
        retry: 1,         // opțional: 1 retry
        staleTime: 1000 * 60 * 5, // opțional: cache pentru 5 min
    });
};
