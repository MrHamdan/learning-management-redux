import { createContext, useEffect, useReducer, useState } from "react";


const initialState = {
    quizzes: [],
    finalAnswers: [],
    courses: [],
    cart: [],
    subTotal: 0,
    totalVat: 0,
    totalPrice: 0,
    discountPrice: 0,
    cuponUsed: false

}
const reducer = (state, action) => {
    if (action.type === 'LOAD_COURSE') {
        return { ...state, courses: action.payload }
    }
    if (action.type === 'LOAD_QUIZ') {
        return { ...state, quizzes: action.payload }
    }
    if (action.type === 'SUBMIT_QUIZ') {
        return { ...state, finalAnswers: action.payload }
    }
    if (action.type === 'ADD_TO_CART') {
        return { ...state, cart: action.payload }
    }
    if (action.type === 'ADD_SUBTOTAL') {
        return { ...state, subTotal: action.payload }
    }
    if (action.type === 'ADD_VAT') {
        return { ...state, totalVat: action.payload }
    }
    if (action.type === 'ADD_TOTAL') {
        return { ...state, totalPrice: action.payload }
    }
    if (action.type === 'DISCOUNT_PRICE') {
        return { ...state, discountPrice: action.payload }
    }
    if (action.type === 'USE_CUPON') {
        return { ...state, cuponUsed: action.payload }
    }
}


export const CourseDataContext = createContext();

const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // useEffect(() => {
    //     fetch('/coursedata.json')
    //         .then(res => res.json())
    //         .then(data => dispatch({
    //             type: 'LOAD_COURSE',
    //             payload: data
    //         }))
    // }, []);

    // useEffect(() => {
    //     fetch('quiz.json')
    //         .then(res => res.json())
    //         .then(data => dispatch({
    //             type: 'LOAD_QUIZ',
    //             payload: data
    //         }))
    // }, [])


    return (
        <div>
            <CourseDataContext.Provider
                value={{ state, dispatch }}
            >
                {children}
            </CourseDataContext.Provider>
        </div >
    );
};

export default DataProvider;