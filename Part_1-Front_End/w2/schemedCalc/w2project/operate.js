
var schemaCalc = {
    operationsObj: {
        sum: {
            name:  "sum",
            args:  2,
            operation: function(a, b){
                return a + b;
            }
        }
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
    operate: function(op){
        //Behavior: Searches for an operation with the name passed in.
         //If it exists, execute the operation on the arguments. If not, it say so.
         // return [message, result op]
         var arr = [];
         var args = Array.prototype.slice.call(arguments, 1);
         var message = "Failure";
         var result = null;
         var newArgs = [];

         if (op in this.operationsObj){
            if (args.length !== this.operationsObj[op].numArgs){
                newArgs = args.map(function(val){
                   val =  parseInt(prompt("Incorrect amount of arguments, please enter " 
                                        + this.operationsObj[op].numArgs + " argumens"))
                })    
            }
            args = newArgs;
            //  If the wrong numbers of arguments where passed,
            // prompt the user for new ones, then use them on the operation that was originally called.
             message = "Success";
             //  If 'operate' is called with an operation name that doesn't exist, 
        //  create a new one with that name and give it a default operation and arguments.
         }else{
             this.operationsObj[op] = {
                 name: op,
                 numArgs: 2,
                 operation: function(a, b){
                     return b - a
                 }
             }
             message = "Unknown operation; Added default";
         }
         result = this.operationsObj[op].operation(...args);
         arr[0] = message;
         arr[1] = result;
         return arr;  
    }
}

// console.log(schemaCalc.operate("add", 1, 2));
console.log(schemaCalc.operate("sum", 5, 2));
console.log(schemaCalc.operate("subtract", 5, 2));
console.log(schemaCalc.operate("sum", 5));