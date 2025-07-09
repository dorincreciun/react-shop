import {PageTemplate} from "@/shared";
import {SectionHero} from "@/pages/Home/ui/sections/SectionHero.tsx";
import {Dropdown} from "@/shared/ui/DropDown";

export const HomePage = () => {
    return (
        <PageTemplate className='h-full flex items-center justify-center'>
            <SectionHero/>
            <Dropdown>
                <Dropdown.Trigger>
                    wdw
                </Dropdown.Trigger>
            </Dropdown>
        </PageTemplate>
    )
}