import { createContext, useState } from "react";


export const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [coursesData, setCoursesData] = useState([]);
    return (
        <div>
            <DataContext.Provider
                value={[
                    coursesData,
                    setCoursesData
                ]}
            >
                {children}
            </DataContext.Provider>
        </div >
    );
};

export default DataProvider;