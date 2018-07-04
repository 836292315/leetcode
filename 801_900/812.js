/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let result = '';
    for (p1 of points) {
        for (p2 of points) {
            for (p3 of points) {
                result = Math.max(result, helper(p1, p2, p3));
            }
        }
    }
    return result;

    function helper(p1, p2, p3) {
        return 0.5 * Math.abs(p1[0] * p2[1] + p2[0] * p3[1] + p3[0] * p1[1] - p2[0] * p1[1] - p3[0] * p2[1] - p1[0] * p3[1]);
    }
};