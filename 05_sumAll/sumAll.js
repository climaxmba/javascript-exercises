const sumAll = function (num1, num2) {
    if ((typeof num1 != 'number') || (typeof num2 != 'number') || (num1 < 0) || (num2 < 0)) {
        return 'ERROR';
    }

    let sum;

    if (num1 < num2) {
        sum = num1;
        for (let i = num1; i <= num2; i++) {
            sum += i;
        }
        sum--
        return sum;
    } else if (num1 > num2) {
        sum = num2;
        for (let i = num2; i <= num1; i++) {
            sum += i;
        }
        sum--
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
