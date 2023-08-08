module.exports = function check(str, bracketsConfig) {
    const arr = [];
    let j = 0;

    for (let i = 0; i < bracketsConfig.length; i++) {
        arr.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
    }

    while (j < arr.length) {
        if (str.includes(arr[j])) {
            str = str.replace(arr[j], '');
            j = 0;
        } else {
            j++;
        }
    }

    return str === '';
}
