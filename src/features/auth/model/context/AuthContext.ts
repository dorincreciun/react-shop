import {createContext} from "react";
import type {AuthType} from "../types.ts";

export const AuthContext = createContext<AuthType | null>(null);