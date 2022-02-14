import { createContext, useState } from "react";


export const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [courses, setCourses] = useState([]);
    return (
        <div>
            <DataContext.Provider
                value={[
                    courses,
                    setCourses
                ]}
            >
                {children}
            </DataContext.Provider>
        </div >
    );
};

export default DataProvider;