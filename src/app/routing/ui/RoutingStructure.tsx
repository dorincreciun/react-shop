import {Route, Routes} from "react-router-dom";
import {APP_ROUTES} from "@/app/routing"
import {AuthPage, HomePage, NotFound} from "@/pages";
import {ProtectedRoute} from "@/app/routing/ui/ProtectedRoute.tsx";

export const RoutingStructure = () => {
    return (
        <Routes>
            <Route path={APP_ROUTES.HOME} element={<HomePage />}/>
            <Route path={APP_ROUTES.LOGIN} element={<AuthPage />}/>

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
                <Route path={'/cabinet'} element={<div>Cabinet personal</div>} />
            </Route>

            {/* Fallback */}
            <Route path={'*'} element={<NotFound/>}/>
        </Routes>
    )
}