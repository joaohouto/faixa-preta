import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [data, setData] = useState(() => {
        const token = localStorage.getItem("@FaixaPreta:Token");
        const user = localStorage.getItem("@FaixaPreta:User");
  
        if (token && user) {
            api.defaults.headers = {
                "Content-Type": "application/json;charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
                "x-access-token": token
            };

            return { token, user: JSON.parse(user) };
        }
  
      return {};
    });
  
    const signIn = useCallback(async ({ email, password }) => {
        const response = await api.post("/login", {
            email,
            password,
        });

        const { token, user } = response.data;

        localStorage.setItem("@FaixaPreta:Token", token);
        localStorage.setItem("@FaixaPreta:User", JSON.stringify(user));

        api.defaults.headers.authorization = `Bearer ${token}`;

        setData({ token, user });
    }, []);
  
    const signOut = useCallback(() => {
        localStorage.removeItem("@FaixaPreta:Token");
        localStorage.removeItem("@FaixaPreta:User");

        setData({});
    }, []);
  
    const updateUser = useCallback(
        (user) => {
            localStorage.setItem("@FaixaPreta:User", JSON.stringify(user));

            setData({
                token: data.token,
                user,
            });
        },
        [setData, data]
    );
  
    return (
        <AuthContext.Provider
            value={{ user: data.user, signIn, signOut, updateUser }}
        >
            {children}
        </AuthContext.Provider>
    );
  };
  
  export function useAuth() {
    const context = useContext(AuthContext);
  
    if (!context) {
        throw new Error("Context must be used within a ContextProvider");
    }

    return context;
  }
  