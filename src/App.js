import firebase from 'firebase/App';
import 'firebase/firestore';
import 'firebase/auth';

import useAuthState from 'react-firebase-hooks/auth';
import useCollectionData from 'react-firebase-hooks/firestore';

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
     
    </div>
  );
}

export default App;
