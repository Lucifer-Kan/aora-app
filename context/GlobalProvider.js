import { useEffect, useState, useContext, createContext } from "react";
import { getCurrentUser } from "../lib/appWriteConfig";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    console.log('User in provider', user);
    useEffect(() => {
        getCurrentUser().then((user) => {
            if (user) {
                setIsLoggedIn(true);
                setUser(user);
            }
            else {
                setIsLoggedIn(false);
                setUser(null);
            }
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            setIsLoading(false);
        });
    }, [])

    return <GlobalContext.Provider value={{
        user,
        setUser,
        isLoading,
        setIsLoading,
        isLoggedIn,
        setIsLoggedIn
    }}>
        {children}
    </GlobalContext.Provider>

}