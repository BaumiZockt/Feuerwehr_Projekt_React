import { createContext, useEffect, useState } from "react";
import { auth, db } from '../config/firebase' 
import { useRouter } from 'next/router'

export const FireContext = createContext()

export const FireProvider = ({ children }) => {

    const [user, setUser] = useState('')
    const [firstname, setFirstname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    const handleSignup = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
        .then((cred) => {
            //"/" === homepage
            router.push("/")

            db.collection("users").doc(cred.user.uid).set({
                firstname: firstname, 
            })

        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then(()=>{
            router.push("/")
        })
        .catch((err)=> {
            console.log(err)
        })
    }



    return(
        <FireContext.Provider value={{handleSignup, handleLogin, setEmail, setPassword, setFirstname}} >
            { children }
        </FireContext.Provider>
    )
}
