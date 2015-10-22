/*if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
	document.addEventListener("deviceready", init, false);
	alert("phone detected");
} else {
	init();
}*/

function init () {
	rs = new RiveScript({utf8: true});
	rs.loadFile([
		"brain/begin.rive",
		"brain/eliza.rive",
		"brain/myself.rive"
		//Ajoutez votre propre fichier ici
	], loading_done, loading_error);
}

function loading_done () {
	$("#message").removeAttr("disabled");
	$("#message").attr("placeholder", "Send a message");
	$("#message").focus();

	rs.sortReplies();
}

function loading_error (error) {
	alert("Error, cannot load rive files");
	console.log("Error when loading files: " + error);
}

function sendMessage () {
	$("#question").text($("#message").val());
	$("#question").css("display", "block");
	$("#answer").css("display", "none");
	var text = $("#message").val();
	$("#message").val("");

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
			var reply = rs.reply("local-user", text);
			reply = reply.replace(/\n/g, "<br>");
			$("#answer").text(reply);
			$("#answer").css("display", "block");
		} catch(e) {
			window.alert(e.message + "\n" + e.line);
			console.log(e);
		}
	}, 500);
	return false;
}