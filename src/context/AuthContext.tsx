// storing the signin Session in react context
import { getCurrentUser } from "@/lib/appwrite/api";
import { IUser } from "@/types";
import React, { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export const INITIAL_USER = {
    id: '',
    name: '',
    username: '',
    email: '',
    imageUrl: '',
    bio: ''
}


// It is to know whether we have a logged in user at all times 
const INITIAL_STATE = {
    user: INITIAL_USER,
    isLoading: false,
    isAuthenticated: false,
    setUser: () => { },
    setIsAuthenticated: () => { },
    checkAuthUser: async () => false as boolean
}

type IContextType = {
    user: IUser;
    isLoading: boolean;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    checkAuthUser: () => Promise<boolean>;
};


const AuthContext = createContext<IContextType>(INITIAL_STATE);

// It wraps the entier app and provides the access to the context
const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const navigate = useNavigate()
    const [user, setUser] = useState<IUser>(INITIAL_USER);
    // user is of type IUser and is set to INITIAL_USER

    const [isLoading, setIsLoading] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const checkAuthUser = async () => {
        try {
            // we will get to the currently logged in user account 
            const currentAccount = await getCurrentUser();

            if (currentAccount) {
                setUser({
                    id: currentAccount.$id,
                    name: currentAccount.name,
                    username: currentAccount.username,
                    email: currentAccount.email,
                    imageUrl: currentAccount.imageUrl,
                    bio: currentAccount.bio,
                });
                setIsAuthenticated(true);

                return true;
            }

            // if current account is not logged in, then return false
            return false;

        } catch (error) {
            console.log("Error: User is not Authenticated", error)
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    const value = {
        user,
        setUser,
        isLoading,
        setIsLoading,
        isAuthenticated,
        setIsAuthenticated,
        checkAuthUser
    }


    // checkAuthUser has to be called Whenever we reload our page, and for that we will use useEffect 
    useEffect(() => {
        const cookieFallback = localStorage.getItem("cookieFallback");

        if (cookieFallback === "[]" || cookieFallback === null || cookieFallback === undefined) {
            navigate("/sign-in");
        }

        checkAuthUser();
    }, [])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider


export const useUserContext = () => useContext(AuthContext)