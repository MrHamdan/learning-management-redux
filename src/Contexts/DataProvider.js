import { createContext, useState } from "react";


export const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    return (
        <div>
            <DataContext.Provider
                value={[
                    cart,
                    setCart
                ]}
            >
                {children}
            </DataContext.Provider>
        </div >
    );
};

export default DataProvider;