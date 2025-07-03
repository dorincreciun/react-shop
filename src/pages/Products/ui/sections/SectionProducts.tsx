import {ProductCard} from "@/pages/Products/ui/components/ProductCard.tsx";


export const SectionProducts = () => {
    return (
        <section className="max-w-[1400px] mx-auto px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {Array.from({ length: 12 }).map((_, index) => (
                    <ProductCard key={index} />
                ))}
            </div>
        </section>
    );
}
