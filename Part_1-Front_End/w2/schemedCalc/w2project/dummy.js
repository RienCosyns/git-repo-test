// An 'empty' project that satisfies the prompt

var schemaCalc = {
    operations: {
        add: {
            name:  "addition",
            args: 2,
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
                return 9
            }
        }
    },
    addTo: function(op){
        // Behavior: uses 'schema' to validate new operation objects 
        // before adding them to 'operations' if they are valid.
        // return message 
        return "All good";
    },
    operate: function(op, args){
        //Behavior: Searches for an operation with the name passed in.
         //If it exists, execute the operation on the arguments. If not, it say so.
         // return [message, result op]
         return ["All good", 9];
    },
    changeSchema: function(schemaObj){
        // Behavior: change the schema object for the argument.
        // returns: a success/failure message
        return "Success"
    }
}
var add = {
            name: "addition",
            args:  2,
            operation: function(a, b){
                return a + b;
            }
}

console.log(schemaCalc.addTo(add))
console.log(schemaCalc.operate(add))
console.log(schemaCalc.changeSchema(add))