var schemaCalc = {
    operationsObj: {
        add: {
            name:  "sum",
            args: 2,
            operation:function(a, b){
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
    changeSchema: function(schemaObj){
        // Behavior: change the schema object for the argument.
        // args: a new schema object
        // for (prop in this.schema){
        //     delete prop;
        // }
        this.schema = schemaObj;
        return "Success";
    }
}

console.log(schemaCalc.changeSchema({
    name: {value: "sum", does: "Add up to 3 numbers"},
    numArgs: {value: 3, does: "Give the numbers of args that operation takes"},
    operation: {value: function(a, b, c = 0){return a + b + c}}
  }));

