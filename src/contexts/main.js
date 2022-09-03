import { createContext, useContext, useState } from "react";

const MainContext = createContext();
const useMainContext = () => useContext(MainContext);

function MainContextProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);


    return (
        <MainContext.Provider value={{ isLoading, setIsLoading }}>
            { children }
        </MainContext.Provider>
    )
}

export { MainContext, useMainContext };
export default MainContextProvider;