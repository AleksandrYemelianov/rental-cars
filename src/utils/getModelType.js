export const getModelType = (model) => {
    let modelShort = '';
    if (model === 'Convertible') {
        modelShort = 'CONV';
    } else {
        modelShort = model
    }

    return modelShort
}