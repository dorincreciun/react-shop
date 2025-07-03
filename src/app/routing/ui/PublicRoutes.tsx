import {Route} from "react-router-dom";
import {APP_ROUTES} from "@/app/routing";
import {AboutPage, AuthPage, ContactPage, HomePage} from "@/pages";

export const PublicRoutes = () => (
    <>
        <Route path={APP_ROUTES.HOME} element={<HomePage />} />
        <Route path={APP_ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={APP_ROUTES.CONTACT} element={<ContactPage/>}/>
        <Route path={APP_ROUTES.LOGIN} element={<AuthPage />} />
    </>
);
