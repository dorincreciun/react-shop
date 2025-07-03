import type {MenuNavLinkType} from "@/features/menu/model/types.ts";
import {APP_ROUTES} from "@/app/routing";

export const useMenuItems = (): MenuNavLinkType[] => {
    return [
        {
            to: APP_ROUTES.HOME,
            name: 'Home'
        },
        {
            to: APP_ROUTES.PRODUCTS,
            name: 'Produse'
        },
        {
            to: APP_ROUTES.ABOUT,
            name: 'Despre'
        },
        {
            to: APP_ROUTES.CONTACT,
            name: "Contact"
        }
    ]
};