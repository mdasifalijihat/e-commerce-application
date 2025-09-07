import React from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";


const AuthProvider = ({ children }) => {
  // create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   user login info
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

   // Google login
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

    // Github login
  const githubProvider = new GithubAuthProvider();
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

   const logOut = () => {
    return signOut(auth);
  };

  const userInfo = {
    createUser,
    loginUser,
    googleLogin,
    githubLogin,
    logOut, 
     

  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
