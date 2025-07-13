import {PageTemplate} from "@/shared";
import {SectionHero} from "@/pages/Home/ui/sections/SectionHero.tsx";
import {SectionBrands} from "@/pages/Home/ui/sections/SectionBrands.tsx";
import {SectionCategory} from "@/pages/Home/ui/sections/SectionCategory.tsx";
import {SectionTopProducts} from "@/pages/Home/ui/sections/SectionTopProducts.tsx";
import {SectionBlogs} from "@/pages/Home/ui/sections/SectionBlogs.tsx";

export const HomePage = () => {
    return (
        <PageTemplate className='h-full flex flex-col gap-6 items-center justify-center'>
            <SectionHero/>
            <SectionBrands />
            <SectionCategory />
            <SectionTopProducts />
            <SectionBlogs />
        </PageTemplate>
    )
}