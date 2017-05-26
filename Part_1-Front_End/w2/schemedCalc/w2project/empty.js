// An 'empty' project that satisfies the prompt

var schemaCalc = {
    operationsObj: {
        add: {
            name: "addition",
            numArgs: 2,
            operation: function(a, b){
                return a + b;
            }
        },
        subtract: {},
        multiply: {}
    },
    schema: {
        name: {
            type: "string",
            fallback: ""
        },
        numArgs: {
            type: "number",
            fallback: 0
        },
        operations: {
            type: "function",
            fallback: function(){
                return "Hello World!"
            }
        }
    },
    addTo: function(newOperation){
        // Behavior: uses 'schema' to validate new operation objects 
        // before adding them to 'operations' if they are valid.
        // return message 
    },
    operate: function(op, args){
        //Behavior: Searches for an operation with the name passed in.
         //If it exists, execute the operation on the arguments. If not, it say so.
         // return [message, result op]
    },
    changeSchema: function(schemaObj){
        // Behavior: change the schema object for the argument.
        // args: a new schema object
    }
}
