import {useParams} from "react-router";
import {useProductDetails} from "@/pages/Products/model/hook/useProductDetails.ts";
import {PageTemplate} from "@/shared";
import {HeartIcon, ScaleIcon, StarIcon, TruckIcon, ShieldCheckIcon} from "@heroicons/react/16/solid";
import {ButtonIcon} from "@/shared";
import {TrustCard} from "@/pages/Products/ui/components/TrustCard.tsx";
import {SpecificationCard} from "@/pages/Products/ui/components/SpecificationCard.tsx";

export const ProductPage = () => {
    const { product } = useParams<{ product: string }>();

    const {
        data,
        isLoading,
        error,
    } = useProductDetails(product);

    if (isLoading) return <p className="text-slate-400">Se încarcă...</p>

    if (error) return <p className="text-slate-400 mb-4">Nu s-a putut încărca produsul</p>

    // const discountedPrice = data.price - (data.price * (data.discountPercentage / 100));

    return (
        <PageTemplate>

                {/* Hero Section with Image and Basic Info */}
                <div className="mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Image Section */}
                        <div className="relative">
                            <div className="bg-slate-800/30 overflow-hidden relative p-8 group rounded-2xl border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 shadow-md hover:shadow-xl">
                                <img
                                    src={data.thumbnail}
                                    alt={data.title}
                                    className="object-contain w-full h-[450px] transition-transform duration-300 group-hover:scale-105"
                                />
                                
                                {/* Discount Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm rounded-full font-semibold border border-red-500/30">
                                            -{data.discountPercentage}%
                                    </span>
                                </div>

                                {/* Action Buttons */}
                                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ButtonIcon 
                                        className="hover:text-red-500" 
                                        icon={<HeartIcon className="h-6 w-6" />} 
                                    />
                                    <ButtonIcon 
                                        icon={<ScaleIcon className="h-6 w-6" />} 
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6">
                            {/* Categories */}
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                                    {data.category}
                                </span>
                                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                                    {data.availabilityStatus}
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl lg:text-5xl font-bold text-slate-100 leading-tight">
                                {data.title}
                            </h1>

                            {/* Description */}
                            <p className="text-slate-400 text-lg leading-relaxed">
                                {data.description}
                            </p>

                            {/* Price Section */}
                            {/*<div className="bg-slate-800/20 p-6 rounded-xl border border-slate-600/20">*/}
                            {/*    <div className="mb-6">*/}
                            {/*        <div className="flex items-center gap-3 mb-2">*/}
                            {/*            <span className="text-5xl font-bold text-green-400">*/}
                            {/*                {discountedPrice.toFixed(2)}*/}
                            {/*            </span>*/}
                            {/*            <span className="text-2xl text-green-400 font-medium">lei</span>*/}
                            {/*        </div>*/}
                            {/*        <div className="flex items-center gap-3">*/}
                            {/*            <span className="text-xl text-slate-400/60 line-through">*/}
                            {/*                {data.price} lei*/}
                            {/*            </span>*/}
                            {/*            <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm rounded-full font-semibold border border-red-500/30">*/}
                            {/*                Economisești {(data.price - discountedPrice).toFixed(2)} lei*/}
                            {/*            </span>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    */}
                            {/*    <ButtonIcon */}
                            {/*        className="w-full bg-slate-700/30 hover:bg-slate-600/30 text-slate-100 py-4 px-6 rounded-lg transition-colors duration-200 text-lg font-semibold"*/}
                            {/*        icon={<ShoppingBagIcon className="h-6 w-6" />}*/}
                            {/*    >*/}
                            {/*        Adaugă în coș*/}
                            {/*    </ButtonIcon>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <TrustCard icon={<TruckIcon />} name="Livrare rapidă" description="Livrare în 24-48 ore" />
                        <TrustCard icon={<ShieldCheckIcon />} name="Garanție 2 ani" description="Produs original cu garanție" />
                        <TrustCard icon={<StarIcon />} name="Calitate premium" description="Produse testate și verificate" />
                    </div>
                </div>

                {/* Product Specifications */}
                <div className="bg-slate-800/20 p-8 rounded-2xl border border-slate-600/20">
                    <h2 className="text-2xl font-bold text-slate-100 mb-8 text-center">Specificații produs</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <SpecificationCard name={'Brand'} description={data.brand}/>
                        <SpecificationCard name={'SKU'} description={data.sku}/>
                        <SpecificationCard name={'Stoc disponibil'} description={`${data.stock} bucăți`}/>
                        <SpecificationCard name={'Categorie'} description={data.category}/>
                    </div>
                </div>
        </PageTemplate>
    );
};
