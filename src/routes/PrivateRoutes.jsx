/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
// import { Oval } from 'react-loader-spinner'
import Spinner from "../components/Spinner/Spinner";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoutes;
