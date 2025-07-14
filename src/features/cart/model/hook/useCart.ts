import {useEffect, useReducer} from "react";
import {getCardProduct} from "@/features/cart/model/getCardProduct.ts";
import type {CartActionType, CartStateType} from "@/features/cart/model/type";

const getInitialState = (): CartStateType => ({
    products: getCardProduct()
});


const reducer = (state: CartStateType, action: CartActionType) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                products: [...state.products, action.newProduct]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                products: state.products.filter((product) => product.id !== action.removeProduct.id)
            }
        case "CLEAR_CART":
            return {
                ...state,
                products: []
            }
        default:
            return state;
    }
}

export const useCart = () => {
    const [state, dispatch] = useReducer(reducer, undefined, getInitialState)

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(state.products))
        console.log(state.products)
    }, [state.products])

    return {
        state,
        dispatch
    }
};