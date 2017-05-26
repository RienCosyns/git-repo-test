

var schemaCalc = {
    operationsObj: {
        subtract: {
            name: "subtract",
            numArgs: 2,
            operation: function(...args){
                return args.reduce(function(a, b){
                    return a - b;
                })
            }
        },
        multiply: {
            name: "multiply",
            numArgs: 2,
            operation: function(...args){
                return args.reduce(function(a, b){
                    return a * b;
                })
            }
        },
        add: {
            name: "add",
            numArgs: 2,
            operation: function(...args){
                return args.reduce(function(a, b){
                    return a + b;
                })
            }
        },
        division: {
            name: "division",
            numArgs: 2,
            operation: function(...args){
                return args.reduce(function(a, b){
                    return a / b;
                })
            }
        }
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
        //var myObj = opCopier(newOperation);
        var addToSchemaCalc = false;
        var message = "";
        var myObj = opCopier(newOperation);
        for (key in this.schema){
            if (key in newOperation){
                var type = typeof(newOperation[key]);
               // console.log("type: " + type);
                if (type === this.schema[key].type){
                    addToSchemaCalc = true;
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
        alert(message);
        alert(JSON.stringify(this.operationsObj));
        return message
    },
    // user enters numbers in the box
    // console.log the correct answer or alert
    operate: function(op){
        // 
        //Behavior: Searches for an operation with the name passed in.
         //If it exists, execute the operation on the arguments. If not, it say so.
         // return [message, result op]
         var arr = [];
         var args = Array.prototype.slice.call(arguments, 1);
         var message = "Failure";
         var result = null;
         
         if (this.operationsObj[op] !==undefined){
             result = this.operationsObj[op].operation(...args);
             message = "Success";
         }
         arr[0] = message;
         arr[1] = result;
         alert(arr);
         return arr;
    },
    changeSchema: function(schemaObj){
        // Behavior: change the schema object for the argument.
        // args: a new schema object
        // for (prop in this.schema){
        //     delete prop;
        // }
        this.schema = schemaObj;
        alert("Success");
        return "Success";
    }
}

var opCopier = function(op) {  
	var newOp = {} ;  
	newOp.name = op.name;  
	newOp.numArgs = op.numArgs;  
	newOp.operation = op.operation;  
	return newOp;  
}; 
