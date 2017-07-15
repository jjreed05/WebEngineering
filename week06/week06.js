/* Takes the liter age and compares it between 0 an 118 */
function validateAge(age, classOfElement){
	if(age != "" && age >= 0 && age <= 118){
		document.getElementsByClassName(classOfElement)[0].style.visibility = 'hidden';
	}
	else{
		document.getElementsByClassName(classOfElement)[0].style.visibility = 'visible';
	}
}

/* Searches through SSN to see if there is three digits, dash, two digits, dash,
   and four digits */
function validateSSN(SSN, classOfElement){
	if(/^\s?\d{3}-\d{2}-\d{4}\s?$/.test(SSN)){
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

/* Searches for the month, day, and four digit year. It then sees if the year is between
   1753 and 2100*/
function validateDate(date, classOfElement){
	var tmp = new Date(date);
	
	if(/^\s?([1-9]|1[0-2])\/([1-9]|[1-2][0-9]|3[0-1])\/(\d{4})\s?$/.test(date) && 
		tmp.getFullYear() >= 1753 && tmp.getFullYear() <= 2100){
		document.getElementsByClassName(classOfElement)[0].style.visibility = 'hidden';
	}
	else{
		document.getElementsByClassName(classOfElement)[0].style.visibility = 'visible';
	}
}

/* It only searches through two characters. It goes through every state abbreviation in the USA */
function validateState(state, classOfElement){
	if(/^\s?A[KLRZ]|C[AOT]|DE|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY]\s?$/.test(state)){
		document.getElementsByClassName(classOfElement)[0].style.visibility = 'hidden';
	}
	else{
		document.getElementsByClassName(classOfElement)[0].style.visibility = 'visible';
	}
}

/* With /g it see if any of these cases are met: $1, 1.0, 1.00, $1.00) */
function validateDollar(dollar, classOfElement){
	if(/\s*?\$?(\d{1,3})(\,?\.\d{2})?(\s*)?\s*?/g.test(dollar)){
		document.getElementsByClassName(classOfElement)[0].style.visibility = 'hidden';
	}
	else{
		document.getElementsByClassName(classOfElement)[0].style.visibility = 'visible';
	}
}