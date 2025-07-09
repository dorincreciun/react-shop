import {createContext} from "react";
import type {DropdownContextType} from "@/shared/ui/DropDown/model/types.ts";

export const DropdownContext = createContext<DropdownContextType>({
    isOpen: false,
    toggle: (): void => {}
});