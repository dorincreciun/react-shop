import type {HTMLAttributes} from "react";

export type ButtonType = {
    variants: "primary" | "secondary"
    size: "small" | "medium" | "large"
} & HTMLAttributes<HTMLButtonElement>