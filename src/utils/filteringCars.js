export const filteringCars = (cars, priceTo, mileageFrom, mileageTo) => {
    const data = cars.filter((car) => {
        const rentalPrice = Number(car.rentalPrice.replace('$', ''));
        const mileage = car.mileage;
        const price = Number(priceTo) || 10000;
        const mileageStart = Number(mileageFrom) || 0;   
        const mileageEnd = Number(mileageTo) || 500000;   
  
        const priceCondition = rentalPrice <= price;
        const mileageCondition = mileage >= mileageStart && mileage <= mileageEnd;

        return priceCondition && mileageCondition;
    });
  return data
};