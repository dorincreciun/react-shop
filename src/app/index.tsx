import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router";
import {RootLayout} from "./layouts";
import '@a1rth/css-normalize';
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <RootLayout/>
        </BrowserRouter>
    </StrictMode>,
)
