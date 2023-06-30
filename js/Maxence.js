function checkAnswers() {
	var q1 = document.querySelector('input[name="q1"]:checked').value;

	if (q1 == "c") {
		document.location.href="Maxou.html"; 
	} else {
        document.getElementById("result").innerHTML = "sale merde";
    }
}
