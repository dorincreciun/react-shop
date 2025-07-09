import type {FC} from "react";
import type {TriggerType} from "@/shared/ui/DropDown/model/types.ts";

export const Trigger: FC<TriggerType> = () => {
    return <button>Button</button>
};

Trigger.displayName = 'Dropdown.Trigger';