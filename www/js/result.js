function loading() {
	percent++;
	if (percent>100)
	{
        $("#loading").css("display", "none");
        $("#intro").css("display", "none");
        $("#find").animate({opacity:"1"}, 500);
        $("#indice").animate({opacity:"1"}, 1500);
        $("#result").animate({opacity:"1"}, 2000);
        $(".down").animate({width:"75%"}, 1500);
        $("#indice").text("indice de symbiométrie 80%");
	}
	else
	{
		$("#percent").text(percent + "%");
		setTimeout('loading()',40);
	}
}

function start() {
    $("#find").css("display", "none");
    $("#indice").css("display", "none");
    $("#graph").css("display", "block");
    $("#graph").animate({opacity:"1"}, 500);
    $("#result").css("display", "none");
    $("#next").css("display", "block");
    $(".down").animate({width:"40%"}, 500);
}

window.onload = function() {
	percent = 0;
	loading();
} 