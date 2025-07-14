import type {ProductCardType} from "@/entities/Product";

export type CartActionType =
    | { type: 'ADD_TO_CART', newProduct: ProductCardType }
    | { type: 'REMOVE_FROM_CART', removeProduct: ProductCardType }
    | { type: 'CLEAR_CART' }

export type CartStateType = {
    products: ProductCardType[]
}