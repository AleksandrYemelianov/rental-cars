import { FETCH_ALL_CARS_FULFILLED, FETCH_ALL_CARS_PENDING, FETCH_ALL_CARS_REJECTED } from "./carsTypeActions";

const initialState = {
    cars: [],
    filters: {
        brand: '',
        price: '',
        milage: ''
    },
    isLoading: false,
    error: null
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_CARS_PENDING:
            return {...state, isLoading: true, error: null}
        case FETCH_ALL_CARS_FULFILLED:
            return {...state, isLoading: false, cars: [...action.payload]}
        case FETCH_ALL_CARS_REJECTED:
            return {...state, isLoading: false, error: action.payload}
        default:
            return state;
    }
};