function load() {
	percent++;
	if (percent>115)
	{
		//$("#loader").css("display", "none");
		$("#start").css("display", "block");
		$("#start").bind("click", function() {
			document.location.href='test.html';
		});
	}
	else
	{
        document.getElementById('logo') .style.height = percent + "px";
		//$("#percent").text(percent + "%");
		//On relance la fonction toutes les 40ms.
		setTimeout('load()',40);
	}
}

window.onload = function() {
	percent = 0;
	load();
}