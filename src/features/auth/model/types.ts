import type {ReactNode} from "react";

export type AuthType = {
    isAuthorization: boolean;
    setIsAuthorization: (val: boolean) => void;
};

export type AuthProviderType = {
    children: ReactNode;
}