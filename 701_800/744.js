/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    if (target >= letters[letters.length - 1]) {
        return letters[0];
    }
    if (target < letters[0]) {
        return letters[0];
    }
    for (var i = 1; i < letters.length; i++) {
        if (letters[i - 1] <= target && letters[i] > target) {
            return letters[i];
        }
    }
};