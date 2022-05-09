import { initializeApp } from 'firebase/app'
import { getFirestore }  from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCbgGzWvx5sJFnLfnptySMBp9QH5Av5Hls",
    authDomain: "fb9-reading-list-af9de.firebaseapp.com",
    projectId: "fb9-reading-list-af9de",
    storageBucket: "fb9-reading-list-af9de.appspot.com",  
    messagingSenderId: "786263921709",  
    appId: "1:786263921709:web:b4f4c1ce4ec572aeba94a4"  
  };

  //init firebase
  initializeApp(firebaseConfig)

  //init services
  const db = getFirestore()
  const auth = getAuth()

  export { db, auth }