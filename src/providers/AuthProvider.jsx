import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types'; 


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading] = useState(true);

    const logInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup (auth,googleProvider);
    }
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logout =() =>{
        setLoading(true);
        return signOut(auth);

    }

    const logIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            console.log('user changed',currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return ()=> {
            unSubscribe();
        }
    },[])


    const authInfo ={
        user,createUser,logout,logIn,loading,logInWithGoogle
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children : PropTypes.node
}

export default AuthProvider;