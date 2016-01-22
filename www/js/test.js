function init() {
	$("#questionNumber").text("ÉTAPE " + questionNumber + "/10");
	$("#img11").attr("src", "img/test/question" + questionNumber + "/1.png");
	$("#img21").attr("src", "img/test/question" + questionNumber + "/2.png");
	$("#img22").attr("src", "img/test/question" + questionNumber + "/3.png");

	if (questionNumber == 2)
	{
		$("#question").text("Vous êtes...");
		$("#title11").text("Homme");
		$("#title21").text("Femme");
		$("#title22").text("Autre");
	}
	else if (questionNumber == 3)
	{
		$("#question").text("Vous êtes plutôt...");
		$("#title11").text("Débordé");
		$("#title21").text("Festif");
		$("#title22").text("Intellect");
	}
	else if (questionNumber == 4)
	{
		$("#question").text("Un ami c'est d'abord...");
		$("#title11").text("Animal");
		$("#title21").text("Psychologue");
		$("#title22").text("Médecin");
	}
	else if (questionNumber == 5)
	{
		$("#question").text("Jamais sans votre...");
		$("#title11").text("Brosse à dents");
		$("#title21").text("Nourriture");
		$("#title22").text("Smartphone");
	}
	else if (questionNumber == 6)
	{
		$("#question").text("La réussite, c'est...");
		$("#title11").text("Amitié");
		$("#title21").text("Bonheur");
		$("#title22").text("Reconnaissance");
	}
	else if (questionNumber == 7)
	{
		$("#question").text("Vous êtes plutôt...");
		$("#title11").text("Café");
		$("#title21").text("Thé");
		$("#title22").text("Alcool");
	}
	else if (questionNumber == 8)
	{
		$("#question").text("Un bon moment, c'est...");
		$("#title11").text("Silence");
		$("#title21").text("Soirée");
		$("#title22").text("Balade");
	}
	else if (questionNumber == 9)
	{
		$("#question").text("Vous préférez...");
		$("#title11").text("Horreur");
		$("#title21").text("Sci-Fi");
		$("#title22").text("Comédie");
	}
	else if (questionNumber == 10)
	{
		$("#question").text("Votre peur...");
		$("#title11").text("Insectes");
		$("#title21").text("Vertige");
		$("#title22").text("Isolement");
	}
}

function start() {
	$("#digipal").animate({height:"5vmin"}, 200);
	$("#digipal").css("margin-top", "2vh");
	$("hr").css("width", "70%");
	$("#myDigipal").css("display", "none");
	$("#intro").css("display", "none");
	$("#start").css("display", "none");
	$("h1").css("display", "block");
	$("h2").css("display", "block");
	$("#question").css("display", "block");
	$(".square").css("display", "block");
};

function nextQuestion() {
	if (questionNumber == 10)
	{
        if (dmitry >= maxxy)
        {
            if (dmitry >= louise)
            {
				localStorage.setItem(1338,"Dmitry");
                var symbio = dmitry;
            }
            else
            {
				localStorage.setItem(1338,"Louise");
                var symbio = louise;
            }
        }
        else
        {
            if (maxxy >= louise)
            {
				localStorage.setItem(1338,"Maxxy");
                var symbio = maxxy;
            }
            else
            {
				localStorage.setItem(1338,"Louise");
                var symbio = louise;
            }
        }
		symbio = 50 + 5 * symbio;
		localStorage.setItem(1339,symbio);
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