import { FETCH_ALL_CARS_FULFILLED, FETCH_ALL_CARS_PENDING, FETCH_ALL_CARS_REJECTED, SET_CARS_EMPTY, SET_LOAD_MORE } from "./carsTypeActions";

const initialState = {
    cars: [],
    isLoading: false,
    isLoadMore: false,
    error: null
}

export const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_CARS_PENDING:
            return { ...state, isLoading: true, error: null };
        case FETCH_ALL_CARS_FULFILLED:
            return { ...state, isLoading: false, cars: [...state.cars, ...action.payload]};
        case FETCH_ALL_CARS_REJECTED:
            return { ...state, isLoading: false, error: action.payload };
        case SET_CARS_EMPTY:
            return { ...state, isLoading: false, cars: [] };
        case SET_LOAD_MORE:
            return { ...state, isLoadMore: action.payload};
        default:
            return state;
    }
};