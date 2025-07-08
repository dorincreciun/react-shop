import type {FC} from "react";
import type {NewButtonType} from "@/shared/ui/NewButton/model/types.ts";
import {ButtonStyle} from "@/shared/ui/NewButton/ui/style.ts";
import {cn} from "@sglara/cn";

export const NewButton: FC<NewButtonType> = ({
    variant = "primary",
    size = "small",
    iconPosition = "right",
    icon,
    content,
    label,
    className,
    ...rest
}) => {

    const classes: string = ButtonStyle({variant, size, content})

    return (
        <button
            {...rest}
            className={cn(classes, className)}
        >
            {content === "icon" && icon}
            {content === "text" && label}
            {content === "icon-text" && (
                <>
                    {iconPosition === "left" && icon}
                    {label}
                    {iconPosition === "right" && icon}
                </>
            )}
        </button>
    )
}