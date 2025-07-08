import type {FC} from "react";
import type {ButtonType} from "@/shared/ui/Button/model/types.ts";
import {ButtonStyle} from "@/shared/ui/Button/ui/style.ts";
import {cn} from "@sglara/cn";
import {Badge} from "@/shared/ui/Button/ui/components/Badge.tsx";

export const Button: FC<ButtonType> = ({
    variant = "primary",
    size = "small",
    iconPosition = "right",
    icon,
    content,
    label,
    badge,
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
            {badge && <Badge count={badge} />}
        </button>
    )
}