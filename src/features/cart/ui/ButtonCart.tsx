import {ShoppingBagIcon} from "@heroicons/react/16/solid";
import {Button} from "@/shared";

export const ButtonCart = () => {
    return (
        <Button
            content={'icon'}
            size={'small'}
            badge={10}
            icon={<ShoppingBagIcon className="h-6 w-6"/>}
        />
    )
}