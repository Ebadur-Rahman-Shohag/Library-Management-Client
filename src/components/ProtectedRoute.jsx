import React from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContect";
import { Navigate } from "react-router";

function ProtectedRoute({ children }) {

    const { user } = useContext(AuthContext);
    return (
        user ? children : <Navigate to="/login" />
    )
}
export default ProtectedRoute;