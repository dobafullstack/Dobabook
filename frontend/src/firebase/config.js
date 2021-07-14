import firebase from "firebase/app";
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAGzjnNDRhNHYiwynu_UW39chDKgy_voEM",
    authDomain: "dobabook.firebaseapp.com",
    projectId: "dobabook",
    storageBucket: "dobabook.appspot.com",
    messagingSenderId: "701760142558",
    appId: "1:701760142558:web:c32db8a46eede0bfcdd64f",
    measurementId: "G-JQZWR3WSN3",
};

firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();

export default firebase;
