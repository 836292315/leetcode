var aaa = function(num1, num2) {
    var result = [],
        len1 = nums1.length,
        len2 = nums2.length,
        i = 0,
        j = 0;

    function sortNumber(a, b) {
        return a - b;
    }

    nums1.sort(sortNumber);
    nums2.sort(sortNumber);

    while (i < len1 && j < len2) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            i++
        }
        while (i > 0 && nums1[i] === nums1[i - 1]) {
            i++;
        }
        while (j > 0 && nums2[j] === nums2[j - 1]) {
            j++;
        }
    }

    return result;
};