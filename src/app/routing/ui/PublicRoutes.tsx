import {Route} from "react-router-dom";
import {APP_ROUTES} from "@/app/routing";
import {AboutPage, AuthPage, ContactPage, HomePage, ProductPage, ProductsPage} from "@/pages";

export const PublicRoutes = () => (
    <>
            <Route path={APP_ROUTES.HOME} element={<HomePage/>}/>
            <Route path={APP_ROUTES.ABOUT} element={<AboutPage/>}/>
            <Route path={APP_ROUTES.CONTACT} element={<ContactPage/>}/>

            {/* Products */}
            <Route path={APP_ROUTES.PRODUCTS}>
                    <Route index element={<ProductsPage/>}/>
                    <Route path=":product" element={<ProductPage/>}/>
            </Route>

            {/* Auth */}
            <Route path={APP_ROUTES.LOGIN} element={<AuthPage/>}/>
    </>
);
