// Algorithmic Neural Network Architecture
// Version 1.0
// (c) Jean-Claude Heudin 2015

// ===============================================================================
// LIFEPULSE
// ===============================================================================

var nnTimer = null;
var nnLifeCount = 0;
var messages_sent = 0;
var buggued = false;

window.onload = function() {
	nnStart();
}
function nnStart () {
	//Activation de la barre d'input
	$("#message").removeAttr("disabled");
	//"Send a message" est mis comme placeholder dans la barre d'input
	$("#message").attr("placeholder", "Send a message");
	//Le curseur prend la barre d'input en focus pour taper directement
	$("#message").focus();
	buggued = localStorage.getItem(1337);
	if (buggued == 1) {
		$("#topbubble").text("AIDE-MOI !");
	}
	nnTimer = setInterval(nnLifePulse, 1000)
}
function nnStop () { clearInterval(nnTimer); }

var alone_speech = "";

function nnLifePulse () {
	nnLifeCount++;

	alone_speech = "";

	nnAlone.propagate();
	alone_speech = nAloneSelector.cval;

	if (alone_speech != "") {
		$("#answer").text(alone_speech);
		$("#answer").css("display", "block");
		// text to speech
		//responsiveVoice.speak(alone_speech, "French Male");
	}
}

// ===============================================================================
// WEB INTERFACE
// ===============================================================================

var speech = "";
var tag = 0;

function sendMessage () {
	if (messages_sent > 4)
	{
		if (buggued == 1) {
			localStorage.setItem(1337, 0);
			document.location.href="credits.html";
		}
		else
			document.location.href="bug.html";
	}
	else
	{
		tag = nnLifeCount;
		think();
	}
	return false;
}

function think () {
	//On affiche le message de l'utilisateur dans la bulle de question et on le supprime de la barre d'input.
	$("#question").text($("#message").val());
	$("#question").css("display", "none");
	$("#answer").css("display", "none");
	//On récupère la valeur du message dans la variable x
	var x = $("#message").val();
	$("#message").val("");
	x = x.trim();
	if (x != "") {
		$("#question").css("display", "block");
		setTimeout(function(){
			if (buggued == 1)
			{
				$("#answer").text("AIDE-MOI !!");
				$("#answer").css("display", "block");
				messages_sent++;
			}
			else
			{
				speech = x;
				// think
				nnInput.propagate();
				nnSynthia.propagate();
				nnOutput.propagate();
				// write answer
				var answer = nOutput.cval;
				$("#answer").text(answer);
				$("#answer").css("display", "block");
				messages_sent++;
				// text to speech
				//responsiveVoice.speak(answer, "French Male");
			}
		}, 500);
	}
}