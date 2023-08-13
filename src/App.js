import firebase from 'firebase/firebase-app';
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import ChatRoom from './ChatRoom';
import './App.css';

firebase.initializeApp ({
 apiKey: "AIzaSyC4TyAF0wblUSpRGOtE2_7l2uXHLHS7vAs",
  authDomain: "chatfirebase-ffb88.firebaseapp.com",
  projectId: "chatfirebase-ffb88",
  storageBucket: "chatfirebase-ffb88.appspot.com",
  messagingSenderId: "768954438815",
  appId: "1:768954438815:web:437cd9ddd305e862a5beaa",
  measurementId: "G-MSKG89X5CK"
});

const authentification = firebase.auth;
const firebasestore = firebase.store;

function App() {
    const [user] = useAuthState(authentification);
  return (
    <div className="App">
     {user ? <ChatRoom/> : <SignIn/>}
    </div>
  );
}
export default App;

function SignIn() {
    const signInWithGoogle = () => {
     const provider = new firebase.auth.GoogleAuthProvider();
     authentification.signInWithPopup(provider);   
    }
    return (
        <button onClick={signInWithGoogle}> Sign in with Google </button>
    )

    function SignOut () {

        return authentification.currentUser && (
            <button onClick={()=> authentification.signOut()}> Sign Out </button>    
        )
    }
}


