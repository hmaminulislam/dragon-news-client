import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    
    const googleSignIn = (gooleProvider) => {
        setLoading(true)
        return signInWithPopup(auth, gooleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signinEamil = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const verifyEamil = () => {
        return sendEmailVerification(auth.currentUser);
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         if(currentUser == null || currentUser.emailVerified) {
            setUser(currentUser);
            setLoading(false);
         }
      });
      return () => {
        unsubscribe();
      };
    }, []);

    const AuthInfo = {
      user,
      googleSignIn,
      logOut,
      createUser,
      signinEamil,
      loading,
      updateUserProfile,
      verifyEamil,
      setLoading,
    };
  return (
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
)};

export default AuthProvider;
