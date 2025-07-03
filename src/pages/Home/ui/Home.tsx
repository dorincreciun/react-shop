import {PageTemplate} from "@/shared";
import {SectionHero} from "@/pages/Home/ui/sections/SectionHero.tsx";

export const HomePage = () => {
    return (
        <PageTemplate className='h-full flex items-center justify-center'>
            <SectionHero/>
        </PageTemplate>
    )
}