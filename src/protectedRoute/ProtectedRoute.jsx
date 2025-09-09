import { Navigate } from "react-router-dom";
import { useAuth } from "../core/context/AouthContext";

function ProtectedRoute({ children, role }) {
    const { user } = useAuth();
    if (!user) return <Navigate to={'/login'} />
    if (role && user.role !== role) return <Navigate to={'/controle'} />
    return children
}

export default ProtectedRoute;