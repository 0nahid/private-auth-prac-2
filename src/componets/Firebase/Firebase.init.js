import { initializeApp } from "firebase/app";
import firebaseConfig from './Firebse';

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;