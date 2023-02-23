const removeFromArray = function (arr, ...args) {
    let result = [];
    arr.forEach((elem) => {
        if (!args.includes(elem)) {
           result.push(elem);
        }
    });
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
