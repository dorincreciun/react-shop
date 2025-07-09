import {useMenuItems} from "@/features/menu/config/menuItems.ts";
import {MenuNavLink} from "@/features/menu/ui/components/MenuNavLink.tsx";
import type {MenuNavLinkType} from "@/features/menu/model/types.ts";

export const Menu = () => {
    const items: MenuNavLinkType[] = useMenuItems();
    return (
        <div>
            <ul className='flex items-center space-x-8'>
                {
                    items.map((item: MenuNavLinkType) => {
                        return (
                            <li key={item.to}>
                                <MenuNavLink {...item}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}