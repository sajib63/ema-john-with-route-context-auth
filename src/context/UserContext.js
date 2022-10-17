import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';

export const AuthContext = createContext();


const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState('')
const [loading, setLoading]= useState(true);
   


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signInUser=(email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }


    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=> unSubscribe();
    },[])

    const authInfo = { user , createUser ,signInUser, logOut, loading};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;