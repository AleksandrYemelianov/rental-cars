export const collectCardInfo = (car) => {
    const { address, rentalCompany, type, model, mileage, accessories } = car;
    const city = address.split(', ')[1];
    const country = address.split(', ')[2];
    let benefits = ''
    if (accessories[1].includes('audio') || accessories[1].includes('sound')) {
     benefits = 'Sound system'
    } else {
        benefits = accessories[1]
    }

    return [city, country, rentalCompany, type, model, mileage, benefits];
}