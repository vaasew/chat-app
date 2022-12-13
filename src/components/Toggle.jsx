import React from 'react'
import {BsToggleOn } from "react-icons/bs";
import {BsToggleOff } from "react-icons/bs";

function Toggle(props) {
  return (
    <>
     <nav className="grid grid-cols-2 w-full place-content-between items-center">
           {props.darkMode? <BsToggleOn onClick={props.toggleDarkMode} 
                 className="self-left justify-self-end"/>:<BsToggleOff onClick={props.toggleDarkMode} className="self-left justify-self-end"/>}
        </nav>
    </>
  )
}

export default Toggle