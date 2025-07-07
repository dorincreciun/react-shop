import { create } from 'zustand';
import type { AuthType } from "@/features/auth";

export const useAuthStore = create<AuthType>((set) => ({
    isAuthorization: false,

    setLogin: () => set({ isAuthorization: true }),

    setLogout: () => set({ isAuthorization: false }),
}));
