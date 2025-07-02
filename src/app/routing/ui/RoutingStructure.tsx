import {Route, Routes} from "react-router";
import {APP_ROUTES} from "@/app/routing";
import {HomePage} from "@/pages";

export const RoutingStructure = () => {
    return (
        <Routes>
            <Route path={APP_ROUTES.HOME} element={<HomePage />}/>
        </Routes>
    )
}