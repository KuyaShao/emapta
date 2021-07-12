import firebase from "firebase/app";
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAMYKKI9LLlqSV-BoPgARNjl3kc4GXW-UM",
  authDomain: "emapta-test.firebaseapp.com",
  projectId: "emapta-test",
  storageBucket: "emapta-test.appspot.com",
  messagingSenderId: "75747316309",
  appId: "1:75747316309:web:323f9b0c817642c4797adc"
};

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp
  export {projectFirestore,timestamp}