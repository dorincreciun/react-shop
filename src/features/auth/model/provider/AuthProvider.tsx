import {AuthContext} from "../context/AuthContext.ts";
import {type FC, useState} from "react";
import type {AuthProviderType} from "@/features/auth/model/types.ts";

export const AuthProvider: FC<AuthProviderType> = ({children}) => {
    const [isAuthorization, setIsAuthorization] = useState<boolean>(false);
    return (
        <AuthContext.Provider value={{isAuthorization, setIsAuthorization}}>{children}</AuthContext.Provider>
    )
}