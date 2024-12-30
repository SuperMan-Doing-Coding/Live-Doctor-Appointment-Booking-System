import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => { // Changed Props to props
    const value = {
        // Add your state or functions here
    };

    return (
        <AppContext.Provider value={value}>
            {props.children} {/* This will now correctly reference props */}
        </AppContext.Provider>
    );
}

export default AppContextProvider;