import { FETCH_ALL_CARS_FULFILLED, FETCH_ALL_CARS_PENDING, FETCH_ALL_CARS_REJECTED, SET_CARS_EMPTY, SET_LOAD_MORE } from "./carsTypeActions";

export const fetchAllCarsPending = () => {
      return {
    type: FETCH_ALL_CARS_PENDING,
  };
}
export const fetchAllCarsFulfilled = (data) => {
      return {
    type: FETCH_ALL_CARS_FULFILLED,
    payload: data,
  };
}
export const fetchAllCarsRejected = (message) => {
      return {
    type: FETCH_ALL_CARS_REJECTED,
    payload: message,
  };
}
export const setCarsEmpty = () => {
      return {
    type: SET_CARS_EMPTY,
  };
}
export const setLoadMore = (boolean) => {
      return {
        type: SET_LOAD_MORE,
        payload: boolean,  
  };
}