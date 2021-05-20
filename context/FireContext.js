import { createContext, useEffect , useState } from "react";
import { auth, db } from '../config/firebase' 
import { useRouter } from 'next/router'
import { useHistory } from "react-router";


export const FireContext = createContext()

export const FireProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('')
    const [firstname, setFirstname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

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
            alert(err)
        })
    }
    

    const handleLogin = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then(()=>{
            router.push("/")
            alert("Sie wurden erfolgreich angmeldet")
        })
        .catch((err)=> {
            alert(err)
        })
    }
   
    const handleSignOut = (e) =>{
        e.preventDefault
        auth.signOut()
        .then(() => {
        history.push("login")
      }).catch((error) => {
        alert(err)
      })
    }
    

    const resetPassword = (e) => {
        auth.sendPasswordResetEmail(email)
        .then(() =>{
        alert("check your emails")
        }).catch(()=>{
            alert(err)
    })
    }

    return(
        <FireContext.Provider value={{handleSignup, handleLogin, setEmail, setPassword, setFirstname, currentUser, handleSignOut, resetPassword}} >
            { children }
        </FireContext.Provider>
    )
}
