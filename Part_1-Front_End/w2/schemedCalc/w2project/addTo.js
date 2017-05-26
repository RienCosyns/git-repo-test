// addTo: a function that adds new objects to 'operations'. Contains:
// args: an operation object.
// returns: a success or failure message.
// Behavior: uses 'schema' to validate new operation objects before adding them to 'operations' if they are valid.
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
        return message;
    }
}

var addition = {
        name:  "sum",
        numArgs:  2,
        operation: function(a, b){return a + b}
  }

console.log(schemaCalc.addTo(addition));
console.log(schemaCalc);