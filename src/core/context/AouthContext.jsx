import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const users = localStorage.getItem("user");
        return users ? JSON.parse(users) : null
    });
    const [signUpUser, setSignUpUser] = useState(() => {
        return localStorage.getItem('signUpUser') === 'true'
    })
    const login = (token, role) => {
        const userData = { token, role }
        setUser(userData)
        localStorage.setItem("user", JSON.stringify(userData))
    };
    const signUp=()=>{
        setSignUpUser(true)
        localStorage.setItem('signUpUser','true')
    }
    return (
        <AuthContext.Provider value={{ user, login ,signUp}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext);