function getSocSecTax(grossPay) {
    return grossPay * 0.062;
}
console.log(getSocSecTax(100000));

function getMedicareTax(grossPay) {
    return grossPay * 0.0145;
}
console.log(getMedicareTax(100000));

function getFederalTax(grossPay, withholdingCode) {
    let num;
    if (withholdingCode === 0) {
        num = .23;
    } else if (withholdingCode === 1) {
        num = .21;
    } else if (withholdingCode === 2) {
        num = .195;
    } else if (withholdingCode === 3) {
        num = .185;
    } else if (withholdingCode >= 4) {
        num = .18-((withholdingCode-4)*.005);
    }
    return grossPay * num;
    
}   
console.log(getFederalTax(100000, 5));
console.log(getFederalTax(1150, 2));
console.log(getFederalTax(1100, 6));