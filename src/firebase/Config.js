import firebase from 'firebase'
import  'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBsudZh8opC_RBt4AQqihQVeS3DxedFokU",
  authDomain: "newp-8906d.firebaseapp.com",
  projectId: "newp-8906d",
  storageBucket: "newp-8906d.appspot.com",
  messagingSenderId: "316851884972",
  appId: "1:316851884972:web:6d2af88ea50adc5192a009",
  measurementId: "G-J6JBNY3J9T"
};
  export default firebase.initializeApp(firebaseConfig)