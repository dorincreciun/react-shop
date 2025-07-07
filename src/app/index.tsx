import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router";
import {RootLayout} from "./layouts";
import './styles/index.css'
import {AuthProvider} from "@/features/auth";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <RootLayout/>
                </AuthProvider>
            </QueryClientProvider>
        </BrowserRouter>
    </StrictMode>,
)
