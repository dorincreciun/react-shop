import type {ReactNode} from "react";

export type ProductCardType = {
    id: number;
    name: string;
    price: number;
    discountPercentage: number;
    barcode: number;
    description: string;
    thumbnail: string
}

export type TrustCardType = {
    icon: ReactNode
    name: string;
    description: string;
}

export type SpecificationCardType = {
    name: string;
    description: string;
}