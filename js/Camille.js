function checkAnswers() {
	var q1 = document.querySelector('input[name="q1"]:checked').value;

	if (q1 == "b") {
		document.location.href="Cam.html"; 
	} else {
        document.getElementById("result").innerHTML = "sale merde";
    }
}
