const getTheTitles = function(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i].title);
    }
    return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;
