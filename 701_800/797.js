/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let res = [],
        path = [];
    path.push(0);

    function helper(node) {
        if (node === graph.length - 1) {
            res.push(path.slice(0));
        } else
            for (let i = 0; i < graph[node].length; i++) {
                let tem = graph[node][i];
                path.push(tem);
                helper(tem);
                path.pop();
            }
    }
    helper(0);
    return res;
};