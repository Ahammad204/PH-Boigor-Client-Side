/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({children}) => {

    const {user,loading} = useAuth();

    const location = useLocation();

    if(loading){

        return <span className="loading loading-bars loading-lg"></span>

    }

    if(user){

        return children;

    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;