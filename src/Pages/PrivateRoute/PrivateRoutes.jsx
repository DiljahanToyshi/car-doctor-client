import { useContext } from "react";
import { AuthContext } from "../../Provieders/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {
const {user,loading} = useContext(AuthContext);
const location = useLocation();
if(loading){
    return <progress className="progress w-56 md:ml-48"></progress>; 
}
if(user?.email){
    return children;
}
    return (
        <Navigate to='/login' state={{from: location}} ></Navigate>
    );
};

export default PrivateRoutes;