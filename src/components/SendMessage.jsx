import React, { useState } from 'react';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import { auth, db } from '../firebase/firebase';

const style = {
  form: `h-12 w-full max-w-[1000px] flex text-xl fixed bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  button: `w-[20%] bg-green-500`,
};

const SendMessage = ({scroll}) => {
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault()
    if (input === '') {
        alert('Please enter a valid message')
        return
    }
    const {uid, displayName} = auth.currentUser
    await addDoc(collection(db, 'messages'), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
    })
    setInput('')
    scroll.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type='text'
        placeholder='Message'
      />
      <button className={style.button} type='submit'>
        Send
      </button>
    </form>
  );
};

export default SendMessage;