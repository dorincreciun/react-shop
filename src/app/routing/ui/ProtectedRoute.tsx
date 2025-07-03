import { useAuth } from "@/features/auth";
import { Navigate, Outlet } from "react-router-dom";
import { APP_ROUTES } from "@/app/routing";

export const ProtectedRoute = () => {
    const { isAuthorization } = useAuth();

    if (!isAuthorization) {
        return (
            <Navigate to={APP_ROUTES.LOGIN} replace />
        );
    }

    return <Outlet />;
};