var intersect = function(nums1, nums2) {
    function sort_num(a, b) {
        return a - b;
    }
    nums1.sort(sort_num);
    nums2.sort(sort_num);

    var result = [],
        i = 0,
        j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return result;
};