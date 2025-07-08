import type {FC} from "react";
import type {ProductSpecType} from "../../../model/types/ProductSpec";

export const ProductSpec: FC<ProductSpecType> = (props) => {
    const {name, description} = props

    return (
        <div className="text-center p-4 rounded-lg bg-slate-700/20 border border-slate-600/20">
            <p className="text-slate-400/60 text-sm mb-2 font-medium">{name}</p>
            <p className="text-slate-100 font-semibold text-lg">{description}</p>
        </div>
    )
}