import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'
import { auth } from '../firebase/firebase'




const LogOut = () => {
const signOut = () => {
    signOut(auth)
}

const darkMode=useContext(ThemeContext)

const style = {
    button: `px-4 py-2 ${darkMode?`bg-slate-700 hover:bg-slate-750 text-white`:`bg-gray-200 hover:bg-gray-100`}`
}
return (
    <button onClick={() => auth.signOut()} className={style.button}>
        Logout
    </button>
  )
}

export default LogOut