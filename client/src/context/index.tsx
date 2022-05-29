import React, { createContext, useState } from "react";
import Axios from "axios";
import axios from "axios";

interface User {
    data: {
        id: string;
        email: string
    } | null;
    error: string | null
    loading: boolean
}

const UserContext = createContext<
    [User, React.Dispatch<React.SetStateAction<User>>]
>([{data: null, loading: true, error: null},() => {}])

const UserProvider = ({chldren}: any) => {
    const [user, setUser] = useState<User>({data: null, loading: true, error: null});

    const token = localStorage.getItem("token");

    if(token) {
        axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
    }

    const fetchUser = async () => {
        
    }
};