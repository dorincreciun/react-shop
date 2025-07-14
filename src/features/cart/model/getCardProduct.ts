export const getCardProduct = () => {
    const productsList = localStorage.getItem('products')

    return productsList ? JSON.parse(productsList) : []
}