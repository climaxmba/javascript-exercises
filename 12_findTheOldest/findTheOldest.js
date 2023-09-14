const findTheOldest = function(obj) {
    let currYear = Number(new Date().getFullYear());
    let oldest = 0;

    for (let i = 0; i < obj.length; i++) {
        if (!(obj[i].yearOfDeath)) {
            obj[i].yearOfDeath = currYear;
        }
        obj[i].age = obj[i].yearOfDeath - obj[i].yearOfBirth;
    }

    let tempObj;
    obj.reduce((prevVal, currVal, currIndex) => {
        if (currIndex < 1) tempObj = obj[currIndex];
        if (tempObj.age < currVal.age) oldest = currIndex;
        tempObj = currVal;
    }, 0);

    return obj[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;
