 import  firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBX1hYmuMOin762o2AbVCDL2owl6CHlIls",
  authDomain: "attendenceapp1-92fe5.firebaseapp.com",
  databaseURL: "https://attendenceapp1-92fe5-default-rtdb.firebaseio.com",
  projectId: "attendenceapp1-92fe5",
  storageBucket: "attendenceapp1-92fe5.appspot.com",
  messagingSenderId: "350391245875",
  appId: "1:350391245875:web:39ad57f38ce13caa659746"
};
firebase.initializeApp(firebaseConfig)
  export default firebase.database()


  