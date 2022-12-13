import React from 'react';
import { auth } from '../firebase/firebase';




const Message = ({ message }) => {

  const style = {
    message: `flex items-center shadow-xl m-4 p-4 min-w-[150px] break-all `,
    name: `text-gray-600 text-xs ${message.uid===auth.currentUser.uid?"flex-row-reverse text-end float-right":"float-left text-start"}`,
    sent: `bg-[#395dff] text-white flex-row-reverse p-1 text-end float-right ml-[55%] `,
    received: `bg-[#e5e5ea] mr-[55%] text-black p-1 float-left`,
  };
  const messageClass = 
  message.uid === auth.currentUser.uid
  ? `${style.sent}`
  : `${style.received}`


  return (
    <div className="flex flex-col">
        <p className={style.name}>{message.name}</p>

      <div className={`${style.message} ${messageClass} `}>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;