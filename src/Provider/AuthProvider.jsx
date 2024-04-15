
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { Helmet } from "react-helmet";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [dynamicTitle, setDynamicTitle] = useState('Estate');
    const [loading, setLoading] = useState(true);
    // console.log(loading);


    // Creat New user
    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Update User Profile
    const updateUserProfile = (name, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })

    }

    // Sign In with Password
    const signInPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Logout section
    const logOut = () => {
        setLoading(false);
        return signOut(auth);
    }

    // UseState changed
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, currentUser => {
            // console.log('user in th e state changed', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubcribe();
        }
    }, [])


    // Setup Dynamic Title
    useEffect(() => {
        const updateTitle = (newTitle) => {
            setDynamicTitle(newTitle);
        };
        return () => {
            updateTitle();
        };
    }, []);


    // Output Info
    const authInfo = {
        user,
        loading,
        creatUser,
        updateUserProfile,
        signInPassword,
        logOut,
        dynamicTitle,
        updateTitle: setDynamicTitle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            <Helmet>
                <title>{dynamicTitle}</title>
                <meta charset="UTF-8" />
                <link rel="icon" type="" href="/public/Real Estate.svg" />
            </Helmet>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;