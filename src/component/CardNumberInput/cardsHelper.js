import StringMask from 'string-mask';

const masksByLength = {
    13: "00000 0000 0000",
    14: "0000 000000 0000",
    15: "00000000 0000 000",
    16: "0000 0000 0000 0000",
    17: "00000000 00000 0000",
    18: "0000000000 00000 000",
    19: "0000000000 00000 0000"
}

const lengthsById = {
    1: [16,13],
    8: [14],
    15: [17,16],
    23: [19,16],
    44: [19,16],
    65: [15],
    99: [18,17,16],
    103: [18]
}

const binValidationById = {

}

const getLengthsById = (paymentMethod) => {

    const defaultLengths = [16]
    let lengths = lengthsById[paymentMethod]
    if(!lengths) lengths = defaultLengths

    return lengths
}

// con 0 en el formato le decimos que puede ser un valor parcial
const formatCardNumber = (bin, restOfCC, format) => {
    const formattedBin = StringMask.apply(bin, format).trim()
    const formattedFullCC = StringMask.apply(`${bin}${restOfCC}`, format).trim()
    const formattedRestOfCC = formattedFullCC.substring(formattedBin.length)

    return {
        bin: formattedBin,
        restOfCC: formattedRestOfCC
    }
}

const getMask = (ccNumber, paymentMethod) => {
    const lengths = getLengthsById(paymentMethod)
    let i=0;
    while(ccNumber.length <= lengths[i] && i < lengths.length) i++

    let ccLength = lengths[i - 1]
    if(!ccLength) ccLength = lengths[0]
    
    return masksByLength[ccLength]
}

export {
    masksByLength,
    lengthsById,
    formatCardNumber,
    getMask,
    binValidationById
}