export const getAccessories = (accessories) => {
    let benefits = '';
    if (accessories[1].includes('audio') || accessories[1].includes('sound')) {
     benefits = 'Sound system'
    } else if (accessories[1].includes('leather') || accessories[1].includes('sound')) {
        benefits = 'Premium leather'
    } else {
        benefits = accessories[1]
  }
  
  return benefits
}
