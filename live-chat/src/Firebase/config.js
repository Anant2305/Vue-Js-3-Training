import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAAW51QaH1cuXROTI6KYbRyOicq0OtAT08",
    authDomain: "vue-firebase-site-9752c.firebaseapp.com",
    projectId: "vue-firebase-site-9752c",
    storageBucket: "vue-firebase-site-9752c.appspot.com",
    messagingSenderId: "648136473443",
    appId: "1:648136473443:web:a20b316d18472c3873b156"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp


  export { projectAuth, projectFirestore, timestamp }