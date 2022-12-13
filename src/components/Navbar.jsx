import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase'
import LogOut from './LogOut'
import Signin from './Signin'


const style={
    nav:`bg-gray-800 h-20 flex max-w-[998px] w-full justify-between items-center p-4 fixed z-10`,
    heading:`text-white text-3xl`
}

function Navbar() {
  const [user]=useAuthState(auth)
  console.log(user)
  return (
    <>
    <div className={style.nav}>
        <h1 className={style.heading}>Chat</h1>
        {user ? <LogOut /> : <Signin />}
    </div>
    </>
  )
}

export default Navbar