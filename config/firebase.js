import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyB6oiatCeafguybwpwK4MJT17XojJwMVyk",
  authDomain: "feuerwehr-test-99a93.firebaseapp.com",
  projectId: "feuerwehr-test-99a93",
  storageBucket: "feuerwehr-test-99a93.appspot.com",
  messagingSenderId: "640700097197",
  appId: "1:640700097197:web:16595fd5449a831b605c24"
};

if(!firebase.apps.length)
  firebase.initializeApp(config)

export const fb = firebase
export const auth = firebase.auth()
export const db = firebase.firestore()
