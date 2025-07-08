import type { ButtonHTMLAttributes } from "react";
import type {SvgIconType} from "@/shared/types/global";

/**
 * Variantele stilistice de buton.
 */
export type ButtonVariantsType = "primary" | "secondary";

/**
 * Dimensiunile posibile ale butonului.
 */
export type ButtonSizeType = "small" | "medium" | "large";

/**
 * Poziția iconului în cazul în care avem icon + text.
 */
export type ButtonIconPositionType = "left" | "right";

/**
 * Tipul general pentru toate butoanele.
 */
interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    badge?: number;
}

/**
 * Buton simplu, doar cu text.
 */
export interface TextButtonProps extends BaseButtonProps {
    content: "text";
    variant: ButtonVariantsType;
    size: ButtonSizeType;
    label: string;
    icon?: never;
    iconPosition?: never;
}

/**
 * Buton doar cu icon (fără text).
 */
export interface IconButtonProps extends BaseButtonProps {
    content: "icon";
    icon: SvgIconType;
    variant?: never;
    size?: never;
    label?: never;
    iconPosition?: never;
}

/**
 * Buton cu icon + text.
 */
export interface IconTextButtonProps extends BaseButtonProps {
    content: "icon-text";
    label: string;
    variant: ButtonVariantsType;
    size: ButtonSizeType;
    icon: SvgIconType;
    iconPosition: ButtonIconPositionType;
}

/**
 * Tipul final exportat pentru componenta Button.
 */
export type ButtonType =
    | TextButtonProps
    | IconButtonProps
    | IconTextButtonProps;

/**
*  Tipul final exportat pentru componenta Badge
*/
export type BadgeType = {
    count: number | undefined;
}