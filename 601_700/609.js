/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    let res = [];
    let map = {};
    for (let i = 0; i < paths.length; i++) {
        let curr = paths[i].split(' ');
        for (let j = 1; j < curr.length; j++) {
            let fileName = curr[j].split('(')[0];
            let content = curr[j].split('(')[1].split(')')[0];
            if (map[content] == null) {
                map[content] = [];
            }
            map[content].push(curr[0] + '/' + fileName);
        }
    }
    for (let key in map) {
        if (map[key].length > 1) {
            res.push(map[key])
        }
    }
    return res;
};
