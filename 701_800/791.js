/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */

var customSortString = function(S, T) {
    let map = {};
    for (let i = 0; i < T.length; i++) {
        let tem = T.charAt(i);
        if (map[tem] == undefined) {
            map[tem] = 0;
        }
        map[tem]++;
    }

    let res = '';
    for (let i = 0; i < S.length; i++) {
        let tem = S.charAt(i);
        if (map[tem] == undefined) {
            continue;
        }
        for (let j = 0; j < map[tem]; j++) {
            res += tem;
        }
        map[tem] = 0;
    }
    for (let tem in map) {
        for (let i = 0; i < map[tem]; i++) {
            res += tem;
        }
    }
    return res;
};