import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const users = localStorage.getItem("user");
        return users ? JSON.parse(users) : null
    })
    const login = (token, role) => {
        const userData = { token, role }
        setUser(userData)
        localStorage.setItem("user", JSON.stringify(userData))
    }
    return (
        <AuthContext.Provider value={{ user, login }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext);