# Project B: Schematizer

[![Elium Academy](http://www.zoomby.es/img/Elium-Logo-200-px-Black-PNG.png)](http://www.elium.academy)


### Prompt

> You're a lazy teacher and want to make sure students are writing good operations. To do so, you'll write the operations that the students must to write by their own and a function that will compare your operations with the students' ones. 

---

#### This project contains three items:

1. **Operation objects**: As many as you like.

  * Properties:
    - Name: a string that describes what the operation does.
    - Args: the number of arguments this operation takes.
  * Methods:
    - Operation: a function that does the math with, it will contain:
        + args: the arguments that the function takes. It's variable, up to you.
        + return: the result of the math you made it do.


   Behavior: it executes the formula indicated in the 'name' property.

2. **Scheme**: An object containing objects with the type and default values.

  * Properties:
	- name: Object.  
 	- numArgs: Object.  
  	- operation: Operation object.  
  		Each of these objects will contain the properties 'type', indicating what kind of value the object contains, and 'fallback', a value to be used if when creating the new object, if it doesn't contain that key.

3. **Schema validating function**: A function that compares the object passed with the squema.

  * Arguments:  
		- op: An operation object.  
 		- schema: the schema it must match.  

  * Return values:  
    	- array: containing:  
    			- string: Tells if the match was a success or not. If not, it tells what was wrong with the op.  
    			- op object: It returns the op object passed in. If defaults were needed, it contains those.

  Behavior: Schematizer will take an object and a schema.
  It will compare the object to the expectations of the schema, and return the object with a success/failure message.
  If the object passes but is incomplete, it will be filled with default values.
  If it fails, it is returned whole.

---

### Usage example

The idea is that when schematizer is called with an operation object and the scheme as arguments, it will compare the values inside the new operation object.


 * Sample inputs and outputs:

 ```javascript
: operationSchema, {name: 'subtract', args: 2, operation: function(a, b){return a - b}};
//-> ['all good', {name: 'subtract', args: 2, operation: function(a, b){return a - b}}]
```
```javascript
: operationSchema, {args: 2, operation: function(a, b){return a - b}}
//->['no name, inserted default', {name: 'ackermann', args: 2, operation: function(a, b){return a - b}}]
```
```javascript
: operationSchema, {name: 'subtract', args: 2};
//['no operation, inserted default', {name: 'subtract', args: 2, operation: function(){return '1337FAIL'}}]
```
```javascript
: operationSchema, {name: 'subtract', args: 2, operation: function(a, b){return a - b}, robin: "what's up robin"};
//->  ['does not match schema', {name: 'subtract', args: 2, operation: function(a, b){return a - b}, robin: "what's up robin"}]
```
```	javascript
: operationSchema, {name: 'subtract', operation: function(a, b){return a - b}};
	//->  ['no args specified, booooo', {name: 'subtract', operation: function(a, b){return a - b}}]
```


---

### Challenge

1. Have required and non-required fields.
2. Remember if an object was valid or not - maybe by storing them in different locations, or adding a property, or anything else you can think of.  
3. Use this code to make your schematizer function a pure function:  

// helper function that allows validator to be a pure function  
var opCopier = function(op) {  
	var newOp = {};  
	newOp.name = op.name;  
	newOp.args = op.args;  
	newOp.operation = op.operation;  
	return newOp;  
};  


---

### The exercises it combines

Fill this once the exercises are made.

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
        fallback: "No Name"
    },
    numArgs: {
        type: "number",
        fallback: 25
    },
    operation: {
        type: "function",
        fallback: "FAIL"
    },
    info: {
        type: "string",
        fallback: "No info"
    }
}

function schemaValidator (opObj, schema){
    var arr = [];
    var numKeysObj = Object.keys(opObj);
    console.log(numKeysObj.length);
    var numkeysSchema = Object.keys(schema);
    console.log(numkeysSchema.length);
    if (numKeysObj.length > numkeysSchema.length){
        arr[0] = "Doesn't match schema";
        arr[1] = opObj;
    }
    
        else if (typeof(opObj.name) === schema.name.type){
            if (typeof(opObj.args) === schema.numArgs.type){
                if (typeof(opObj.operation) === schema.operation.type){
                    arr[0] = "All good";
                    arr[1] = opObj;
                }else {
                    arr[0] = "no operation, inserted default";
                    opObj.operation = schema.operation.fallback;
                    arr[1] = opObj;
                }
            }else {
                arr[0] = "No arguments, inserted defaults";
                opObj.args = schema.numArgs.fallback;
                arr[1] = opObj;
            }
        }else {
            arr[0] = "no name, inserted default";
            opObj.name = schema.name.fallback;
            arr[1] = opObj;
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
