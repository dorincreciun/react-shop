import {ShoppingBagIcon} from "@heroicons/react/16/solid";
import {ButtonIcon} from "@/shared";

export const ButtonCart = () => {
    return <ButtonIcon badge={{count: 100}} icon={<ShoppingBagIcon className="h-6 w-6"/>}/>
}