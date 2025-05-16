import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";
import axios from "axios";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

const saveUserToDB = (user) => {
  return axios
    .post("https://ph-boigor-server-side.onrender.com/users", user)
    .then((res) => {
      axios.get(`https://ph-boigor-server-side.onrender.com/users/${user.email}`)
      .then(res => {
        setUser(res.data); 
       
      })
      .catch(err => {
        console.error('Failed to fetch user:', err);
        toast.error('Error fetching user after registration');
      });

      return res.data;
      
    })
    .catch((err) => {
      console.error("User save error:", err);
      throw err;
    });
};


const googleLogin = () => {
  signInWithPopup(auth, googleProvider).then(result => {
    const { displayName, email, photoURL } = result.user;
    const newUser = { name: displayName, email, photo: photoURL, role: 'user' };

    // Save to DB
    axios.post("https://ph-boigor-server-side.onrender.com/users", newUser)
      .then(() => {
        // ✅ Now fetch from DB
        axios.get(`https://ph-boigor-server-side.onrender.com/users/${email}`)
          .then(res => {
            setUser(res.data); // ✅ Set user from DB
            toast.success("Logged in successfully!");
          });
      })
      .catch(err => console.error("Save or fetch error:", err));
  });
};

const githubLogin = () => {
  signInWithPopup(auth, githubProvider).then(result => {
    const { displayName, email, photoURL } = result.user;
    const newUser = { name: displayName, email, photo: photoURL, role: 'user' };

    axios.post("https://ph-boigor-server-side.onrender.com/users", newUser)
      .then(() => {
        axios.get(`https://ph-boigor-server-side.onrender.com/users/${email}`)
          .then(res => {
            setUser(res.data); // ✅ Set user from DB
            toast.success("Logged in successfully!");
          });
      })
      .catch(err => console.error("Save or fetch error:", err));
  });
};



  // email sign up

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update Profile

  const handleUpdateProfile = (name, photo) => {
    signOut(auth);

    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  console.log(auth);

  // logout

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser?.email) {
      const email = firebaseUser.email;
      // 🔁 Fetch user data from MongoDB
      axios.get(`https://ph-boigor-server-side.onrender.com/users/${email}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.error("Fetch user on state change failed", err);
        });

      axios.post("https://ph-boigor-server-side.onrender.com/jwt", { email }, { withCredentials: true });
    } else {
      setUser(null);
      axios.post("https://ph-boigor-server-side.onrender.com/logout", {}, { withCredentials: true });
    }
    setLoading(false);
  });

  return () => unsubscribe(); // Clean up
}, []);


  

  const authentication = {
    googleLogin,
    githubLogin,
    createUser,
    login,
    user,
    logout,
    loading,
    handleUpdateProfile,
    saveUserToDB
  };

  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
