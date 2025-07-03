import {Route} from "react-router-dom";
import {AuthGuard} from "@/app/routing/guards/AuthGuard.tsx";

export const PrivateRoutes = () => {
    return (
        <Route element={<AuthGuard/>}>
            <Route path={'/cabinet'} element={<div>Cabinet personal</div>}/>
        </Route>
    )
};