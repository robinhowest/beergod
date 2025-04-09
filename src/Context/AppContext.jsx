import { createContext, useEffect, useState } from "react"

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    useEffect(() => {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }, []);
    
    return (
      <AppContext.Provider value={{cart, setCart, searchQuery, setSearchQuery }}>
        {children}
      </AppContext.Provider>
    );
};