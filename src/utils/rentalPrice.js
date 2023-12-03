export const rentalPrice = (cars) => {
    const allPrice = cars.map(carPrice => Number(carPrice.rentalPrice.replace('$', '')))
    const minPrice = Math.min(...allPrice)
    const maxPrice = Math.max(...allPrice)
    const min = (Math.round(minPrice / 10) * 10)
    const max = (Math.round(maxPrice / 10) * 10)
    let priceSelect = []
    for (let index = min; index <= (max + 10); index += 10) {
         priceSelect.push(index); 
    }

    return priceSelect
} 