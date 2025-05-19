import React from 'react';
import { AuthContext } from './AuthContext';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { App } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const auth = getAuth(App);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userValue = {
        createUser
    }
    return (
        <AuthContext value={userValue}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;