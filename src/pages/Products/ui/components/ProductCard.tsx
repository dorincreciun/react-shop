import {ButtonIcon} from "@/shared";
import {HeartIcon, ScaleIcon, ShoppingBagIcon} from "@heroicons/react/16/solid";
import {Link} from "react-router";
import {APP_ROUTES} from "@/app/routing";
import type {FC} from "react";
import type {ProductCardType} from "@/pages/Products/model/types.ts";


export const ProductCard: FC<ProductCardType> = (props) => {
    const {id, name, discountPercentage, price, thumbnail, description, barcode} = props;
    return (
        <div
            className="bg-slate-800/30 overflow-hidden relative p-6 group rounded-2xl border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl"
        >
            {/* Image */}
            <div className="h-[220px]  flex items-center justify-center">
                <img
                    src={thumbnail}
                    alt={description}
                    className="object-contain max-h-full max-w-full transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Details */}
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

                    <ButtonIcon icon={<ShoppingBagIcon className="h-6 w-6" />} />
                </div>
            </div>

            {/* Absolute content */}
            <div
                className='absolute right-4 flex flex-col z-20 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <ButtonIcon className='hover:text-red-500' icon={<HeartIcon className="h-6 w-6" />} />
                <ButtonIcon icon={<ScaleIcon className="h-6 w-6" />} />
            </div>

            <Link to={`${APP_ROUTES.PRODUCTS}/${id}`} className="absolute inset-0 z-10"></Link>
        </div>
    )
}