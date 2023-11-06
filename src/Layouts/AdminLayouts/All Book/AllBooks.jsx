import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const AllBooks = () => {

    
    const { user } = useContext(AuthContext)
    if (user?.email !== import.meta.env.VITE_ADMIN_EMAIL) {

        return <Navigate to={"/"}></Navigate>

    }


    return (
        <div>
            
        </div>
    );
};

export default AllBooks;