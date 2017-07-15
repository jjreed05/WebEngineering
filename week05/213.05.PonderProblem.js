/* DISCLAIMER: The directions in the html file tells us to use alert, but
   the directions on Ilearn told us to use console.log. I ended up doing 
   alert but commenting it out! */

// Functionality for problem 1
var problem1 = function() {
	//alert("Hello World");
	console.log("Hello World");
}

// Replace the text with the name
var problem2 = function(name, text) {
	//alert(text.replace(/RICH_GUY/g, name));
	console.log(text.replace(/RICH_GUY/g, name));
}

// Convert from fahrenheit to celsius
var problem3 = function(fahrenheit) {
	var celsius = ((fahrenheit - 32)/(9/5));
	//alert(celsius.toFixed(1) + " \xB0" + "C");
	console.log(celsius.toFixed(1) + " \xB0" + "C");
}

// Find the the cost of postage and display error if the 
// weight is out out of the bounds of 1 - 5
var problem4 = function(weight) {
	var rate;
	
	switch (weight) {
	case '1':
		rate = "$0.98";
		break;
	case '2':
		rate = "$1.19";
		break;
	case '3': 
		rate = "$1.40";
		break;	
	case '4':
		rate = "$1.61";
		break;
	case '5':
		rate = "$1.82";
		break;
	default:
		rate = "Invalid value";
	}
	
	//alert("Your postage rate: " + rate);
	console.log(rate);
}

// Find the compuond interest using a FOR loop
var problem5 = function(apr, term, amount) {
	var newApr = Number(apr)/100;
	var newAmount = Number(amount)
	
	for(var i = Number(term); i--;)
	{
		newAmount += newAmount * newApr;
	}
	
	//alert("$" + newAmount.toFixed(2));
	console.log("$" + newAmount.toFixed(2));
}