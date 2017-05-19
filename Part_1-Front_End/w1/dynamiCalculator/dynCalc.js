// object variables
var add = {
    name: "addition",
    args: 2,
    operation: function(arr){
        return arr.reduce(function(prev, curr){
            return prev + curr
        })
    }
}

var subtract = {
    name: "subtraction",
    args: [],
    operation: function(args){
        return arr.reduce(function(prev, curr){
            return prev - curr
        })
    }
}

var multiply = {
    name: "multiply",
    args: [],
    operation: function(args){
        return arr.reduce(function(prev, curr){
            return prev * curr
        })
    }
}

// var dynCalc = function(op){
//     var arr = Array.prototype.slice.call(arguments, 1);
//     return op.operation(arr);
//     //return arguments;
// }

var dynamicCalculator = {
    operations: [],
    dynCalc: function(op){
        var arr = Array.prototype.slice.call(arguments, 1);
        console.log(arr);
        return op.operation(arr);
    }
};

dynamicCalculator.addOp = function(obj){
    this.operations.push(obj);
    return this.operations;
}

// Finally create a method that takes the name of an operation and numbers.  
// It will find the operation by that name and execute it with the numbers
dynamicCalculator.executor = function(nameOp){
    for (var i = 0; i < this.operations.length; i++){
        if (nameOp === this.operations[i].name ){
            console.log(arguments);
            var result = this.dynCalc(this.operations[i], arguments);
            return result;
        }
    }
    return "Operation doesn't exist";
}

// var result = dynamicCalculator.dynCalc(add, 2, 3);
// console.log(result);
var myArr = dynamicCalculator.addOp(add);
console.log(myArr);
var answer = dynamicCalculator.executor("addition", 4, 2);
console.log(answer);
// var result = dynCalc(subtract,[2, 3]);
// console.log(result);
// var result = dynCalc(multiply,[2, 3]);
// console.log(result);
