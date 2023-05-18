import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  const AuthContext = createContext(null);
  const [user, setUser] = useState(null);

  const authInfo = {
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
