import type {ReactNode} from "react";

export const PageTemplate = ({children, className}: { children: ReactNode, className: string }) => {
    return <main className={className ? className : null}>{children}</main>
}