/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
    let n = stones.length;
    let roots = new Array(n);
    for (let i = 0; i < n; i++) {
        roots[i] = i;
    }
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (stones[i][0] == stones[j][0] || stones[i][1] == stones[j][1]) {
                let root1 = find(roots, i);
                let root2 = find(roots, j);
                if (root1 != root2) {
                    roots[root1] = root2;
                    count++;
                }
            }
        }
    }
    return count;

    function find(roots, id) {
        while (roots[id] != id) {
            roots[id] = roots[roots[id]];
            id = roots[id];
        }
        return id;
    }
};
