import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.ts";
import type { AuthType } from "../types";

export const useAuth = (): AuthType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }
    return context;
};
