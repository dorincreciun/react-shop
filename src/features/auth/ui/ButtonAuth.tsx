import {UserCircleIcon, UserPlusIcon} from "@heroicons/react/16/solid";
import {ButtonIcon} from "@/shared";
import {useNavigate} from "react-router";
import {APP_ROUTES} from "@/app/routing";
import {useAuthStore} from "@/features/auth";

export const ButtonAuth = () => {
    const {isAuthorization} = useAuthStore()
    const navigate = useNavigate();

    if (isAuthorization) {
        return <ButtonIcon icon={<UserCircleIcon className="h-6 w-6"/>}/>
    } else {
        return <ButtonIcon onClick={() => navigate(APP_ROUTES.LOGIN)} icon={<UserPlusIcon className="h-6 w-6"/>}/>
    }
};