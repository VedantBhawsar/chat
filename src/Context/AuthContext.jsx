import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext()

export const AuthContextProvidor = ({ children }) => {
    const [CurrentUser, setCurrentUser] = useState({})
    useEffect(() => {
        const useSub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            console.log(user)
        })
    }, [])
    return (
        <AuthContext.Provider value={{ CurrentUser }}>
            {children}
        </AuthContext.Provider >

    )
}