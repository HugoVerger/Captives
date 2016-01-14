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

$(document).ready(function(){
    $("#start").click(function(){
        $("#digipal").animate({height:"5vmin"}, 200);
        $("#myDigipal").css("display", "none");
        $("#intro").css("display", "none");
        $("#start").css("display", "none");
        $("h1").css("display", "block");
        $("h2").css("display", "block");
        $("#question").css("display", "block");
        $(".square").css("display", "block").animate({opacity: 1}, 1000);
        $(".content").animate({opacity: 1}, 1000);
        $("hr").animate({width:"70%"}, 1000);
    });
});

function nextQuestion() {
	if (questionNumber == 5)
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
	init();
}