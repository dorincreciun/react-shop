import {useAuth} from "@/features/auth";
import {UserCircleIcon, UserPlusIcon} from "@heroicons/react/16/solid";
import {ButtonIcon} from "@/shared";

export const AuthButton = () => {
    const {isAuthorization} = useAuth()

    if (isAuthorization) {
        return <ButtonIcon icon={<UserCircleIcon className="h-6 w-6"/>}/>
    } else {
        return <ButtonIcon icon={<UserPlusIcon className="h-6 w-6"/>}/>
    }
};