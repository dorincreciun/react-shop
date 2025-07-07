import type { FC } from 'react'
import type {PageTemplateProps} from "../model/types.ts";
import {cn} from "@sglara/cn";


export const PageTemplate: FC<PageTemplateProps> = ({ children, className }) => {
    return <main className={cn('flex-1 animate-fade-in max-w-[1440px] w-full mx-auto p-4', className)}>{children}</main>
}
