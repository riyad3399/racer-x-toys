import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { loader, user } = useContext(AuthContext)
    
    if (loader) {
        return <button className="btn loading btn-primary my-4">loading..</button>
    }

    if (user) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;