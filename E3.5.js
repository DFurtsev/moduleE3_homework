function getSum(number1) {
    return function(number2) {
        return number1 + number2
    }
}

const sum = getSum(2);
const result = sum(3);
console.log(result);