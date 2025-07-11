import {cn} from "@sglara/cn";
import {useLoaderStore} from "@/shared/model/store/LoaderStore.ts";

export const Loader = () => {
    const {visible} = useLoaderStore()

    return (
        <div
            className={cn(
                "fixed inset-0 z-50 flex items-center justify-center transition-all duration-300",
                "bg-slate-900/40 backdrop-blur-sm",
                visible ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
        >
            {/* Simple spinner */}
            <div className="relative">
                <div className="h-8 w-8 border-2 border-slate-600 border-t-blue-500 rounded-full animate-spin" />
            </div>
        </div>
    )
};
