import {useProducts} from "@/pages/Products/model/hook/useProducts.ts";
import {ProductCard, type ProductCardType} from "@/entities/Product";

export const SectionProducts = () => {
    const {data, isLoading} = useProducts();
    if (isLoading) return null;

    return (
        <section className="max-w-[1400px] mx-auto px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    data.products.map((product: ProductCardType) => (
                        <ProductCard key={product.id} {...product} />
                    ))
                }
            </div>
        </section>
    );
}
