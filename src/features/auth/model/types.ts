import type {ReactNode} from "react";

export type AuthType = {
    isAuthorization: boolean;
    setLogin: () => void;
    setLogout: () => void;
};

export type AuthProviderType = {
    children: ReactNode;
}