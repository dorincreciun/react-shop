export interface ProductCardType extends ProductDetailsType, ProductImageType {
    id: number;
}

export type ProductImageType = {
    thumbnail: string;
    description: string;
}

export type ProductDetailsType = {
    onClick: () => void;
    name: string;
    barcode: number;
    price: number;
    discountPercentage: number;
}