import {create} from "zustand"
import type {LoaderType} from "@/shared/model/types/Loader.ts";

export const useLoaderStore = create<LoaderType>(set => ({
    visible: false,
    show: (): void => set({visible: true}),
    hide: (): void => set({visible: false}),
}))