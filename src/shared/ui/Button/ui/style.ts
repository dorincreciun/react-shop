import {cva} from "class-variance-authority";

export const ButtonStyle = cva(
    "relative flex items-center justify-center transition-all duration-200 ease-out font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none", 
    {
        variants: {
            variant: {
                primary: [
                    "bg-slate-700",
                    "hover:bg-slate-600",
                    "text-white",
                    "shadow-md",
                    "border border-slate-600",
                    "focus:ring-slate-400"
                ],
                secondary: [
                    "bg-transparent",
                    "border-2 border-slate-600",
                    "text-slate-300",
                    "hover:border-slate-500",
                    "hover:text-slate-200",
                    "hover:bg-slate-800/20",
                    "focus:ring-slate-400"
                ],
            },
            size: {
                large: [
                    "px-8 py-4 text-base",
                    "rounded-lg",
                    "min-h-[3.5rem]"
                ],
                medium: [
                    "px-6 py-3 text-sm",
                    "rounded-lg",
                    "min-h-[2.75rem]"
                ],
                small: [
                    "px-4 py-2 text-xs",
                    "rounded-md",
                    "min-h-[2.25rem]"
                ],
            },
            content: {
                text: [
                    "font-semibold"
                ],
                icon: [
                    "bg-transparent",
                    "hover:bg-slate-600/20",
                    "p-2",
                    "rounded-lg",
                    "border border-transparent",
                    "hover:border-slate-500/30",
                    "focus:ring-slate-400/20",
                    "min-w-[2.5rem]",
                    "min-h-[2.5rem]",
                    "aspect-square"
                ],
                "icon-text": [
                    "font-semibold text-base",
                    "gap-x-2"
                ]
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "small",
            content: "text"
        }
    }
);