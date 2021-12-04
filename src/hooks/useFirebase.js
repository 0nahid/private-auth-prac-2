import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Components/Firebase/Firebase.init';
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            }).catch((error) => { setError(error.message) })
    }
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
        });
    }, [auth]);
    const logout = () => {
        signOut(auth).then(result => { }).then(error => { })
    }
    return {
        user,
        error,
        signInWithGoogle,
        logout
    }
}
export default useFirebase;