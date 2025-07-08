export interface ProductCardType extends ProductDetailsType, ProductImageType {
    id: number;
}

export type ProductImageType = {
    thumbnail: string;
    description: string;
}

export type ProductDetailsType = {
    name: string;
    barcode: number;
    price: number;
    discountPercentage: number;
}