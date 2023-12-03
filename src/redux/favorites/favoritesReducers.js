import { ADD_FAVORITE, DELETE_FAVORITE } from "./favoritesTypeActions";

const initialState = {
    favorites: [],
};

export const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {favorites: [...state.favorites, action.payload]}
        case DELETE_FAVORITE:
            return {...state, favorites: state.favorites.filter(favorite => favorite.id !== action.payload)}
        default:
            return state;
    }
};