function checkAnswers() {
	var q1 = document.querySelector('input[name="q1"]:checked').value;

	if (q1 == "a") {
		document.location.href="Maxence.html"; 
	} 	if (q1 == "b") {
		document.location.href="Camille.html"; 
	}
}
