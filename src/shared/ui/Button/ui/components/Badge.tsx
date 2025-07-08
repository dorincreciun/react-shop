import type {FC} from "react";
import type {BadgeType} from "@/shared/ui/Button/model/types.ts";

export const Badge: FC<BadgeType> = ({count}) => {
    return (
        <span
            className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-full h-6 w-6 flex items-center justify-center shadow-lg shadow-red-900/40 border-2 border-red-400/50 animate-pulse hover:animate-none hover:scale-110 transition-all duration-300 min-w-[1.5rem] backdrop-blur-sm hover:shadow-xl hover:shadow-red-900/50 hover:from-red-400 hover:via-red-500 hover:to-red-600 active:scale-95">
            <span className='text-white text-xs font-bold tracking-wide drop-shadow-sm'>
                {count && count > 9 ? '9+' : count}
            </span>
        </span>
    )
}