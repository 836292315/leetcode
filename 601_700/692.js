/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    /*
    let map = {};
    for (let i = 0; i < words.length; i++) {
        map[words[i]] = (map[words[i]] || 0) + 1;
    }

    let arr = Object.entries(map).sort(([k1, v1], [k2, v2]) => {
        if (v1 === v2) return k1 < k2 ? -1 : 1;
        return v2 - v1;
    });
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i][0]);
    }

    return res.slice(0, k);
    */
    let map = {};
    for (let i = 0; i < words.length; i++) {
        map[words[i]] = (map[words[i]] || 0) + 1;
    }
    let res = Object.keys(map).sort(function (a, b) {
        if (map[a] > map[b]) {
            return -1;
        }
        else if (map[a] < map[b]) {
            return 1;
        }
        else {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        }
    });
    return res.slice(0, k);
};
