import { useState } from 'react'
import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Chat from './components/Chat'
import { auth } from './firebase/firebase'
import {useAuthState} from "react-firebase-hooks/auth"

const style={
  appContainer:`max-w-[720px] mx-auto text-center`,
  sectionContainer:`flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border overflow-scroll relative`
}

function App() {
  const [user] = useAuthState(auth)

  return (
   <>
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar/>
        {user ? <Chat /> : null}
        
      </section>
    </div>
   </>
  )
}

export default App
