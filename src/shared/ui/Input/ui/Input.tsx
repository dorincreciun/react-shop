import {type FC, useState} from "react";
import type {InputType} from "@/shared/ui/Input/model/types.ts";
import {EyeIcon, EyeSlashIcon} from "@heroicons/react/16/solid";
import {cn} from "@sglara/cn";

export const Input: FC<InputType> = ({
     type = "text",
     isPassword = false,
     errorMessages,
     className,
     ...rest
 }) => {
    const [isShowPassword, setShowPassword] = useState(false);

    const actualType = isPassword ? (isShowPassword ? "text" : "password") : type;

    return (
        <div className={cn("w-full", className)}>
            <div
                className={cn(
                    "relative bg-slate-800/60 px-4 py-3 flex items-center justify-between rounded-xl border transition-all duration-300 ease-in-out",
                    "border-slate-600/50 hover:border-slate-500/70 focus-within:border-blue-500/80",
                    "focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:bg-slate-800/80",
                    "hover:bg-slate-800/70 shadow-sm hover:shadow-md",
                    errorMessages && "border-red-500/60 focus-within:border-red-500/80 focus-within:ring-red-500/20"
                )}
            >
                <input
                    type={actualType}
                    className={cn(
                        "outline-none w-full bg-transparent text-white placeholder:text-slate-400/70",
                        "transition-colors duration-200 ease-in-out",
                        "focus:placeholder:text-slate-500",
                        "text-base leading-6"
                    )}
                    {...rest}
                />

                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(prev => !prev)}
                        className={cn(
                            "ml-3 flex items-center relative justify-center w-6 h-6 rounded transition-all duration-200 ease-in-out",
                            "text-slate-400 hover:text-slate-200 hover:bg-slate-700/50",
                            "focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-slate-700/50",
                            "active:scale-95"
                        )}
                        tabIndex={-1}
                        aria-label={isShowPassword ? "Ascunde parola" : "Arată parola"}
                    >
                        {isShowPassword
                            ? <EyeSlashIcon className="h-6 w-6 absolute"/>
                            : <EyeIcon className="6-4 w-6 absolute"/>}
                    </button>
                )}
            </div>

            {errorMessages && (
                <div className="mt-2 flex items-center space-x-1">
                    <div className="w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
                    <p className="text-sm text-red-400 font-medium">{errorMessages}</p>
                </div>
            )}
        </div>
    );
};
