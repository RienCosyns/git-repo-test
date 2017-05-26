// Unit Tests:
	// args: the function to test
	// returns: an informative message
	// behavior: unit tests will take in a function to test, 
		// run the function with predetermined arguments 
		// and tell you whether the function did the right thing or not
var opCopier = function(op) {  
	var newOp = {} ;  
	newOp.name = op.name;  
	newOp.numArgs = op.numArgs;  
	newOp.operation = op.operation;  
	return newOp;  
}; 

var schemaCalc = {
    operationsObj: {
        subtract: {},
        multiply: {}
    },
    schema: {
        name: {
            type: "string"
        },
        numArgs: {
            type: "number"
        },
        operation: {
            type: "function"
        }
    },
    addTo: function(newOperation){
        // get the schema keys and types
        var myObj = opCopier(newOperation);
        var addToSchemaCalc = false;
        var message = "";
        for (key in this.schema){
            if (key in newOperation){
                var type = typeof(newOperation[key]);
               // console.log("type: " + type);
                if (type === this.schema[key].type){
                    var addToSchemaCalc = true;
                    myObj[key] = myObj[key];
                    }else{
                        message = "Property of wrong type " + this.schema[key].type + " expected";
                        addToSchemaCalc = false;
                        myObj = {};
                        return message;
                    } 
                } else {
                    message = "Missing property, expected " + key;
                    addToSchemaCalc = false;
                    myObj = {};
                    return message;
                }
            }if(addToSchemaCalc){
                this.operationsObj[myObj.name] = myObj;
                message = "Success!"
            }
        return message;
    }
}

// function testCase(cal) {
//   var operation1 ={name: "one"};
// 	var operation2 = {name: "two"};
// 	var newSchema = {};
// 	cal.addTo(operation1);
// 	cal.operate("one", 4, 5);
//     cal.changeSchema(newSchema);
// }

// console.log(addToTester(schemaCalc));

// A very simple unit test for addition
function addToTester(addToFunction) {  /// ask Evan what I'm doing wrong
    var sum = {
        name: "sum",
        numArgs: 2,
        operation: function(a, b){return a + b}
    }
    var messageStatus = [];
    var objectStatus;
    var messageReceived = addToFunction.addTo(sum);
    console.log(addToFunction.operationsObj);
    console.log(sum in addToFunction.operationsObj);
    if (sum in addToFunction.operationsObj){
        objectStatus = "Object successfully stored";
    }
    messageStatus[0] = messageReceived;
    messageStatus[1] = objectStatus;
    messageStatus[2] = addToFunction.operationsObj[sum.name];
    return messageStatus   
}
    
console.log(addToTester(schemaCalc));

