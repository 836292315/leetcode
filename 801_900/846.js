/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isNStraightHand = function(hand, W) {
    if (hand.length % W !== 0) {
        return false;
    }
    hand.sort((a, b) => a - b);
    let map = new Map();
    for (let card of hand) {
        map.set(card, (map.get(card) || 0) + 1);
    }

    for (let [card, count] of map) {
        if (count > 0) {
            for (let i = 1; i < W; i++) {
                if ((map.get(card + 1) || 0) < 0) {
                    return false;
                }
                map.set(card + i, map.get(card + i) - count);
            }
        }
    }
    return true;
};
