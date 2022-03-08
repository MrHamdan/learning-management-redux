
export const fetchCourse = () => {

    return async (dispatch) => {
        await fetch('/coursedata.json')
            .then(res => res.json())
            .then(
                data => (
                    dispatch({
                        type: 'LOAD_COURSE',
                        payload: data
                    })
                )
            );

    }
}
export const fetchQuiz = (payload) => {
    return {
        type: 'LOAD_QUIZ',
        payload
    }
}
export const submitQuiz = (payload) => {
    return {
        type: 'SUBMIT_QUIZ',
        payload
    }
}
export const addToCart = (payload) => {
    return {
        type: 'ADD_TO_CART',
        payload
    }
}
export const addSubTotal = (payload) => {
    return {
        type: 'ADD_SUBTOTAL',
        payload
    }
}
export const addVat = (payload) => {
    return {
        type: 'ADD_VAT',
        payload
    }
}
export const addTotal = (payload) => {
    return {
        type: 'ADD_TOTAL',
        payload
    }
}
export const discountPrice = (payload) => {
    return {
        type: 'DISCOUNT_PRICE',
        payload
    }
}
export const useCupon = (payload) => {
    return {
        type: 'USE_CUPON',
        payload
    }
}