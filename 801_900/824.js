/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    let map = 'aeiouAEIOU',
        a = '',
        arr = S.split(' ');
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        a += 'a';
        if (map.indexOf(word[0]) !== -1) {
            word += 'ma' + a;
        } else {
            word += word[0];
            word = word.slice(1) + 'ma' + a;
        }
        arr[i] = word;
    }
    return arr.join(' ');
};