/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let tem = Math.floor(Math.sqrt(area));
    while (area % tem !== 0) {
        tem--;
    }
    return [area / tem, tem];
};