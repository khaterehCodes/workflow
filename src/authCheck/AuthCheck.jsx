import { Navigate } from "react-router-dom";
import { useAuth } from "../core/context/AouthContext";

function AuthCheck({ children }) {
    const { signUp } = useAuth();
    if (!signUp) {
        return <Navigate to={'/signup'} />
    }
    return children
}

export default AuthCheck;