import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router";
import {RootLayout} from "./layouts";
import './styles/index.css'
import {AuthProvider} from "@/features/auth";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <RootLayout/>
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>,
)
