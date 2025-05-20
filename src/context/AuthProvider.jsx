import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { App } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const auth = getAuth(App);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        });
        return () => unsubscribe;
    }, [auth])


    const userValue = {
        createUser,
        user
    }
    return (
        <AuthContext value={userValue}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;