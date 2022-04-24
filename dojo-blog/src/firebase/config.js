import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAAW51QaH1cuXROTI6KYbRyOicq0OtAT08",
    authDomain: "vue-firebase-site-9752c.firebaseapp.com",
    projectId: "vue-firebase-site-9752c",
    storageBucket: "vue-firebase-site-9752c.appspot.com",
    messagingSenderId: "648136473443",
    appId: "1:648136473443:web:9b3f5afb9722176773b156"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }