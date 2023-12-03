import { combineReducers } from "redux";
import { carsReducer } from "./cars/carsReducers";
import { filtersReducer } from "./filters/filtersReducers";

export const rootReducer = combineReducers({
  cars: carsReducer,
  filters: filtersReducer,
});