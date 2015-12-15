function load() {
	percent++;
	if (percent>100)
	{
		$("#loader").css("display", "none");
		$("#start").css("display", "block");
		$("#start").bind("click", function() {
			document.location.href='test.html';
		});
	}
	else
	{
		$("#percent").text(percent + "%");
		//On relance la fonction toutes les 40ms.
		setTimeout('load()',40);
	}
}

window.onload = function() {
	percent = 0;
	load();
}