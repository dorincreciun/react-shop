import {UserCircleIcon, UserPlusIcon} from "@heroicons/react/16/solid";
import {Button} from "@/shared";
import {useNavigate} from "react-router";
import {APP_ROUTES} from "@/app/routing";
import {useAuthStore} from "@/features/auth";

export const ButtonAuth = () => {
    const {isAuthorization} = useAuthStore()
    const navigate = useNavigate();

    if (isAuthorization) {
        return (
            <Button
                content={'icon'}
                icon={<UserCircleIcon className="h-6 w-6"/>}
            />
        )
    } else {
        return (
            <Button
                content={'icon'}
                icon={<UserPlusIcon className="h-6 w-6"/>}
                onClick={() => {
                    navigate(APP_ROUTES.LOGIN)
                }}
            />
        )
    }
};