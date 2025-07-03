import type {FC} from "react";
import type {CardTimeType} from "@/pages/About/model/types.ts";

export const CardTeam: FC<CardTimeType> = (props) => {
    const {name, role, description} = props
    return (
        <div
            className="text-center bg-slate-800/30 p-6 rounded-lg border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300"
        >
            <div
                className="w-20 h-20 bg-slate-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-slate-300 text-xl font-semibold">
                  {name.split(' ').map(n => n[0]).join('')}
                </span>
            </div>
            <h3 className="text-xl font-semibold text-slate-100 mb-2">{name}</h3>
            <p className="text-slate-400 font-medium mb-3">{role}</p>
            <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
        </div>
    )
};