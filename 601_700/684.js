/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    let parent = new Array(2001);
    for (let i = 0; i < parent.length; i++) {
        parent[i] = i;
    }

    for (let ele of edges) {
        let index1 = findparent(parent, ele[0]);
        let index2 = findparent(parent, ele[1]);
        if (index1 === index2) {
            return ele;
        } else {
            parent[index1] = index2;
        }
    }

    function findparent(parent, index) {
        while (index !== parent[index]) {
            parent[index] = parent[parent[index]];
            index = parent[index];
        }
        return index;
    }
};
