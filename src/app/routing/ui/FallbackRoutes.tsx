import {NotFound} from "@/pages";
import {Route} from "react-router-dom";

export const FallbackRoutes = () => {
    return <Route path={'*'} element={<NotFound/>}/>
};