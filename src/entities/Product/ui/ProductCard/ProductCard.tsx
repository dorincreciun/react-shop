import {HeartIcon, ScaleIcon} from "@heroicons/react/16/solid";
import {Link} from "react-router";
import {APP_ROUTES} from "@/app/routing";
import type {FC} from "react";
import type {ProductCardType} from "@/entities/Product";
import {ProductImage} from "./sections/ProductImage";
import {ProductDetails} from "./sections/ProductDetails";
import {Button} from "@/shared";


export const ProductCard: FC<ProductCardType> = (props) => {
    const {id, name, discountPercentage, price, thumbnail, description, barcode} = props;
    return (
        <div
            className="bg-slate-800/30 overflow-hidden relative p-6 group rounded-2xl border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl"
        >
            <ProductImage
                thumbnail={thumbnail}
                description={description}
            />

            <ProductDetails
                name={name}
                barcode={barcode}
                price={price}
                discountPercentage={discountPercentage}
            />

            {/* Absolute content */}
            <div
                className='absolute right-4 flex flex-col z-20 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <Button content={'icon'} icon={<HeartIcon className="h-6 w-6"/>} variant={'primary'} size={'medium'} />
                <Button content={'icon'} icon={<ScaleIcon className="h-6 w-6"/>} variant={'primary'} size={'medium'} />
            </div>

            <Link to={`${APP_ROUTES.PRODUCTS}/${id}`} className="absolute inset-0 z-10"></Link>
        </div>
    )
}

ProductCard.displayName = 'ProductCard';
