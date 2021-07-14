import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import jwt from "jsonwebtoken";

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
    const [checkLogin, setCheckLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("accessToken"));

    let history = useHistory();

    useEffect(() => {
        jwt.verify(JSON.parse(token), "dobadov3", (err, data) => {
            if (err) {
                console.log(err);
                setCheckLogin(false);
            } else {
                setCheckLogin(true);
                history.push("/home");
            }
        });
        if (!checkLogin) {
            history.push("/login");
        } else {
            history.push("/home");
        }
    }, [checkLogin, token]);

    return (
        <AuthContext.Provider value={{ checkLogin, setCheckLogin, setToken }}>
            {children}
        </AuthContext.Provider>
    );
}
