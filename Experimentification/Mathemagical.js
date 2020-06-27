// denomintor = number + 2
// denomintor * (1 - ((denomintor - number) / denomintor))
// (1 + Q)**n = 1 + n*Q + ((n * (n - 1))/ (same as the power of Q)! )* Q**(power increases per step) + 
// Q = -(denomintor - number) / denomintor)

/**
 * 
 * @param {a numeric expression} number 
 * @param {the number of root that should be calculated} power 
 * 
 * @returns {number} 
 * 
 * @description uses binomial theorom to extract the root.
 *              due to computational divison inaccuracies, 
 *              the root is only accurate upto a 7 Decimal places
 */
function rootExract(number,power = 2) {
    const accuracy = 180; // the lower values yeilds a less accurate answer in case of decimal places
    let sqaureArray = calculateDenom(number, power);
    let denomintor = sqaureArray[0];
    let squareRootOfDenominator = sqaureArray[1];
    

    denomintor * (1 - ((denomintor - number) / denomintor));
    let Q = (number - denomintor) / denomintor;
    const exponent = 1/power;

    let formula = 1 + (exponent * Q);
    
    for (let i = 1; i < accuracy; i++){

        formula += (calculateNumerator(exponent, i) * Q**(i+1)) / factorial(i + 1)
    }

    return formula * squareRootOfDenominator;
    
}

function calculateNumerator(power, nthTerm) {
    if (nthTerm === 0) return power;

    return calculateNumerator(power, nthTerm - 1) * (power - nthTerm);
    
}

function factorial(n) {
    if (n === 1 ) return 1;
    return factorial(n - 1) * n;
}

function calculateDenom(count, power) {

    while (true) {
        count++;
        for (let square = 2; square < (count/power + 1); square++){
            if (square**power === count)
                return [count, square];
        }
            
    }
}
// 2.645751714706421 -> 7

// console.log(Math.sqrt(7));


console.log(rootExract(7,10));
// let myFunct = rootExract(7,10);
// console.log(myFunct**10);
// let compFunct = 7**(1/10);
// console.log(compFunct**10);
console.log(7**(1/10));
