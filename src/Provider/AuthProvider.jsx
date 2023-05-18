import { createContext, useState } from "react";

const AuthProvider = ({ children }) => {

  const AuthContext = createContext(null);
  const [user, setUser] = useState(null);
    




  const authInfo = {
    user,
  };

  return (
      <AuthContext.Provider value={authInfo}>
          {children}
      </AuthContext.Provider>
  );
};

export default AuthProvider;
