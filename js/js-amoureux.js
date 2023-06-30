function checkAnswers() {
	var q1 = document.querySelector('input[name="q1"]:checked').value;

	if (q1 == "a") {
		document.location.href="EmmaClara.html"; 
	} 	if (q1 == "b") {
		document.location.href="KiksTheo.html"; 
	}
}
