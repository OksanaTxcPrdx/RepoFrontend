const getConvertedString = function (str) {
    let newStr;

    if (typeof str !== 'string') {
        console.log("You passed not a string");
        return null;
    }

    newStr = str.trim().substring(0, 30);
    return newStr + "\u2026";
}

console.log(getConvertedString(1234));

console.log(getConvertedString("12345678911234567892123456789312"))
