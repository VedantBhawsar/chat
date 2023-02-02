import { async } from "@firebase/util";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { auth } from '../firebase'

export const AuthContext = createContext()

const AuthContextProvidor = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    // const navigate = useNavigate()

    useEffect(async () => {
        const password = localStorage.getItem('password')
        const email = localStorage.getItem('email')
        if (email && password) {
            try {
                await signInWithEmailAndPassword(auth, email, password).then(
                    (res) => {
                        setCurrentUser(res.user)
                        console.log("sucsses")
                    }
                )
                // navigate("/")
            } catch (err) {
                console.log(err)
            }
        }
    }, [])


    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </AuthContext.Provider >
    )
}

export default AuthContextProvidor