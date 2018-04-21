var findRestaurant = function(list1, list2) {
    var list = {},
        len = list1.length + list2.length,
        result = [];
    for (var i = 0; i < list1.length; i++) {
        var tem = list1[i];
        list[tem] = i;
    }
    for (var i = 0; i < list2.length; i++) {
        tem = list2[i];
        if (list[tem] !== undefined) {
            var sum = list[tem] + i;
            if (sum < len) {
                result.length = 0;
                result.push(tem);
                len = sum;
            } else if (sum === len) {
                result.push(tem);
            }
        }
    }
    return result;
}