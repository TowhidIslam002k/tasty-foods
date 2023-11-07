import { useState } from 'react';
import { createContext } from 'react';
import app from '../UTILITIES/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect } from 'react';

export const UserContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const emailVerify = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }

    const updateProfileInfo = (data) => {
        setLoading(true)
        return updateProfile(auth.currentUser, data)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const githubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const passReset = (email) => {
        sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return()=>unSubscribe();
    },[])

    const userInfo = {
        user,
        loading,
        createUser,
        loginUser,
        emailVerify,
        updateProfileInfo,
        googleSignIn,
        githubSignIn,
        logOut,
        passReset
    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider >
    );
};

export default AuthContext;