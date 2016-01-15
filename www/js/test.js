function init() {
	$("#questionNumber").text("ÉTAPE " + questionNumber + "/10");
	$("#img11").attr("src", "img/test/question" + questionNumber + "/1.png");
	$("#img12").attr("src", "img/test/question" + questionNumber + "/2.png");
	$("#img21").attr("src", "img/test/question" + questionNumber + "/3.png");

	if (questionNumber == 2)
		$("#question").text("Vous êtes...");
	else if (questionNumber == 3)
		$("#question").text("Vous êtes plutôt...");
	else if (questionNumber == 4)
		$("#question").text("Un ami c'est d'abord...");
	else if (questionNumber == 5)
		$("#question").text("Jamais sans votre...");
	else if (questionNumber == 6)
		$("#question").text("La réussite, c'est...");
	else if (questionNumber == 7)
		$("#question").text("Vous êtes plutôt...");
	else if (questionNumber == 8)
		$("#question").text("Un bon moment, c'est...");
	else if (questionNumber == 9)
		$("#question").text("Vous préférez...");
	else if (questionNumber == 10)
		$("#question").text("Votre peur...");
}

function start() {
		$("#digipal").animate({height:"5vmin"}, 200);
		$("#myDigipal").css("display", "none");
		$("#intro").css("display", "none");
		$("#start").css("display", "none");
		$("h1").css("display", "block");
		$("h2").css("display", "block");
		$("#question").css("display", "block");
		$(".square").css("display", "block");
		$("hr").animate({width:"70%"}, 1000);
};

function nextQuestion() {
	if (questionNumber == 10)
	{
		document.location.href="result.html";
	}
	else
	{
		questionNumber++;
		init();
	}
}

window.onload = function() {
	questionNumber = 1;
	dmitry = 0;
	maxxy = 0;
	louise = 0;
	init();
}

function answer(answerNumber) {
	if (questionNumber == 1)
	{
		if (answerNumber == 1)
			dmitry++;
		else if (answerNumber == 2)
			maxxy++;
		else if (answerNumber == 3)
			louise++;
	}
	else if (questionNumber == 2)
	{
		if (answerNumber == 1)
			dmitry++;
		else if (answerNumber == 2)
			louise++;
		else if (answerNumber == 3)
			maxxy++;
	}
	else if (questionNumber == 3)
	{
		if (answerNumber == 1)
			dmitry++;
		else if (answerNumber == 2)
			maxxy++;
		else if (answerNumber == 3)
			louise++;
	}
	else if (questionNumber == 4)
	{
		if (answerNumber == 1)
			maxxy++;
		else if (answerNumber == 2)
			louise++;
		else if (answerNumber == 3)
			dmitry++;
	}
	else if (questionNumber == 5)
	{
		if (answerNumber == 1)
			maxxy++;
		else if (answerNumber == 2)
			louise++;
		else if (answerNumber == 3)
			dmitry++;
	}
	else if (questionNumber == 6)
	{
		if (answerNumber == 1)
			maxxy++;
		else if (answerNumber == 2)
			louise++;
		else if (answerNumber == 3)
			dmitry++;
	}
	else if (questionNumber == 7)
	{
		if (answerNumber == 1)
			dmitry++;
		else if (answerNumber == 2)
			louise++;
		else if (answerNumber == 3)
			maxxy++;
	}
	else if (questionNumber == 8)
	{
		if (answerNumber == 1)
			dmitry++;
		else if (answerNumber == 2)
			maxxy++;
		else if (answerNumber == 3)
			louise++;
	}
	else if (questionNumber == 9)
	{
		if (answerNumber == 1)
			maxxy++;
		else if (answerNumber == 2)
			dmitry++;
		else if (answerNumber == 3)
			louise++;
	}
	else if (questionNumber == 10)
	{
		if (answerNumber == 1)
			louise++;
		else if (answerNumber == 2)
			dmitry++;
		else if (answerNumber == 3)
			maxxy++;
	}
	nextQuestion();
}