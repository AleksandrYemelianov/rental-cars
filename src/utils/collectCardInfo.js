import { getAccessories } from "./getAccessories";
import { getModelType } from "./getModelType";

export const collectCardInfo = (car) => {
    const { address, rentalCompany, type, model, id, accessories } = car;
    const city = address.split(', ')[1];
    const country = address.split(', ')[2];
    const modelShort = getModelType(model)
    const benefits = getAccessories(accessories);


    return [city, country, rentalCompany, type, modelShort, id, benefits];
}