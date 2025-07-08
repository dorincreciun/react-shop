import {useEffect, useState} from "react";
import {useLoaderStore} from "@/shared/model/store/LoaderStore.ts";
import {cn} from "@sglara/cn";

export const Loader = () => {
    const {isLoading} = useLoaderStore()
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (isLoading) {
            setVisible(true);
        } else {
            const timeout = setTimeout(() => setVisible(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [isLoading]);

    return (
        <div
            className={cn("fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 bg-slate-900/20 backdrop-blur-md backdrop-saturate-150",
                visible ? "opacity-1" : "opacity-0")}>
            <div className="h-7 w-7 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"/>
        </div>
    )
};