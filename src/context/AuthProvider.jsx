import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { App } from '../firebase/firebase.init';
import Loader from '../components/loader/Loader';

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()
    const auth = getAuth(App);
    const provider = new GoogleAuthProvider();

    // if (loading) {
    //     return <Loader />
    // }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const google = () => {
        setLoading(true)
        signInWithPopup(auth, provider)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const update = (name, photoUrl) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        })
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        });
        return () => unsubscribe;
    }, [auth])


    const userValue = {
        createUser,
        user,
        signIn,
        logOut,
        google,
        loading,
        setLoading,
        update
    }
    return (
        <AuthContext value={userValue}>
            {
                loading ? <Loader /> : children
            }
        </AuthContext>
    );
};

export default AuthProvider;