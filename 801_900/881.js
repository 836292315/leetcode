/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    /*
    people.sort((a, b) => a - b);
    let i,
        j;
    for (i = 0, j = people.length - 1; i <= j; --j) {
        if (people[i] + people[j] <= limit) {
            ++i;
        }
    }
    return people.length - 1 - j;
    */
    
    people.sort((a, b) => b - a);
    let i = 0;
    let j = people.length - 1;
    let count = 0;
    while (i <= j) {
        count += 1;
        if (people[i] + people[j] <= limit) {
            j -= 1;
        }
        i += 1;
    }
    return count;
};
