function init() {
	$("#questionNumber").text("Question " + questionNumber + "/5");
	$("#img11").attr("src", "img/test/question" + questionNumber + "/1.png");
	$("#img12").attr("src", "img/test/question" + questionNumber + "/2.png");
	$("#img21").attr("src", "img/test/question" + questionNumber + "/3.png");
	$("#img22").attr("src", "img/test/question" + questionNumber + "/4.png");

	if (questionNumber == 2)
		$("#question").text("Quel dessin vous évoque le plus la sérénité ?");
	else if (questionNumber == 3)
		$("#question").text("Combien de nouvelles rencontres faites-vous chaque jour ?");
	else if (questionNumber == 4)
		$("#question").text("Lequel de ces lieux souhaiteriez-vous le plus visiter ?");
	else if (questionNumber == 5)
		$("#question").text("Dans quel but voulez-vous utiliser cet assistant ?");
}

function nextQuestion() {
	if (questionNumber == 5)
	{
		document.location.href="chat.html";
	}
	else
	{
		questionNumber++;
		init();
	}
}

window.onload = function() {
	questionNumber = 1;
	init();
}