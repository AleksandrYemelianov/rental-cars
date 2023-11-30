import { instance } from "redux/service/instanceAPI";
import { fetchAllCarsFulfilled, fetchAllCarsPending, fetchAllCarsRejected } from "./carsActions";

export const fetchAllCars = (params) => {
  return async (dispatch) => {
    dispatch(fetchAllCarsPending());
    try {
      const paramsURL = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
      const {data} = await instance.get(`/adverts?${paramsURL}`);
      dispatch(fetchAllCarsFulfilled(data));
    } catch (error) {
      dispatch(fetchAllCarsRejected(error.message));
    }
  };
};