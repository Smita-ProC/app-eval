import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDFiyiMb-0X8RpojwJbnaEWJJ3sqIaAX5M",
    authDomain: "myapp-409a7.firebaseapp.com",
    databaseURL: "https://myapp-409a7-default-rtdb.firebaseio.com",
    projectId: "myapp-409a7",
    storageBucket: "myapp-409a7.appspot.com",
    messagingSenderId: "603567717136",
    appId: "1:603567717136:web:c43e2dec2cb7583587c395"
  };


  if(!firebase.app.length){
    firebase.initializeApp(firebaseConfig)
  }

export default firebase.firestore()