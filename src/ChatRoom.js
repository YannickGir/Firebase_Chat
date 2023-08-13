import { Firestore } from 'firebase/firestore'
import React from 'react';
import ChatMessage from './ChatMessage';
import {useCollectionData} from 'react-firebase-hooks/firestore';

export default function ChatRoom() {
    const messagesRef = Firestore.collection('messages');
    const query = messagesRef.orderBy('createAt').limit(25);

    const [messages] = useCollectionData(query, {idField: 'id'});
  return (
    <div>{messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}</div>
  )
}
