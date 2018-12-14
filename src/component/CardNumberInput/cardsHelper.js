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


const rangosMcDebit = [
    {inferior: "510250", superior: "510399"},
    {inferior: "510550", superior: "511204"},
    {inferior: "511215", superior: "511314"},
    {inferior: "511750", superior: "511999"},
    {inferior: "512965", superior: "512999"},
    {inferior: "514130", superior: "514730"},
    {inferior: "514741", superior: "514860"},
    {inferior: "514961", superior: "515430"},
    {inferior: "515461", superior: "515585"},
    {inferior: "515910", superior: "515999"},
    {inferior: "516400", superior: "516439"},
    {inferior: "516680", superior: "516729"},
    {inferior: "517542", superior: "517581"},
    {inferior: "517860", superior: "517909"},
    {inferior: "519031", superior: "519105"},
    {inferior: "519635", superior: "519694"},
    {inferior: "520512", superior: "520601"},
    {inferior: "520811", superior: "520830"},
    {inferior: "521400", superior: "521449"},
    {inferior: "521681", superior: "521755"},
    {inferior: "523802", superior: "523899"},
    {inferior: "526234", superior: "526263"},
    {inferior: "526400", superior: "526499"},
    {inferior: "526701", superior: "526710"},
    {inferior: "527470", superior: "527494"}
]
  
const rangosMastercard = [
    {inferior: "100383", superior: "100383"},
    {inferior: "201282", superior: "201282"},
    {inferior: "308800", superior: "309499"},
    {inferior: "309600", superior: "310299"},
    {inferior: "311200", superior: "312099"},
    {inferior: "315800", superior: "315999"},
    {inferior: "333700", superior: "334999"},
    {inferior: "352800", superior: "358999"},
    {inferior: "510000", superior: "569999"},
    {inferior: "220000", superior: "279999"}
]

const rangosVisaDebit = [
    { inferior: "400276", superior: "400276"},
    { inferior: "400448", superior: "400448"},
    { inferior: "400615", superior: "400615"},
    { inferior: "402789", superior: "402789"},
    { inferior: "402914", superior: "402914"},
    { inferior: "404625", superior: "404625"},
    { inferior: "405069", superior: "405069"},
    { inferior: "405515", superior: "405515"},
    { inferior: "405516", superior: "405516"},
    { inferior: "405517", superior: "405517"},
    { inferior: "405755", superior: "405755"},
    { inferior: "405896", superior: "405896"},
    { inferior: "405897", superior: "405897"},
    { inferior: "406290", superior: "406290"},
    { inferior: "406291", superior: "406291"},
    { inferior: "406375", superior: "406375"},
    { inferior: "406652", superior: "406652"},
    { inferior: "406998", superior: "406998"},
    { inferior: "406999", superior: "406999"},
    { inferior: "408515", superior: "408515"},
    { inferior: "410082", superior: "410082"},
    { inferior: "410083", superior: "410083"},
    { inferior: "410121", superior: "410121"},
    { inferior: "410122", superior: "410122"},
    { inferior: "410123", superior: "410123"},
    { inferior: "410853", superior: "410853"},
    { inferior: "411849", superior: "411849"},
    { inferior: "417309", superior: "417309"},
    { inferior: "421738", superior: "421738"},
    { inferior: "423623", superior: "423623"},
    { inferior: "428062", superior: "428062"},
    { inferior: "428063", superior: "428063"},
    { inferior: "428064", superior: "428064"},
    { inferior: "434795", superior: "434795"},
    { inferior: "437996", superior: "437996"},
    { inferior: "439818", superior: "439818"},
    { inferior: "442371", superior: "442371"},
    { inferior: "442548", superior: "442548"},
    { inferior: "444060", superior: "444060"},
    { inferior: "444493", superior: "444493"},
    { inferior: "446343", superior: "446343"},
    { inferior: "446344", superior: "446344"},
    { inferior: "446345", superior: "446345"},
    { inferior: "446346", superior: "446346"},
    { inferior: "446347", superior: "446347"},
    { inferior: "450412", superior: "450412"},
    { inferior: "451377", superior: "451377"},
    { inferior: "451701", superior: "451701"},
    { inferior: "451751", superior: "451751"},
    { inferior: "451756", superior: "451756"},
    { inferior: "451757", superior: "451757"},
    { inferior: "451758", superior: "451758"},
    { inferior: "451761", superior: "451761"},
    { inferior: "451763", superior: "451763"},
    { inferior: "451764", superior: "451764"},
    { inferior: "451765", superior: "451765"},
    { inferior: "451766", superior: "451766"},
    { inferior: "451767", superior: "451767"},
    { inferior: "451768", superior: "451768"},
    { inferior: "451769", superior: "451769"},
    { inferior: "451770", superior: "451770"},
    { inferior: "451772", superior: "451772"},
    { inferior: "451773", superior: "451773"},
    { inferior: "457596", superior: "457596"},
    { inferior: "457665", superior: "457665"},
    { inferior: "462815", superior: "462815"},
    { inferior: "463465", superior: "463465"},
    { inferior: "468508", superior: "468508"},
    { inferior: "473227", superior: "473227"},
    { inferior: "473710", superior: "473710"},
    { inferior: "473711", superior: "473711"},
    { inferior: "473712", superior: "473712"},
    { inferior: "473713", superior: "473713"},
    { inferior: "473714", superior: "473714"},
    { inferior: "473715", superior: "473715"},
    { inferior: "473716", superior: "473716"},
    { inferior: "473717", superior: "473717"},
    { inferior: "473718", superior: "473718"},
    { inferior: "473719", superior: "473719"},
    { inferior: "473720", superior: "473720"},
    { inferior: "473721", superior: "473721"},
    { inferior: "473722", superior: "473722"},
    { inferior: "473725", superior: "473725"},
    { inferior: "476520", superior: "476520"},
    { inferior: "477051", superior: "477051"},
    { inferior: "477053", superior: "477053"},
    { inferior: "481397", superior: "481397"},
    { inferior: "481501", superior: "481501"},
    { inferior: "481502", superior: "481502"},
    { inferior: "481550", superior: "481550"},
    { inferior: "483002", superior: "483002"},
    { inferior: "483020", superior: "483020"},
    { inferior: "483188", superior: "483188"},
    { inferior: "489412", superior: "489412"},
    { inferior: "492528", superior: "492528"},
    { inferior: "499859", superior: "499859"}
]

