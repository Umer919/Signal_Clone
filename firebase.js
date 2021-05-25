
import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBIkxudCIgk91G4EVCLd6vzgZG3UcLZmlc",
    authDomain: "signal-clone-yt-build-53ce1.firebaseapp.com",
    projectId: "signal-clone-yt-build-53ce1",
    storageBucket: "signal-clone-yt-build-53ce1.appspot.com",
    messagingSenderId: "458888150789",
    appId: "1:458888150789:web:cf64454361c9f52028016c"
  };
let app;
if (firebase.apps.length === 0){
  app  = firebase.initializeApp(firebaseConfig)

}  else {
  app = firebase.app();
}

const db = app.firestore();

const auth = firebase.auth();
export { db, auth};
  