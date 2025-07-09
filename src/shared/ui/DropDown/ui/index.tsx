import {DropdownProvider} from "@/shared/ui/DropDown/model/DropdownProvider.tsx";
import {Trigger} from "@/shared/ui/DropDown/ui/components/Trigger.tsx";
import {Content} from "@/shared/ui/DropDown/ui/components/Content.tsx";
import type {FC} from "react";
import type {DropdownProviderType} from "@/shared/ui/DropDown/model/types.ts";

export const Dropdown: FC<DropdownProviderType> = Object.assign(DropdownProvider, {
    Trigger,
    Content
})

Dropdown.displayName = 'DropDown';