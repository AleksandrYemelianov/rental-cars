import { SET_FILTER } from "./filtersTypeActions";

export const setFilter = value => {
  return {
    type: SET_FILTER,
    payload: value,
  };
};