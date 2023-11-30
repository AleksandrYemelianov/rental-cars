export const collectCardInfo = (car) => {
    const { address, rentalCompany, type, model, mileage, accessories } = car;
    const city = address.split(', ')[1];
    const country = address.split(', ')[2];
    const benefits = accessories[2];

    return [city, country, rentalCompany, type, model, mileage, benefits];
}