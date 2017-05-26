var addButton = document.getElementById('add');
var subtractButton = document.getElementById("subtract");
var multiplyButton = document.getElementById("multiply");
var divisionButton = document.getElementById("division");
var numInput = document.querySelector("input");
var submitButton = document.getElementById("submit");
var result = document.getElementById("result");
var numbers = [];
// addButton.addEventListener("click", function(e){
// 	schemaCalc.addTo({
//         name:  "sum",
//         numArgs:  2,
//         operation: function(a, b){return a + b}
//   	})
// 	  e.preventDefault();
// 	 // e.stopPropagation();
//   },false
// )

addButton.onclick = function(){

}

subtractButton.addEventListener("click", function(){
	var args = [];
	for (var i = 0; i < schemaCalc.operationsObj.sum.numArgs; i++){
		var num = parseInt(prompt("Please enter an integer."));	
		args.push(num);
	}
	schemaCalc.operate("sum",...args);
}, false)

multiplyButton.addEventListener("click", function(e){
	schemaCalc.changeSchema({
		name: {
			type: 'string', 
			fallback: 'string'
		}, 
		numArgs: {
			type: 'number', 
			fallback: 0000
		}, 
		operation: {
			type: 'function', 
			fallback: function() {}
		}
	})
	e.preventDefault();
  }, false
)

numInput.addEventListener("change", function(){
	
	var input = Number(numInput.value);
	numbers.push(input);
})

submitButton.addEventListener("click", function(){

})