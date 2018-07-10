/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    function getDistance(a, b) {
        let x = a[0] - b[0],
            y = a[1] - b[1];
        return x * x + y * y;
    }

    let len = points.length,
        result = 0;
    for (let i = 0; i < len; i++) {
        let map = new Map();
        for (let j = 0; j < len; j++) {
            if (i === j) {
                continue;
            }
            let d = getDistance(points[i], points[j]);
            if (map.get(d)) {
                map.set(d, map.get(d) + 1);
            } else {
                map.set(d, 1);
            }
        }
        map.forEach(function(k) {
            result += k * (k - 1);
        });
    }
    return result;
};