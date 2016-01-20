function loading() {
	percent++;
	if (percent < 100) {
		$("#percent").text(percent + "%");
		setTimeout('loading()',30);
	} 
	else {
        $("#percent").css("display", "none");
        $("#intro").css("display", "none");
        $("#validate").animate({opacity:"1"}, 2000);
        $("#indice").text("Indice de symbiométrie: 80%");
	}
}

function start() {
    $("#find").css("display", "none");
    $("#indice").css("display", "none");
    $("#graph").css("display", "block");
    $("#graph").animate({opacity:"1"}, 1000);
    $("#result").css("display", "none");
    $("#next").css("display", "block");
}

window.onload = function() {
	percent = 0;
	loading();
}