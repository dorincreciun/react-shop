import type {FC} from "react";
import type {ButtonBadgeType} from "../../model/types.ts";

export const ButtonBadge: FC<ButtonBadgeType> = ({count}) => {
    return (
        <span
            className="absolute -top-2 -right-2 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full h-6 w-6 flex items-center justify-center shadow-lg border-2 border-slate-500/30 animate-pulse hover:animate-none hover:scale-110 transition-all duration-200 min-w-[1.5rem]">
            <span className='text-slate-100 text-xs font-semibold'>
                {count && count > 9 ? '9+' : count}
            </span>
        </span>
    )
}