import {DropdownContext} from "@/shared/ui/DropDown/model/DropdownContext.ts";
import {type FC, useState} from "react";
import type {DropdownProviderType} from "@/shared/ui/DropDown/model/types.ts";

export const DropdownProvider: FC<DropdownProviderType> = ({children}) =>{
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = (): void => setIsOpen((prev:boolean) => !prev);
    return (
        <DropdownContext.Provider value={{isOpen, toggle}}>
            {children}
        </DropdownContext.Provider>
    )
}