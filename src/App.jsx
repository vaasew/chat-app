import { useState } from 'react'
import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Chat from './components/Chat'
import { auth } from './firebase/firebase'
import {useAuthState} from "react-firebase-hooks/auth"
import Toggle from './components/Toggle'
import { createContext } from 'react'

export const ThemeContext=createContext()

function App() {
  const [user] = useAuthState(auth)
  
  const [darkMode, setDarkMode] = useState(true)
  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
}



const style={
  appContainer:`max-w-[1000px] mx-auto text-center`,
  sectionContainer:`flex flex-col h-[90vh] mt-10 shadow-xl border overflow-scroll fixed w-full max-w-[1000px] ${darkMode?"dark":"light"}`
}
  return (
   <>
   <ThemeContext.Provider value={darkMode}>
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar/>
        {user ? <Chat /> : null}
      </section>
      <p className="text-xl">
      <Toggle className="fixed" darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      </p>
    </div>
   </ThemeContext.Provider>
   </>
  )
}

export default App
