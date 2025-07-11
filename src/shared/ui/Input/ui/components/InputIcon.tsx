import {cn} from "@sglara/cn";
import type {SvgIconType} from "@/shared/model/types/global";

export const InputIcon = ({children, className} : {children: SvgIconType, className: string}) => {
    return (
        <span className={cn("absolute z-10 text-slate-400 transition-colors duration-200 group-hover:text-slate-300",className)}>
            {children}
        </span>
    );
};