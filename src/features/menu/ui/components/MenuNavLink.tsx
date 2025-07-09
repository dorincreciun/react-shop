import {NavLink} from "react-router";
import type {FC} from "react";
import type {MenuNavLinkType} from "../../model/types";
import {cn} from "@sglara/cn";

export const MenuNavLink: FC<MenuNavLinkType> = ({to, name}) => {
    return (
        <NavLink
            to={to}
            className={({isActive}) =>
                cn(
                    "hover:text-slate-100 transition-colors font-medium",
                    isActive ? "text-slate-500"
                             : "text-slate-300"
                )
            }
        >
            {name}
        </NavLink>
    );
};
