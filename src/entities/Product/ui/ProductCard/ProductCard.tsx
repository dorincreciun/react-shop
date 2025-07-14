import {HeartIcon, ScaleIcon} from "@heroicons/react/16/solid";
import {Link} from "react-router";
import {APP_ROUTES} from "@/app/routing";
import type {FC} from "react";
import type {ProductCardType} from "@/entities/Product";
import {ProductImage} from "./sections/ProductImage";
import {ProductDetails} from "./sections/ProductDetails";
import {Button} from "@/shared";
import {useCart} from "@/features/cart";


export const ProductCard: FC<ProductCardType> = (props) => {
    const {id, name, discountPercentage, price, thumbnail, description, barcode} = props;
    const {dispatch} = useCart();

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            newProduct: props
        })
    }

    return (
        <div
            className="group relative overflow-hidden rounded-2xl border border-slate-600/30 bg-gradient-to-br from-slate-800/40 to-slate-900/40 p-6 shadow-lg backdrop-blur-sm transition-all duration-500 hover:border-slate-500/60 hover:shadow-2xl hover:shadow-slate-900/20 hover:scale-[1.02] hover:bg-gradient-to-br hover:from-slate-800/50 hover:to-slate-900/50"
        >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-600/5 via-transparent to-slate-400/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            <ProductImage
                thumbnail={thumbnail}
                description={description}
            />

            <ProductDetails
                onClick={addToCart}
                name={name}
                barcode={barcode}
                price={price}
                discountPercentage={discountPercentage}
            />

            {/* Action buttons with improved styling */}
            <div className="absolute right-4 top-4 z-20 flex flex-col gap-3 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
                <Button
                    content="icon"
                    icon={<HeartIcon className="h-5 w-5 text-slate-300 transition-colors duration-200 group-hover:text-rose-400" />}
                    className="backdrop-blur-sm bg-slate-800/60 border-slate-600/40 hover:bg-slate-700/70 hover:border-slate-500/50 shadow-lg hover:shadow-xl"
                />
                <Button
                    content="icon"
                    icon={<ScaleIcon className="h-5 w-5 text-slate-300 transition-colors duration-200 group-hover:text-blue-400" />}
                    className="backdrop-blur-sm bg-slate-800/60 border-slate-600/40 hover:bg-slate-700/70 hover:border-slate-500/50 shadow-lg hover:shadow-xl"
                />
            </div>

            {/* Overlay link with improved interaction */}
            <Link 
                to={`${APP_ROUTES.PRODUCTS}/${id}`} 
                className="absolute inset-0 z-10 transition-opacity duration-300 hover:opacity-90"
                aria-label={`Vezi detalii pentru ${name}`}
            />
            
            {/* Subtle border glow on hover */}
            <div className="absolute inset-0 rounded-2xl border border-transparent transition-all duration-500 group-hover:border-slate-500/20 group-hover:shadow-[0_0_20px_rgba(148,163,184,0.1)]" />
        </div>
    )
}

ProductCard.displayName = 'ProductCard';
