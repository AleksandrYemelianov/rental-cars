import { instance } from "redux/service/instanceAPI";
import { filteringCars } from "utils/filteringCars";
import { fetchAllCarsFulfilled, fetchAllCarsPending, fetchAllCarsRejected, setLoadMore } from "./carsActions";

export const fetchAllCars = ({
  page,
  limit,
  make,
  priceTo,
  mileageFrom,
  mileageTo }) => {
  return async (dispatch) => {
    dispatch(fetchAllCarsPending());
    try {
      const { data } = await instance.get(`/adverts?page=${page}&limit=${limit}&make=${make}`);
      const dataCurrent = await filteringCars(data, priceTo, mileageFrom, mileageTo)
      if (dataCurrent.length < limit) {
        dispatch(setLoadMore(true));
      }
      dispatch(fetchAllCarsFulfilled(dataCurrent));
    } catch (error) {
      dispatch(fetchAllCarsRejected(error.message));
    }
  };
};