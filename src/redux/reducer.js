import { initialState } from "./initialState"

export const reducer = (state = initialState, action) => {
    if (action.type === 'LOAD_COURSE') {
        return {
            ...state,
            courses: action.payload
        }
    }
    else if (action.type === 'LOAD_QUIZ') {
        return {
            ...state,
            quizzes: action.payload
        }
    }
    else if (action.type === 'SUBMIT_QUIZ') {
        return {
            ...state,
            finalAnswers: action.payload
        }
    }
    else if (action.type === 'ADD_TO_CART') {
        return {
            ...state,
            cart: action.payload
        }
    }
    else if (action.type === 'ADD_SUBTOTAL') {
        return {
            ...state,
            subTotal: action.payload
        }
    }
    else if (action.type === 'ADD_VAT') {
        return {
            ...state,
            totalVat: action.payload
        }
    }
    else if (action.type === 'ADD_TOTAL') {
        return {
            ...state,
            totalPrice: action.payload
        }
    }
    else if (action.type === 'DISCOUNT_PRICE') {
        return {
            ...state,
            discountPrice: action.payload
        }
    }
    else if (action.type === 'USE_CUPON') {
        return {
            ...state,
            cuponUsed: action.payload
        }
    }
    else {
        return state;
    }
}