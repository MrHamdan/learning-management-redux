
export const fetchCourse = () => {

    return async (dispatch) => {
        await fetch('./coursedata.json')
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
export const fetchBestCourses = () => {

    return async (dispatch) => {
        await fetch('./bestcourses.json')
            .then(res => res.json())
            .then(
                data => (
                    dispatch({
                        type: 'LOAD_BEST_COURSES',
                        payload: data
                    })
                )
            );

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
export const calculateDiscount = (payload) => {
    return {
        type: 'DISCOUNT_PRICE',
        payload
    }
}
export const addCupon = (payload) => {
    return {
        type: 'USE_CUPON',
        payload
    }
}


export const increaseQuantity = (payload) => {
    return {
        type: 'INCREASE_QUANTITY',
        payload
    }
}
export const decreaseQuantity = (payload) => {
    return {
        type: 'DECREASE_QUANTITY',
        payload
    }
}