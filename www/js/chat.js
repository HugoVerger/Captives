document.addEventListener("deviceready", init, false);
function init() {
	Console.log("Device is ready.")
}

function sendMessage () {
	$("#question").text($("#message").val());
	$("#question").css("display", "block");
	$("#answer").css("display", "none");
	setTimeout(function(){
		answer();
	}, 500);
	return false;
}

function answer () {
	var quotes = [
		"It is certain.",
		"It is decidedly so.",
		"Without a doubt.",
		"Yes, definitely.",
		"You may rely on it.",
		"As I see it, yes.",
		"Most likely!",
		"Probably yes.",
		"Yes!",
		"Signs point to yes.",
		"It's better not to tell you now.",
		"I cannot predict now.",
		"Concentrate and ask again.",
		"WTF is that question?!",
		"Don't count on it.",
		"My reply is no.",
		"My sources say no.",
		"The outlook is not so good.",
		"I'm very doubtful...",
		"Wesh !"
	];
	var quote = quotes[Math.floor(Math.random() * quotes.length)];
	$("#answer").text(quote);
	$("#answer").css("display", "block");
}