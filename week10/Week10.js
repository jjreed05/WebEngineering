function displayCountry(country){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			document.getElementById("countryInfo").innerHTML = xhttp.responseText;
		}
	};
	xhttp.open("GET", country + ".txt", true);
	xhttp.send();
};

function displayStudent(jsonFile) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var data = JSON.parse(xhttp.responseText);
            var table = "<table><tr><th>First Name</th>"
				+ "<th>Last Name</th>"
				+ "<th>City</th>"
				+ "<th>State</th>"
				+ "<th>Zip</th>"
				+ "<th>Major</th>"
				+ "<th>GPA</th></tr>";
            for (var i = 0; i < data.students.length; i++) {
                table += "<tr><td>"
					+ data.students[i].first
					+ "</td><td>"
					+ data.students[i].last
					+ "</td><td>"
					+ data.students[i].address.city
					+ "</td><td>"
					+ data.students[i].address.state
					+ "</td><td>"
					+ data.students[i].address.zip
					+ "</td><td>"
					+ data.students[i].major
					+ "</td><td>"
					+ data.students[i].gpa
					+ "</td></tr>";
            }
            table += "</table>";
            document.getElementById("studentInfo").innerHTML = table;
        }
    };
    xhttp.open("GET", jsonFile, true);
    xhttp.send();
};