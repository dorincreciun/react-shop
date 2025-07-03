import {Routes} from "react-router-dom";
import {PublicRoutes} from "./PublicRoutes";
import {PrivateRoutes} from "./PrivateRoutes";
import {FallbackRoutes} from "./FallbackRoutes";

export const AppRouter = () => {
    return (
        <Routes>
            {PublicRoutes()}
            {PrivateRoutes()}
            {FallbackRoutes()}
        </Routes>
    )
}