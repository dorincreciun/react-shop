import type {FC} from "react";
import type {ContentType} from "@/shared/ui/DropDown/model/types.ts";

export const Content: FC<ContentType> = () => {
    return <div>Content dropdown</div>
}

Content.displayName = 'Dropdown.Content'