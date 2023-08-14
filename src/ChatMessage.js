import { Firestore } from 'firebase/firestore'
import React from 'react'
import { auth } from 'firebase/compat/auth';


export default function ChatMessage(props) {
    const {text, uid, photoURL} = props.message;
    const messageClass = uid === auth.currrentUser.uid ? 'sent' : 'received';
    
  return (
   <div className={`message ${messageClass}`}>
    <img src={photoURL}/>
    <p>{text}</p>
   </div>
  )
}
