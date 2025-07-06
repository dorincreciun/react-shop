import watch from "../../../../../public/watch.webp";
import {ButtonIcon} from "@/shared";
import {HeartIcon, ScaleIcon, ShoppingBagIcon} from "@heroicons/react/16/solid";


export const ProductCard = () => {
    return (
        <div
            className="bg-slate-800/30 overflow-hidden relative p-6 group rounded-2xl border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl"
        >
            {/* Image bg-slate-700/40 rounded-xl overflow-hidden */}
            <div className="h-[220px]  flex items-center justify-center">
                <img
                    src={watch}
                    alt="Watch preview"
                    className="object-contain max-h-full max-w-full transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Details */}
            <div className="flex flex-col gap-3 mt-6 flex-1">
                {/* Title & Desc */}
                <div className='flex flex-col gap-2'>
                    <h3 className="text-lg font-semibold text-slate-100 leading-snug">
                        Apple iPhone 15 Pro Max 256 GB Natural Titanium
                    </h3>
                    <p className="text-slate-400/60 text-sm leading-relaxed">
                        6.1&quot; | 12 MP | 4 GB | Single SIM
                    </p>
                </div>

                {/* Price + Button */}
                <div className="flex items-end justify-between mt-auto pt-4">
                    <div className='flex flex-col items-start'>
                        <p className="text-slate-400/50 font-medium text-sm line-through">11 000 lei</p>
                        <p className="text-slate-400 font-medium text-lg">9 000 lei</p>
                    </div>

                    <ButtonIcon icon={<ShoppingBagIcon className="h-6 w-6" />} />
                </div>
            </div>

            {/* Absolute content */}
            <div className='absolute right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <ButtonIcon className='hover:text-red-500' icon={<HeartIcon className="h-6 w-6" />} />
                <ButtonIcon icon={<ScaleIcon className="h-6 w-6" />} />
            </div>
        </div>
    )
}