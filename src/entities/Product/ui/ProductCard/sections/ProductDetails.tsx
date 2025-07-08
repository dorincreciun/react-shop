import type {FC} from "react";
import type {ProductDetailsType} from "../../../model/types/ProductCard";
import {ButtonIcon} from "@/shared";
import {ShoppingBagIcon} from "@heroicons/react/16/solid";


export const ProductDetails: FC<ProductDetailsType> = (props) => {
    const {name, barcode, price, discountPercentage} = props
    return (
        <div className="flex flex-col gap-3 mt-6 flex-1">
            {/* Title & Desc */}
            <div className='flex flex-col gap-2'>
                <h3 className="text-lg font-semibold text-slate-100 leading-snug">
                    {name}
                </h3>
                <p className="text-slate-400/60 text-sm leading-relaxed">
                    CODE: {barcode}
                </p>
            </div>

            {/* Price + Button */}
            <div className="flex items-end justify-between mt-auto pt-4">
                <div className='flex flex-col items-start'>
                    <p className="text-slate-400/50 font-medium text-sm line-through">{price} lei</p>
                    <p className="text-slate-400 font-medium text-lg">{(price - (price * (discountPercentage / 100))).toFixed(2)} lei</p>
                </div>

                <ButtonIcon icon={<ShoppingBagIcon className="h-6 w-6"/>}/>
            </div>
        </div>
    )
}