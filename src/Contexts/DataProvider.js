import { createContext, useState } from "react";


export const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [courseList, setCourseList] = useState([]);
    return (
        <div>
            <DataContext.Provider
                value={[
                    courseList,
                    setCourseList
                ]}
            >
                {children}
            </DataContext.Provider>
        </div >
    );
};

export default DataProvider;