import { SET_FILTER } from "./filtersTypeActions";

const initialState = {
    page: 1,
    limit: 12,
    make: '',
    priceTo: '',
    mileageFrom: '',
    mileageTo: '',
};

export const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return {...state, ...action.payload}
        default:
            return state;
    }
};