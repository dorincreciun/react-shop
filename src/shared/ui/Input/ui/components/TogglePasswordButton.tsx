import {EyeIcon, EyeSlashIcon} from "@heroicons/react/16/solid";
import type {FC} from "react";
import type {TogglePasswordButtonType} from "@/shared/ui/Input/model/types.ts";

export const TogglePasswordButton: FC<TogglePasswordButtonType> = ({visible, onClick}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="right-3 absolute text-slate-400 group-hover:text-slate-300"
        >
            {visible ? <EyeSlashIcon className="h-6 w-6" /> : <EyeIcon className="h-6 w-6" />}
        </button>
    );
};
