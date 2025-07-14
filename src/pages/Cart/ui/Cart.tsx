import {PageTemplate} from "@/shared";
import {useCart} from "@/features/cart";
import {ProductCard} from "@/entities/Product";

export const CartPage = () => {
    const {state} = useCart();

    return (
        <PageTemplate>
            Cart

            {
                state.products.map((product) => {
                    return (
                        <ProductCard
                            key={product.id}
                            {...product}
                        />
                    )
                })
            }
        </PageTemplate>
    )
}