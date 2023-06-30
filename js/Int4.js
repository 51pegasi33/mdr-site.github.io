function checkAnswers() {
	var q1 = document.querySelector('input[name="q1"]:checked').value;

	if (q1 == "a") {
		document.location.href="../index.html"; 
	} else {
        document.getElementById("result").innerHTML = "sale merde";
    }
}
