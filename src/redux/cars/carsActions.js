import { FETCH_ALL_CARS_FULFILLED, FETCH_ALL_CARS_PENDING, FETCH_ALL_CARS_REJECTED } from "./carsTypeActions";

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