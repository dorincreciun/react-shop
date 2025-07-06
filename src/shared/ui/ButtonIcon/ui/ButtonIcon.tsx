import type {FC} from "react";
import type {ButtonIconType} from "../model/types.ts";
import {ButtonBadge} from "../ui/section/Buttonbadge.tsx";
import {cn} from "@sglara/cn";

export const ButtonIcon: FC<ButtonIconType> = (props) => {
    const {icon, badge, className, ...rest} = props
    return (
        <button
            className={cn("relative p-2 text-slate-300 hover:text-slate-100 transition-colors rounded-lg hover:bg-slate-700/30", className)} {...rest}>
            {icon}
            {badge && <ButtonBadge count={badge.count}/>}
        </button>
    )
}

