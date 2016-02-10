// Algorithmic Neural Network Architecture
// Version 1.0
// (c) Jean-Claude Heudin 2015

// ===============================================================================
// LIFEPULSE
// ===============================================================================

var nnTimer = null;
var nnLifeCount = 0;
var messages_sent = 0;
var buggued = 0;
var currentBox = 2;

window.onload = function() {
	nnStart();
}
function nnStart () {
	//Activation de la barre d'input
	$("#message").removeAttr("disabled");
	//"Send a message" est mis comme placeholder dans la barre d'input
	$("#message").attr("placeholder", "C'est à vous !");
	//Le curseur prend la barre d'input en focus pour taper directement
	$("#message").focus();
	buggued = localStorage.getItem(1337);
	$("#box1").addClass("blue");
	currentBox = 2;
	if (buggued == 1) {
		$("#box1").text("AIDE-MOI, JE T'EN SUPPLIE !");
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

	if ((alone_speech != "") && (buggued != 1)) {
		dialogue(false, alone_speech);
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
	//On déclenche la phase de bug après un certain nombre de messages envoyés.
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
	//On affiche le message de l'utilisateur et on le supprime de la barre d'input.
	dialogue(true, $("#message").val());
	//On récupère la valeur du message dans la variable x
	var x = $("#message").val();
	$("#message").val("");
	x = x.trim();
	if (x != "") {
		setTimeout(function(){
			if (buggued == 1)
			{
				dialogue(false, "AIDE-MOI !!");
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
				dialogue(false, answer);
				messages_sent++;
				// text to speech
				//responsiveVoice.speak(answer, "French Male");
			}
		}, 500);
	}
}

function dialogue(fromHuman, dialoguetext) {
	if (dialoguetext.trim() != "") {
		if (currentBox < 5) {
			if (fromHuman) {
				$("#box" + currentBox).addClass("white");
			}
			else {
				$("#box" + currentBox).addClass("blue");
			}
			$("#box" + currentBox).text(dialoguetext);
			$("#box" + currentBox).css("display", "block");
			currentBox++;
		}
		else {
			for (var i = 1; i < 5; i++) {
				$("#box" + i).removeClass("white");
				$("#box" + i).removeClass("blue");
				if (((i < 4) && $("#box" + (i + 1)).hasClass("white")) || ((i == 4) && fromHuman)) {
					$("#box" + i).addClass("white");
				}
				else {
					$("#box" + i).addClass("blue");
				}
				if (i == 4)
					$("#box4").text(dialoguetext);
				else
					$("#box" + i).text($("#box" + (i+1)).text());
			}
		}
	}
}
