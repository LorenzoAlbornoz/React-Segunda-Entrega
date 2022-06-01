import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCD_WYEzsfDWyew3JnTRPlQMEPbpPnOYzs",
  authDomain: "e-comercelorenzo.firebaseapp.com",
  projectId: "e-comercelorenzo",
  storageBucket: "e-comercelorenzo.appspot.com",
  messagingSenderId: "727716629369",
  appId: "1:727716629369:web:ed5432012393f0d4f7fda8"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
  return app
}