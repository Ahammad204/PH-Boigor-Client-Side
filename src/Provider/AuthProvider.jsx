import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";



export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true);


    const googleLogin = () => {

        return signInWithPopup(auth,googleProvider)

    }

    // Github Login

    const githubLogin = () => {

        return signInWithPopup(auth,githubProvider)

    }

    // email sign up

    const createUser = (email,password)=> {
        
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }

    // login user

    const login = (email, password) => {

        setLoading(true)
        return signInWithEmailAndPassword (auth,email,password)

    }

    // Update Profile

    const handleUpdateProfile = (name, photo) => {

       signOut(auth)

        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
      
    }

    console.log(auth)

    // logout

    const logout = () => {

        setLoading(true)
        return signOut(auth)

    }

   useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
       
        setUser(user)
        setLoading(false)
    
    
    });


   },[])

   console.log(user)

  
    

    const authentication = {

        googleLogin,
        githubLogin,
        createUser,
        login,
        user,
        logout,
        loading,
        handleUpdateProfile
    }



    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;