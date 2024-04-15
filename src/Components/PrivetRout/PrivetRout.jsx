import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivetRout = ({ children }) => {

    // location add 
    const location = useLocation()
    // console.log(location);

    const { user, loading } = useContext(AuthContext);

    // set Loading
    if (loading) {
        return <div><span className="loading loading-spinner text-warning"></span></div>
    }

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }

    return (
        <div>
            {children}
        </div>
    );
};

PrivetRout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivetRout;