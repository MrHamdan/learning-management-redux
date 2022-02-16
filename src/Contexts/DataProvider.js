import { createContext, useState } from "react";


export const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const vat = 0.15;

    
    return (
        <div>
            <DataContext.Provider
                value={[
                    cart,
                    setCart,
                    subTotal,
                    setSubTotal,
                    total,
                    setTotal,
                    vat
                ]}
            >
                {children}
            </DataContext.Provider>
        </div >
    );
};

export default DataProvider;