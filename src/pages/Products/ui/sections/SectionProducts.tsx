import {useProducts} from "@/pages/Products/model/hook/useProducts.ts";
import {ProductCard} from "@/pages/Products/ui/components/ProductCard.tsx";
import type {ProductCardType} from "@/pages/Products/model/types.ts";


export const SectionProducts = () => {
    const {isLoading, data} = useProducts()

    if (isLoading) {
        return <p className="text-white text-center">Se încarcă produsele...</p>;
    }

    return (
        <section className="max-w-[1400px] mx-auto px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    data.products.map((product: ProductCardType) => {
                        const {id, name, price, discountPercentage, barcode, description, thumbnail} = product;
                        return (
                            <ProductCard
                                key={id}
                                id={id}
                                name={name}
                                price={price}
                                barcode={barcode}
                                thumbnail={thumbnail}
                                description={description}
                                discountPercentage={discountPercentage}
                            />
                        )
                    })
                }
            </div>
        </section>
    );
}
