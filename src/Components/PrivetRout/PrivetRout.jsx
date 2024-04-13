import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRout = ( {children} ) => {
    
    // location add 
    const location = useLocation()
    console.log(location);

    const { user } = useContext(AuthContext)

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }

    return (
        <div>
            {children} 
        </div>
    );
};

export default PrivetRout;