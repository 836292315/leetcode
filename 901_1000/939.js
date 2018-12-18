/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
    let minArea = Number.MAX_SAFE_INTEGER;
    let map = new Map();

    for (let [x, y] of points) {
        if (!map.has(x)) {
            map.set(x, new Set());
        }
        map.get(x).add(y);
    }

    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            let p1 = points[i];
            let p2 = points[j];

            if (p1[0] === p2[0] || p1[1] === p2[1]) continue;

            if (map.get(p1[0]).has(p2[1]) && map.get(p2[0]).has(p1[1])) {
                let area = Math.abs((p1[0] - p2[0]) * (p1[1] - p2[1]));
                minArea = Math.min(minArea, area);
            }
        }
    }

    return minArea === Number.MAX_SAFE_INTEGER ? 0 : minArea;
};
