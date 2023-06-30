function checkAnswers() {
	var q1 = document.querySelector('input[name="q1"]:checked').value;

	if (q1 == "c") {
		document.location.href="Int3.html"; 
	} else {
        document.getElementById("result").innerHTML = "sale merde";
    }
}
