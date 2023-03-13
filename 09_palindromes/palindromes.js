const palindromes = function (string) {
    let tempArr = string.toLowerCase().split('');
    let str = [];
    let punctuations = '.!, ';
    for (let i = 0; i < tempArr.length; i++) {
        if (!punctuations.includes(tempArr[i])) {
            str.push(tempArr[i]);
        }
    }
    return str.join() == str.reverse().join();
};

// Do not edit below this line
module.exports = palindromes;
