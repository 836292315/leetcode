var calPoints = function(ops) {
    var sum = 0;
    var arr = [];
    for(var i = 0; i <ops.length; i++){
        if(ops[i] == 'C'){
            var tem = arr.pop();
            sum -= tem;
        }
        else if(ops[i] == 'D'){
            var tem1 = arr.pop();
            var tem2 = tem1 * 2;
            sum += tem2;
            arr.push(tem1);
            arr.push(tem2);
        }
        else if(ops[i] == '+'){
            var tem1 = arr.pop();
            var tem2 = arr.pop();
            var tem_add = tem1 + tem2;
            sum += tem_add;
            arr.push(tem2);
            arr.push(tem1);
            arr.push(tem_add);
        }
        else{
            var tem = parseInt(ops[i]);
            sum +=tem;
            arr.push(tem);
        }
    }
    return sum;
};