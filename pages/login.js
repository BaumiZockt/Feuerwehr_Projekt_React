import Link from 'next/link'
import { useContext } from 'react'
import { FireContext } from '../context/FireContext'


const login = () => {


    const value = useContext(FireContext)
    const { setEmail, setPassword, handleLogin } = value

    return (
        <div className="w-full flex justify-center h-screen bg-gray-50 dark:bg-custom-gray-300">
            <div className="my-10 w-3/4 border border-gray-100 shadow-sm bg-white rounded-lg flex justify-center flex-col items-center dark:bg-custom-gray-200 dark:text-white dark:border-custom-gray-200">
                <h4 className="text-3xl mt-10">Log in to your Account</h4>

                <form className="flex flex-col mt-3 flex-start">
                           
                <label htmlFor="email" className="text-sm mb-1 mt-5">Email</label>
                <input required onChange={(e) => {setEmail(e.target.value)}} type="email" name="email" placeholder="Ihre Email Adresse" className="w-62 border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-500" />
                   
                <label htmlFor="password" className="text-sm mb-1 mt-3">Passwort</label>
                <input required onChange={e => setPassword(e.target.value)} type="password" name="password" placeholder="Ihr Passwort" className="w-62 border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-500" />
                <button type="submit" onClick={(e) => handleLogin(e)} className="mt-5 focus:outline-none bg-blue-600 rounded-lg text-white w-26 px-3 py-2 font-semibold cursor-pointer hover:bg-blue-500 transition duration-300">Login</button> 
                </form>
                <p className="text-sm mt-3">Sie haben noch kein Konto?<Link href="/signup"><span className="hover:text-blue-500 transition duration-300 cursor-pointer">Hier Registrieren</span></Link></p>
                <a href="forgotPassword"><p>Forgot Passwort?</p></a>
               </div>
        </div>
    )
}

export default login
