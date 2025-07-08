import type {FC} from "react";
import type {ProductImageType} from "@/entities/Product/model/types/ProductCard.ts";

export const ProductImage: FC<ProductImageType> = (props) => {
    const {thumbnail, description} = props
    return (
        <div className="h-[220px] flex items-center justify-center">
            <img
                src={thumbnail}
                alt={description}
                loading={'lazy'}
                className="object-contain max-h-full max-w-full transition-transform duration-300 group-hover:scale-105"
            />
        </div>
    )
}