import firebase from "firebase/app";
import 'firebase/firestore';

if(!firebase.getApps.length){
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDO_MAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PRJECT_ID,
    })
}

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,  
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDO_MAIN,
//     preojectId: process.env.NEXT_PUBLIC_FIREBASE_PRJECT_ID
// };

// const firebase = initializeApp(firebaseConfig);

export default firebase