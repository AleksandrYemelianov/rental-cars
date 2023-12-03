import { ADD_FAVORITE, DELETE_FAVORITE } from "./favoritesTypeActions";

export const addFavorite = value => {
  return {
    type: ADD_FAVORITE,
    payload: value,
  };
};

export const deleteFavorite = id => {
  return {
    type: DELETE_FAVORITE,
    payload: id,
  };
};