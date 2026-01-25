import { createContext } from "react";

export const DataContext = createContext();

const UserContext = ({children})=>{
    const username = "Shreyansh";
    return (
        <div>
            <DataContext.Provider value={{username}}>
                {children}
            </DataContext.Provider>
        </div>
    )
};

export default UserContext;