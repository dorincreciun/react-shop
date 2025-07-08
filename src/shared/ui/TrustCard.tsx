import type {FC} from "react";
import type {TrustCardType} from "@/pages/Products/model/types.ts";

export const TrustCard: FC<TrustCardType> = (props) => {
    const {icon, name, description} = props
    return (
        <div
            className="bg-slate-800/20 p-6 rounded-xl border border-slate-600/20 text-center group hover:bg-slate-700/20 transition-all duration-300">
            <div
                className="h-10 w-10 text-slate-300 mx-auto mb-3 group-hover:text-slate-200 transition-colors duration-300">
                {icon}
            </div>
            <h3 className="text-slate-100 font-semibold mb-2">{name}</h3>
            <p className="text-slate-400 text-sm">{description}</p>
        </div>
    )
}