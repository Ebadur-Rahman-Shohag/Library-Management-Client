import AuthContext from "./AuthContect";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase";
import { useState, useEffect } from "react";
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const provider = new GoogleAuthProvider();

    // login with google
    const loginWithGoogle = () => {
        // setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // register user
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update user profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, {
            displayName: profile.displayName,
            photoURL: profile.photoURL
        })
    }

    // logout user
    const logoutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user)
                setLoading(false)
            } else {
                setUser(null)
                setLoading(false)
            }
        })
        return () => unsubscribe()
    }, [])

    const value = {
        registerUser,
        loginUser,
        logoutUser,
        user,
        setUser,
        loading,
        setLoading,
        loginWithGoogle,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
