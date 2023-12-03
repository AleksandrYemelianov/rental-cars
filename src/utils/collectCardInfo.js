export const collectCardInfo = (car) => {
    const { address, rentalCompany, type, model, id, accessories } = car;
    const city = address.split(', ')[1];
    const country = address.split(', ')[2];
    let modelShort = '';
    if (model === 'Convertible') {
        modelShort = 'CONV';
    } else {
        modelShort = model
    }
        
    let benefits = '';
    if (accessories[1].includes('audio') || accessories[1].includes('sound')) {
     benefits = 'Sound system'
    } else if (accessories[1].includes('leather') || accessories[1].includes('sound')) {
        benefits = 'Premium leather'
    } else {
        benefits = accessories[1]
    }


    return [city, country, rentalCompany, type, modelShort, id, benefits];
}