
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDp5xvyyz3I6hlVzo8meU3N_gyTsPtW57E",
  authDomain: "netflix-249ee.firebaseapp.com",
  projectId: "netflix-249ee",
  storageBucket: "netflix-249ee.appspot.com",
  messagingSenderId: "111771268080",
  appId: "1:111771268080:web:2276453a8bf7b8ba1c6335",
  measurementId: "G-QZ78XR1YZJ"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();
export {auth}