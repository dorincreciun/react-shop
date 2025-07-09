import {useParams} from "react-router";
import {useProductDetails} from "@/pages/Products/model/hook/useProductDetails.ts";
import {Button, PageTemplate} from "@/shared";
import {MinusIcon, PlusIcon, ShieldCheckIcon, ShoppingBagIcon, StarIcon, TruckIcon} from "@heroicons/react/16/solid";
import {TrustCard} from "@/shared/ui/TrustCard.tsx";
import {ProductSpecs} from "@/entities/Product";

export const ProductPage = () => {
    const { product } = useParams<{ product: string }>();
    const { data, isLoading, error } = useProductDetails(product);

    if (isLoading) return <p className="text-slate-400">Se încarcă...</p>;
    if (error) return <p className="text-slate-400 mb-4">Nu s-a putut încărca produsul</p>;

    return (
        <PageTemplate>
            <div className="mb-12">
                <div className="grid h-auto grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="relative">
                        <div className="bg-slate-800/30 overflow-hidden relative p-8 group rounded-2xl border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 shadow-md hover:shadow-xl">
                            <img
                                src={data.thumbnail}
                                alt={data.title}
                                className="object-contain w-full h-[450px] transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm rounded-full font-semibold border border-red-500/30">
                                    -{data.discountPercentage}%
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='h-full flex flex-col justify-between'>
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                                    {data.category}
                                </span>
                                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                                    {data.availabilityStatus}
                                </span>
                            </div>

                            <div>
                                <h1 className="text-3xl lg:text-4xl font-bold text-slate-100 leading-tight mb-4">
                                    {data.title}
                                </h1>
                                <p className="text-slate-400 text-base leading-relaxed">
                                    {data.description}
                                </p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 p-6 rounded-2xl border border-slate-600/30 mb-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <div className="text-2xl font-bold text-slate-100 mb-1">
                                            {(data.price - (data.price * (data.discountPercentage / 100))).toFixed(2)} lei
                                        </div>
                                        <div className="text-sm text-slate-400">
                                            Preț final
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-base text-slate-400 line-through mb-1">
                                            {data.price} lei
                                        </div>
                                        <div className="text-xs text-slate-500">
                                            Preț original
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                        <span className="text-sm text-green-400 font-medium">
                                            Economisești {((data.price * (data.discountPercentage / 100))).toFixed(2)} lei
                                        </span>
                                    </div>
                                    <div className="px-3 py-1 bg-red-500/20 text-red-400 text-sm font-medium rounded-full">
                                        -{data.discountPercentage}%
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center gap-4'>
                                <div className='bg-slate-800/30 flex items-center justify-center gap-x-6 max-w-max p-2 rounded-2xl border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 shadow-md hover:shadow-xl'>
                                    <Button
                                        content={'icon'}
                                        icon={<MinusIcon className="h-6 w-6" />}
                                    />
                                    <span className='text-base font-medium'>1</span>
                                    <Button
                                        content={'icon'}
                                        icon={<PlusIcon className="h-6 w-6" />}
                                    />
                                </div>

                                <div className='flex items-center gap-3'>
                                    <Button
                                        content={'text'}
                                        variant={'primary'}
                                        size={'large'}
                                        label={'Cumpără'}
                                    />
                                    <Button
                                        content={'icon'}
                                        icon={<ShoppingBagIcon className="h-6 w-6" />}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <TrustCard icon={<TruckIcon />} name="Livrare rapidă" description="Livrare în 24-48 ore" />
                    <TrustCard icon={<ShieldCheckIcon />} name="Garanție 2 ani" description="Produs original cu garanție" />
                    <TrustCard icon={<StarIcon />} name="Calitate premium" description="Produse testate și verificate" />
                </div>
            </div>

            <div className="bg-slate-800/20 p-8 rounded-2xl border border-slate-600/20">
                <h2 className="text-xl font-bold text-slate-100 mb-8 text-center">Specificații produs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ProductSpecs specifications={[
                        data.brand,
                        data.sku,
                        data.stock,
                        data.category,
                    ]} />
                </div>
            </div>
        </PageTemplate>
    );
};
