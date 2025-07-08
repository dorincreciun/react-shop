import {cva} from "class-variance-authority";

export const ButtonStyle = cva("rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105", {
    variants: {
        variant: {
            primary: "bg-slate-700 hover:bg-slate-600 text-white",
            secondary: "border-2 border-slate-600 hover:border-slate-500 text-slate-300 hover:text-slate-200",
        },
        size: {
            large: "px-8 py-4 text-base",
            medium: "px-6 py-3 text-sm",
            small: "px-4 py-2 text-xs",
        },
        content: {
            text: "font-semibold",
            icon: "",
            "icon-text": "font-semibold gap-x-2"
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "small",
        content: "text"
    }
})