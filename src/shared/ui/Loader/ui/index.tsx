import {cn} from "@sglara/cn";
import {useLoaderStore} from "@/shared/model/store/LoaderStore.ts";

export const Loader = () => {
    const {visible} = useLoaderStore()

    return (
        <div
            className={cn(
                "inset-0 z-50 flex items-center justify-center transition-opacity duration-300",
                "bg-slate-900/20 backdrop-blur-md backdrop-saturate-150",
                visible ? "opacity-100 fixed" : "opacity-0 hidden"
            )}
        >
            <div className="h-7 w-7 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
    )
};
