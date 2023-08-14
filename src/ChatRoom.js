import { Firestore } from 'firebase/compat/firestore'
import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import firebase from 'firebase/compat/app';
import { auth } from 'firebase/compat/auth';

export default function ChatRoom() {
    const messagesRef = firebase.firestore().collection('messages');
    const query = messagesRef.orderBy('createAt').limit(25);
    const [messages] = useCollectionData(query, {idField: 'id'});
  const [formValue, setFormValue]= useState('');
    const sendMessage = async(e) => {
        e.preventDefault();
        const {uid, photoURL} = auth.currentUser;
    await messagesRef.add ({
        text:formValue,
        createdAt:firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
    })
    setFormValue('');
    }
  
  return (
    <>
    <div>{messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}</div>
  
    <form onSubmit={sendMessage
    }>
<input Value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
        <button type="submit">send</button>
    </form>
    </>
  
    )
}
