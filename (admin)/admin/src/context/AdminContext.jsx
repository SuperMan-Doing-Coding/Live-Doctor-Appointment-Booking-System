import { createContext } from "react";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
    const value = {
        // Add your state or functions here
    };

    return (
        <AdminContext.Provider value={value}> {/* Corrected from AppContext to AdminContext */}
            {props.children}
        </AdminContext.Provider>
    );
}

export default AdminContextProvider;