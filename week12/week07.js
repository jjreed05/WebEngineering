
function alertUser(){
   alert("Thank you for visiting. Call 1-800-454-4545 for any questions concerning our supplements.");
}

/* This function will call various functions to add up the total */
function calculatePackage1(){
   document.getElementById("cost").innerHTML = "Cost: $29.99";
   
   var tax = calculateTax(29.99).toFixed(2);
   document.getElementById("tax").innerHTML = "Tax: $" + tax;
   
   var total = calculateTotal(29.99, tax)
   document.getElementById("total").innerHTML = "Total: $" + total;
}

/* This function will call various functions to add up the total */
function calculatePackage2(){
   document.getElementById("cost").innerHTML = "Cost: $49.99";
   
   var tax = calculateTax(49.99).toFixed(2);
   document.getElementById("tax").innerHTML = "Tax: $" + tax;
   
   var total = calculateTotal(49.99, tax)
   document.getElementById("total").innerHTML = "Total: $" + total;
}

/* This function will call various functions to add up the total */
function calculatePackage3(){
   document.getElementById("cost").innerHTML = "Cost: $59.99";
   
   var tax = calculateTax(59.99).toFixed(2);
   document.getElementById("tax").innerHTML = "Tax: $" + tax;
   
   var total = calculateTotal(59.99, tax)
   document.getElementById("total").innerHTML = "Total: $" + total;

}

/* Based on Idaho state tax of 6 percent*/
function calculateTax(cost){
   return cost * .06;
}

/* Converts the string to a number and adds them together*/
function calculateTotal(cost, tax){
  var sum = +cost + +tax;
  return sum;
}

/* Check to make sure that the text box isn't empty */
function validateName(text, classOfElement){
  if(text != ""){
     document.getElementsByClassName(classOfElement)[0].style.visibility = 'hidden';
  }
}

/* Took this function from last week's assignment */
function validateState(state, classOfElement){
  if(/^\s?A[KLRZ]|C[AOT]|DE|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY]\s?$/.test(state)){
		document.getElementsByClassName(classOfElement)[0].style.visibility = 'hidden';
	}
	else{
		document.getElementsByClassName(classOfElement)[0].style.visibility = 'visible';
	}
}

/* Check for 5 digits */
function validateZip(zip, classOfElement){
  if(/^(\d{5})?$/.test(zip)){
		document.getElementsByClassName(classOfElement)[0].style.visibility = 'hidden';
	}
	else{
		document.getElementsByClassName(classOfElement)[0].style.visibility = 'visible';
	}
}

/* This regex allows for 7028238223, (702)8238223, 702-823-8223, etc */
function validateNumber(number, classOfElement){
   if(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(number)){
     document.getElementsByClassName(classOfElement)[0].style.visibility = 'hidden';
   }
   else{
		 document.getElementsByClassName(classOfElement)[0].style.visibility = 'visible';
	 }   
}

/* Function to check for a valid email address. I could not figure out the regex for this.
   So, I used a regex expression from https://stackoverflow.com/questions/46155/validate-email-address-in-javascript */
function validateEmail(email, classOfElement){
   if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
     document.getElementsByClassName(classOfElement)[0].style.visibility = 'hidden';
   }
   else{
		 document.getElementsByClassName(classOfElement)[0].style.visibility = 'visible';
	 }
}

/* Searches to see if there are 16 digits or 3 by four digits */
function validateCard(card, classOfElement){
	if(/^\s?(\d{4}\s){3}|\d{16}\s?$/.test(card)){
		document.getElementsByClassName(classOfElement)[0].style.visibility = 'hidden';
	}
	else{
		document.getElementsByClassName(classOfElement)[0].style.visibility = 'visible';
	}
}

/* Checks for a month in MM format */
function validateMonth(month, classOfElement){
   if(/^(0?[1-9]|1[012])$/.test(month)){
     document.getElementsByClassName(classOfElement)[0].style.visibility = 'hidden';
   }
   else{
		 document.getElementsByClassName(classOfElement)[0].style.visibility = 'visible';
	 }
}

/* Checks to see if the year is 2017 or further */
function validateYear(year, classOfElement){
   if((+year > 2016) && /^(\d{4})?$/.test(year)){
     document.getElementsByClassName(classOfElement)[0].style.visibility = 'hidden';
   }
   else{
		 document.getElementsByClassName(classOfElement)[0].style.visibility = 'visible';
	 }
}

function submitForm(){
   alert("Thanks for shopping");
}

function resetForm(){
   location.reload();
   alert("The form was reset");
}