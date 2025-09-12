import { Navigate } from "react-router-dom";
import { useAuth } from "../core/context/AouthContext";

function ProtectedRoute({ children, role }) {
    const { user } = useAuth();
    if (!user) return <Navigate to={'/login'} />
    if (role && user.role !== role) {
        if (user.role === 'editor') {
            return <Navigate to={'/controle'} />
        }
        if (user.role === 'reader') {
            return <Navigate to={'/'} />
        }
        if (user.role === 'owner') return children
    }
    return children
}

export default ProtectedRoute;