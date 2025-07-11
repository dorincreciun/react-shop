import type {InputHTMLAttributes} from "react";
import type {SvgIconType} from "@/shared/model/types/global";

type BaseInputProps = InputHTMLAttributes<HTMLInputElement> & {
    errorMessages?: string[];
};

type InputPasswordType = {
    type: 'password';
    toggleMask?: boolean;
    iconStart?: SvgIconType;
    iconEnd?: never;
};

type InputStandardType = {
    type: 'text' | 'email';
    iconStart?: SvgIconType;
    iconEnd?: SvgIconType;
    toggleMask?: never;
};

export type InputType = BaseInputProps & (InputPasswordType | InputStandardType);

/* InputField */
export type InputField = {
    hasIconStart: boolean;
    hasIconEnd: boolean;
    error: boolean;
    className: string;
} & InputHTMLAttributes<HTMLInputElement>

/* Toggle Password Button */
export type TogglePasswordButtonType = {
    visible: boolean;
    onClick: () => void;
};
