
var add = {
    name: "addition",
    args: 2,
    operation: function(a, b){
        return a + b
    }
}

var subtract = {
    name: "subtraction",
    operation: function(a,b){
        return a - b
    }
}

var squareRoot = {
    args: 1,
    operation: function(a){
        return Math.sqrt(a);
    }
}

var multiply = {
    name: "multiply",
    args: 2,
    operation: "stegdfhh"
}

var sum3 = {
    name: "sum3",
    args: 3,
    operation: function(){},
    type: "something"
}

var scheme = {
    name: {
        type: "string",
        fallback: "No Name",
        required: true
    },
    numArgs: {
        type: "number",
        fallback: 25,
        required: true
    },
    operation: {
        type: "function",
        fallback: "FAIL",
        required: true
    }
    // info: {
    //     type: "string",
    //     fallback: "No info",
    //     required: false
    // }
}

var opCopier = function(op) {  
	var newOp = {} ;  
	newOp.name = op.name;  
	newOp.args = op.args;  
	newOp.operation = op.operation;  
	return newOp;  
}; 

function schemaValidator (opObj, schema){
    var arr = [];

    var newOp = opCopier(opObj);
    var numKeysObj = Object.keys(newOp);
    console.log(numKeysObj.length);
    var numkeysSchema = Object.keys(schema);
    console.log(numkeysSchema.length);
    if (numKeysObj.length > numkeysSchema.length){
        arr[0] = "Too many properties";
        arr[1] = newOp;
        newOp.valid = false;
    }else if (typeof(newOp.name) === schema.name.type){
            if (typeof(newOp.args) === schema.numArgs.type){
                if (typeof(newOp.operation) === schema.operation.type){
                    arr[0] = "All good";
                    arr[1] = newOp;
                    newOp.valid = true;
                }else {
                    arr[0] = "no operation, inserted default";
                    newOp.operation = schema.operation.fallback;
                    arr[1] = newOp;
                    newOp.valid = false;
                }
            }else {
                arr[0] = "No arguments, inserted defaults";
                newOp.args = schema.numArgs.fallback;
                arr[1] = newOp;
                newOp.valid = false;
            }
        }else {
            arr[0] = "no name, inserted default";
            newOp.name = schema.name.fallback;
            arr[1] = newOp;
            newOp.valid = false;
        }
    return arr
}



var comp = schemaValidator(add, scheme);
console.log(comp);
var comp2 = schemaValidator(squareRoot, scheme);
console.log(comp2);
var comp3 = schemaValidator(subtract, scheme);
console.log(comp3);
var comp4 = schemaValidator(multiply, scheme);
console.log(comp4);
var comp5 = schemaValidator(sum3, scheme);
console.log(comp5);
