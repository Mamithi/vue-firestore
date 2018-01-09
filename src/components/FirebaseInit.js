import firebase from 'firebase'
import 'firebase/firestore'
import FirebaseConfig from './FirebaseConfig'

const firebaseApp = firebase.intializeApp(FirebaseConfig)
export default firebaseApp.firestore()