import type {ButtonHTMLAttributes, JSX, SVGProps} from "react";

type HeroIcon = (props: SVGProps<SVGSVGElement>) => JSX.Element;
export type ButtonBadgeType = {
    count: number | undefined;
}

export type ButtonIconType = {
    badge?: ButtonBadgeType;
    icon: ReturnType<HeroIcon>;
} & ButtonHTMLAttributes<HTMLButtonElement>