import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";

const PrivateRoutes = ({ children }) => {
  const { loader, user } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  const loaderContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Adjust this value based on your container's height
  };

  if (loader) {
    return (
      <div style={loaderContainerStyle}>
        <BallTriangle
          height={250}
          width={250}
          radius={5}
          color="#0000FF"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoutes;
