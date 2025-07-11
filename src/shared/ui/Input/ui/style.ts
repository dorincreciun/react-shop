import { cva } from "class-variance-authority";

export const inputStyle = cva(
    `
    w-full rounded-xl px-4 py-3
    text-slate-200 placeholder-slate-400
    border bg-gradient-to-br from-slate-800/60 to-slate-900/60
    backdrop-blur-sm shadow-sm
    transition-all duration-300 ease-out
    group

    hover:border-slate-500/60
    hover:bg-gradient-to-br hover:from-slate-800/70 hover:to-slate-900/70
    hover:shadow-md hover:shadow-slate-900/20

    focus:bg-gradient-to-br focus:from-slate-800/80 focus:to-slate-900/80
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900
    focus:shadow-lg
  `,
    {
        variants: {
            hasIconStart: {
                true: "pl-10",
                false: "",
            },
            hasIconEnd: {
                true: "pr-10",
                false: "",
            },
            error: {
                true: `
                  border-red-500/60
                  focus:border-red-500/80
                  focus:ring-red-500/20
                    focus:shadow-red-500/10
                `,
                false: `
                  border-slate-600/40
                  focus:border-blue-500/80
                  focus:ring-blue-500/20
                    focus:shadow-blue-500/10
                `,
            },
        },
        compoundVariants: [],
        defaultVariants: {
            hasIconStart: false,
            hasIconEnd: false,
            error: false,
        }
    }
);
