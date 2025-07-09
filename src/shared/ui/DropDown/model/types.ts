import type {ReactNode} from "react";

export interface DropdownContextType {
    isOpen: boolean;
    toggle: () => void;
}

export interface DropdownProviderType extends TriggerType, ContentType {}

export type TriggerType = {
    children: ReactNode
}

export type ContentType = {
    children: ReactNode
}