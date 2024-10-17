import { createContext, useState } from "react"

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    
    return (
      <AppContext.Provider value={{cart, setCart, searchQuery, setSearchQuery }}>
        {children}
      </AppContext.Provider>
    );
};