/**********Create an HTML file that has two input fields to accept the two numbers to perform operations on. 
Create 4 buttons to perform each of the basic mathematical functions (add, subtract, multiply, divide). In
your JavaScript, put an event listener on each of the buttons. Copy the code below an implement a basic calculator.
When the user performs one of the operations, output the result to another DOM element of your choice.
*****************************************/
var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var operation = 0;
number1.addEventListener("input", getNumbers);
number2.addEventListener("input", getNumbers);
var productButton = document.getElementById("multiply");
productButton.addEventListener("click", product);
var addButton = document.getElementById("add");
addButton.addEventListener("click", sum);
var minusButton = document.getElementById("subtract");
minusButton.addEventListener("click", difference);
var divideButton = document.getElementById("divide");
divideButton.addEventListener("click", quotient);

function getNumbers() {
	number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;
}
/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
function newAnswer() {
	document.getElementById("answer").innerHTML = operation;
}

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function product() {
	operation = number1 * number2;
	console.log("product:", operation);
	newAnswer();
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
 function sum() {
 	operation = parseFloat(number1) + parseFloat(number2);
 	console.log("sum:", operation);
 	newAnswer();
 }


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
 function difference() {
 	operation = number1 - number2;
 	console.log("difference:", operation);
 	newAnswer();
 }

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function quotient() {
	operation = number1 / number2;
	console.log("quotient:", operation);
	newAnswer();
}



