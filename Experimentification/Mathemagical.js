// denomintor = number + 2
// denomintor * (1 - ((denomintor - number) / denomintor))
// (1 + Q)**n = 1 + n*Q + ((n * (n - 1))/ (same as the power of Q)! )* Q**(power increases per step) + 
// Q = -(denomintor - number) / denomintor)
function calculateDenom(count, power) {

    while (true) {
        count++;
        for (let square = 2; square < (count/power + 1); square++){
            if (square**power === count)
                return [count, square];
        }
            
    }
}

function sqaureRoot(number,power = 2) {
    const accuracy = 90;
    let sqaureArray = calculateDenom(number, power);
    let denomintor = sqaureArray[0];
    let squareRootOfDenominator = sqaureArray[1];
    

    denomintor * (1 - ((denomintor - number) / denomintor));
    let Q = (number - denomintor) / denomintor;
    const exponent = 1/power;

    let formula = 1 + (exponent * Q);
    
    for (let i = 1; i < accuracy; i++){

        formula += (nominator(exponent, i) * Q**(i+1)) / factorial(i + 1)
    }

    return formula * squareRootOfDenominator;

    };

function nominator(power, term) {
    if (term === 0) return power;

    return nominator(power, term - 1) * (power - term);
    
}

function factorial(n) {
    if (n === 1 ) return 1;
    return factorial(n - 1) * n;
}

// 2.645751714706421 -> 7

console.log(sqaureRoot(10000,4));