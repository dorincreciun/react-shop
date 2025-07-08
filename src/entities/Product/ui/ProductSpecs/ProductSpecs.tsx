import {type FC} from "react";
import type {ProductSpecsType, ProductSpecType} from "../../model/types/ProductSpec";
import {ProductSpec} from "./components/ProductSpec";

export const ProductSpecs: FC<ProductSpecsType> = ({specifications}) => {
    console.log(specifications)
    return (
        <div>
            {
                specifications.map((spec: ProductSpecType, index: number) => (
                    <ProductSpec
                        key={index}
                        name={spec?.name}
                        description={spec?.description}
                    />
                ))
            }
        </div>
    )
}