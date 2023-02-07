export function getRates(rateNum) {
    rateNum=Math.max(Math.min(rateNum,5),0)
    const fillStars=rateNum-rateNum%1
    const halfStar=rateNum%1===0?0:1
    const notFillStars=5-rateNum
    let arrayRate=[]
    arrayRate=arrayRate.concat(Array.from({length:fillStars},()=>'bi-star-fill'))
    arrayRate=arrayRate.concat(Array.from({length:halfStar},()=>'bi-star-half'))
    arrayRate=arrayRate.concat(Array.from({length:notFillStars},()=>'bi-star'))

    return arrayRate
}