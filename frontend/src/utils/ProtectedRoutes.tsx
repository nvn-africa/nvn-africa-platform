import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

type ProtectedRoutesProps = {
    requiredRole?: string[];               // allowed roles, e.g. ["admin", "volunteer"]
    children?: React.ReactNode;            // optional: allow usage as wrapper
    loginPath?: string;                    // optional override for login redirect
    unauthorizedPath?: string;             // optional override for unauthorized redirect
};

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({
    requiredRole,
    children,
    loginPath = "/login",
    unauthorizedPath = "/unauthorized",
}) => {
    const { user } = useAuth();
    const location = useLocation();

    // Not authenticated -> redirect to login and preserve attempted location
    if (!user) {
        return <Navigate to={loginPath} state={{ from: location }} replace />;
    }

    // Authenticated but lacks role -> redirect to unauthorized page
    if (requiredRole && requiredRole.length > 0) {
        const userRole = (user.role ?? "").toString();
        if (!requiredRole.includes(userRole)) {
            return <Navigate to={unauthorizedPath} replace />;
        }
    }

    // Allowed: render children (if provided) or nested routes via Outlet
    return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoutes;
