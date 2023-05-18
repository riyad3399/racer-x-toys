import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }


    useEffect(() => {
      const unsubscribe =  onAuthStateChanged(auth, currentUser => {
          setUser(currentUser)
          console.log('current user;', currentUser);
      })
        return () => {
            return unsubscribe();
        }
    } , [])

  const authInfo = {
      user,
      createUser,
      signIn,
      googleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
