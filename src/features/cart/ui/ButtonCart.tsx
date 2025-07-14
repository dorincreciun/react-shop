import {ShoppingBagIcon} from "@heroicons/react/16/solid";
import {Button} from "@/shared";
import {useNavigate} from "react-router";
import {APP_ROUTES} from "@/app/routing";

export const ButtonCart = () => {
    const navigate = useNavigate();
    return (
        <Button
            onClick={() => {
                navigate(APP_ROUTES.CART)
            }}
            content={'icon'}
            badge={10}
            icon={<ShoppingBagIcon className="h-6 w-6"/>}
        />
    )
}