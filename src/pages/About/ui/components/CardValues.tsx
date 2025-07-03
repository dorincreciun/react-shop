import type {FC} from "react";
import type {CardValuesType} from "@/pages/About/model/types.ts";

export const CardValues: FC<CardValuesType> = (props) => {
    const {title, description} = props;
    return (
        <div
            className="bg-slate-800/30 p-6 rounded-lg border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300"
        >
            <h3 className="text-xl font-semibold text-slate-100 mb-4">{title}</h3>
            <p className="text-slate-300 leading-relaxed">{description}</p>
        </div>
    )
};