const binValidationById = {
    1: [{inferior: "400000", superior: "499999"}],
    8: [{inferior: "300000", superior: "305999"},
        {inferior: "360000", superior: "369999"},
        {inferior: "380000", superior: "389999"}],
    15: rangosMastercard,
    23: [{inferior: "279000", superior: "279999"},
        {inferior: "603488", superior: "603488"},
        {inferior: "606488", superior: "606488"},
        {inferior: "589407", superior: "589407"}],
    24: [{inferior: "589562", superior: "589562"}],
    31: rangosVisaDebit,
    34: [{inferior: "627620", superior: "627620"}],
    38: [{inferior: "504520", superior: "504520"}],
    39: [{inferior: "504363", superior: "504363"}],
    42: [{inferior: "520053", superior: "520053"},
        {inferior: "546553", superior: "546553"},
        {inferior: "487017", superior: "487017"}],
    43: [{inferior: "603493", superior: "603493"}],
    44: [{inferior: "507858", superior: "507858"},
        {inferior: "585274", superior: "585274"}],
    45: [{inferior: "504910", superior: "504910"}],
    50: [{inferior: "627401", superior: "627401"}],
    52: [{inferior: "504570", superior: "504570"}],
    54: [{inferior: "606301", superior: "606301"},
        {inferior: "605915", superior: "605915"}],
    55: [{inferior: "504656", superior: "504656"}],
    56: [{inferior: "636897", superior: "636897"}],
    59: [{inferior: "588800", superior: "588800"}],
    61: [{inferior: "421024", superior: "421024"}],
    62: [{inferior: "603288", superior: "421024"}],
    63: [{inferior: "589657", superior: "589657"}],
    64: [{inferior: "504639", superior: "504639"}],
    65: [{inferior: "340000", superior: "349999"},
        {inferior: "370000", superior: "379999"}],
    66: rangosMcDebit,
    99: [{inferior: "500000", superior: "509999"},
        {inferior: "580000", superior: "589999"}],
    103: [{inferior: "504408", superior: "504408"}]   
}

const validateBin = (value, paymentMethod) => {
    const rangos = binValidationById[paymentMethod]
    if(!rangos) return true

    const bin = value.substring(0, 6)
    const binLength = bin.length
    if(binLength === 0) return true

    return rangos.some(rango => {
        const inferior = rango.inferior.substring(0, binLength)
        const superior = rango.superior.substring(0, binLength)
        return inferior <= bin && bin <= superior
    })
}

function validateLuhnAlgorithm(cardNumber) {
    var ca, sum = 0, mul = 0
    var len = cardNumber.length
    while (len--) {
      ca = parseInt(cardNumber.charAt(len), 10) << mul
      sum += ca - (ca > 9) * 9
      mul ^= 1
    }
  
    return (sum % 10 === 0) && (sum > 0)

}
  

export {
    getLengthsById,
    formatCardNumber,
    getMask,
    validateBin,
    validateLuhnAlgorithm
}