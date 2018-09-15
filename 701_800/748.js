/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    let license = licensePlate.toLowerCase();
    let licenseObj = {};
    for (let i = 0; i < license.length; i++) {
        if (license[i].match(/[a-z]/)) {
            if (!licenseObj[license[i]]) {
                licenseObj[license[i]] = 1;
            } else {
                licenseObj[license[i]]++;
            }
        }
    }

    let validWords = [];

    words.forEach(word => {
        if (isValidWord(licenseObj, word)) validWords.push(word);
    });

    let min = Math.min(...validWords.map(word => word.length));

    let filteredWords = validWords.filter(word => word.length === min);

    return filteredWords[0];

    function isValidWord(obj, word) {
        let wordObj = {};
        for (let char of word) {
            if (!wordObj[char]) {
                wordObj[char] = 1;
            } else {
                wordObj[char]++;
            }
        }
        for (let el in obj) {
            if (!wordObj[el] || wordObj[el] < obj[el]) return false;
        }
        return true;
    }
};