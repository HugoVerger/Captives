function loading() {
	percent++;
	if (percent < 100) {
		$("#percent").text(percent + "%");
		setTimeout('loading()',30);
	}
	else {
        $("#percent").css("display", "none");
        $("#intro").css("display", "none");
		if (assistant != null && indice != null) {
			$("#result").text("Vous avez " + indice + "% de compatibilité avec " + assistant + ".");
			if (assistant == "Dmitry")
				$("#graph").attr("src", "img/placeholder.png");
			else if (assistant == "Louise")
				$("#graph").attr("src", "img/placeholder.png");
			else
				$("#graph").attr("src", "img/placeholder.png");
		}
        $("#validate").animate({opacity:"1"}, 1500);
	}
}

window.onload = function() {
	percent = 0;
	assistant = localStorage.getItem(1338);
	indice = localStorage.getItem(1339);
	loading();
}