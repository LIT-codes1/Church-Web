import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [username, setUsername] = useState("");

    const setUser = (name) => {
        setUsername(name);
    };

    return (
        <UserContext.Provider value={{ username, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };