import type { FC } from 'react'
import type {PageTemplateProps} from "../model/types.ts";


export const PageTemplate: FC<PageTemplateProps> = ({ children, className }) => {
    return <main className={className}>{children}</main>
}
