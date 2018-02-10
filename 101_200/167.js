var twoSum = function(numbers, target) {
    var l = numbers.length;
    var i = 0;
    var j = l-1;
    while(numbers[i] + numbers[j] !== target){
        numbers[i] + numbers[j] < target ? i++:j--;
    }
    return [i+1,j+1];
    
};