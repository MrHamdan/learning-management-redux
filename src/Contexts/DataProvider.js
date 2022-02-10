import { createContext, useState } from "react";


export const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [courseData, setCourseData] = useState([]);
    return (
        <div>
            <DataContext.Provider
                value={[
                    courseData,
                    setCourseData
                ]}
            >
                {children}
            </DataContext.Provider>
        </div >
    );
};

export default DataProvider;