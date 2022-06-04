import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context";
import { Spinner } from "react-bootstrap";

export const ProtectedRoute = () => {
    const [state] = useContext(UserContext)

    if(state.loading) return<div><Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner></div>
    
    

    return state.data ? <Outlet /> : <Navigate to="/"/>
}