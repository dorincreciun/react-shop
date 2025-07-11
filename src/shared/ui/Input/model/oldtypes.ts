import type {InputHTMLAttributes} from "react";

type InputPasswordType = {
    isPassword: true;
} & InputHTMLAttributes<HTMLInputElement>;

type InputRegularType = {
    type?: Exclude<InputHTMLAttributes<HTMLInputElement>['type'], 'password' | 'text'>;
    isPassword?: false;
} & InputHTMLAttributes<HTMLInputElement>;

export type InputType = (InputPasswordType | InputRegularType) & {
    errorMessages?: string;
};
