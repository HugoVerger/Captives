//init() est éxécutée au chargement de la page.
function init () {
	messages_sent = 0;
	//Création d'une instance de RiveScript
	rs = new RiveScript({utf8: true});
	//Chargement des scripts .rive
	//La fonction loading_done ou loading_error sera éxécutée en fonction du déroulement du chargement des fichiers.
	rs.loadFile([
		"brain/begin.rive",
		"brain/eliza.rive",
		"brain/myself.rive"
		//D'autres fichiers .rive peuvent être ajoutés ici
	], loading_done, loading_error);
}

//loading_done() est éxécutée si les scripts se sont correctement chargés
function loading_done () {
	//Activation de la barre d'input
	$("#message").removeAttr("disabled");
	//"Send a message" est mis comme placeholder dans la barre d'input
	$("#message").attr("placeholder", "Send a message");
	//Le curseur prend la barre d'input en focus pour taper directement
	$("#message").focus();

	//Les réponses de l'interpréteur sont triées automatiquement
	rs.sortReplies();
}

//loading_error() est éxécutée si les scripts n'ont pas été bien chargés
//ce problème survient si on essaie d'ouvrir l'application dans un navigateur autre que Firefox sans l'héberger sur réseau local.
function loading_error (error) {
	alert("Error, cannot load rive files");
	console.log("Error when loading files: " + error);
}

//sendMessage() est éxécutée lorsque l'utilisateur envoie son message, c'est lorsqu'il presse Enter dans le navigateur
function sendMessage () {
	if (messages_sent > 2)
	{
		document.location.href="bug.html";
	}
	else
	{
		//On affiche le message de l'utilisateur dans la bulle de question et on le supprime de la barre d'input.
		$("#question").text($("#message").val());
		$("#question").css("display", "block");
		$("#answer").css("display", "none");
		$("#message").val("");

		//On récupère la valeur du message dans la variable text
		var text = $("#message").val();

		//On modifie le message pour l'adapter aux critères anglophones de l'interpreteur RiveScript
		text = text.replace(/[éèêë]/gi, "e");
		text = text.replace(/[éèêë]/gi, "e");
		text = text.replace(/[àâä]/gi, "a");
		text = text.replace(/[ïî]/gi, "i");
		text = text.replace(/[üûù]/gi, "u");
		text = text.replace(/[öô]/gi, "o");
		text = text.replace(/[ç]/gi, "c");
		text = text.replace(/[']/gi, " ");
		text = text.replace(/[-]/gi, " ");
		text = text.replace(/[?]/gi, " ");
		text = text.replace(/[!]/gi, " ");
		text = text.replace(/[\s]{2,}/g," ");
		text = text.trim();

		setTimeout(function(){
			try {
				//On envoie le message et on récupère la réponse dans reply
				var reply = rs.reply("local-user", text);
				//On traite la réponse et on l'affiche dans la bulle de réponse
				reply = reply.replace(/\n/g, "<br>");
				$("#answer").text(reply);
				$("#answer").css("display", "block");
				messages_sent++;
			} catch(e) {
				window.alert(e.message + "\n" + e.line);
				console.log(e);
			}
		}, 500);
	}
	return false;
}

init();