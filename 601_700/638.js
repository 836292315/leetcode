var shoppingOffers = function (price, special, needs) {
    let minPrice = 0;
    for (let i = 0; i < price.length; i++) {
        minPrice += price[i] * needs[i];
    }

    for (let i = 0; i < special.length; i++) {
        let res = helper(special[i], needs);
        if (res) {
            let temp = shoppingOffers(price, special, res) + special[i][needs.length];
            minPrice = temp < minPrice ? temp : minPrice;
        }
    }
    return minPrice;

    function helper(special, needs) {
        let remainNeeds = [];
        for (let i = 0; i < needs.length; i++) {
            if (special[i] > needs[i]) return false;
            remainNeeds.push(needs[i] - special[i]);
        }
        return remainNeeds;
    }
};