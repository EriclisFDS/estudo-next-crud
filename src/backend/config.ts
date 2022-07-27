import { initializeApp, getApps, getApp }from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// if(!firebase.getApps.length){
//     firebase.initializeApp({
//         apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//         authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDO_MAIN,
//         projectId: process.env.NEXT_PUBLIC_FIREBASE_PRJECT_ID,
//     })
// }

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,  
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDO_MAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

const app = !getApps().length ? initializeApp( firebaseConfig ) : getApp()
const dataBase = getFirestore(app)

export { dataBase }