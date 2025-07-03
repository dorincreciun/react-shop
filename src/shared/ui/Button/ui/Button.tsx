import type {FC} from "react";
import type {ButtonType} from "@/shared/ui/Button/model/types.ts";
import {cn} from "@sglara/cn";

export const Button: FC<ButtonType> = (props) => {
    const {variants, size, className, children, ...rest} = props
    return (
        <button
            {...rest}
            className={cn(
                "rounded-lg font-semibold transition-all duration-300 hover:scale-105",
                {
                    "px-8 py-4 text-base": size === "large",
                    "px-6 py-3 text-sm": size === "medium",
                    "px-4 py-2 text-xs": size === "small",

                    "bg-slate-700 hover:bg-slate-600 text-white": variants === "primary",
                    "border-2 border-slate-600 hover:border-slate-500 text-slate-300 hover:text-slate-200":
                        variants === "secondary",
                },
                className
            )}
        >
            {children}
        </button>
    )
}
