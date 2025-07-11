import {type FC, useState} from "react";
import type {InputType} from "@/shared/ui/Input/model/types.ts";
import {cn} from "@sglara/cn";
import {inputStyle} from "@/shared/ui/Input/ui/style.ts";
import {ErrorMessage} from "@/shared/ui/Input/ui/components/ErrorMessage.tsx";
import {InputIcon} from "@/shared/ui/Input/ui/components/InputIcon.tsx";
import {TogglePasswordButton} from "@/shared/ui/Input/ui/components/TogglePasswordButton.tsx";

export const Input: FC<InputType> = ({className, errorMessages, iconStart, iconEnd, toggleMask, type, ...props}) => {
    const [isShowPassword, setShowPassword] = useState(false);

    const actualType = type === 'password' ? (isShowPassword ? "text" : "password") : type;
    return (
        <div className="relative w-full">
            <div className="relative flex items-center">

                {/* Icon Start */}
                {iconStart && (<InputIcon className="left-3">{iconStart}</InputIcon>)}

                {/* Input */}
                <input
                    type={actualType}
                    className={cn(
                        inputStyle({
                            hasIconStart: !!iconStart,
                            hasIconEnd: !!iconEnd,
                            error: !!errorMessages?.length,
                        }),
                        className
                    )}
                    {...props}
                />

                {/* Icon End */}
                {iconEnd && (<InputIcon className="right-3">{iconEnd}</InputIcon>)}

                {/* ToggleMask */}
                {(toggleMask && type === 'password') && (
                    <TogglePasswordButton
                        visible={isShowPassword}
                        onClick={() => setShowPassword((prev) => !prev)}
                    />
                )}

            </div>

            {/* Error messages */}
            {errorMessages && (<ErrorMessage messages={errorMessages}/>)}
        </div>
    )
}