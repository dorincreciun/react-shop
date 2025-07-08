import { useQuery } from "@tanstack/react-query";
import { useLoaderStore } from "@/shared/model/store/LoaderStore.ts";

export const useProducts = () => {
    const { show, hide } = useLoaderStore();

    return useQuery(
        ['products'],
        async () => {
            show();
            const res = await fetch('https://dummyjson.com/products');
            return await res.json();
        },
        {
            onSettled: () => hide(),
        }
    );
};
