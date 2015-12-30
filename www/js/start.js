var intro = "0";

function load() {
	percent++;
    if (percent % 20 == 0)
    {
        intro = intro ^ 1;
        document.getElementById('intro').style.opacity = intro;
    }
	if (percent == 160)
	{
        document.getElementById('digipal').style.height = "40vmin";
        document.getElementById('logo_holder').style.height = "115px";
	}
    if (percent == 165)
    {
        document.getElementById('intro').style.opacity = "1";
        document.getElementById('title').style.opacity = "1";
        $("#start").css("display", "block");
		$("#start").bind("click", function() {
			document.location.href='test.html';
		});
    }
	if (percent > 0)
	{
        document.getElementById('logo').style.height = percent + "px";
		//$("#percent").text(percent + "%");
		//On relance la fonction toutes les 40ms.
		setTimeout('load()', 40);
	}
}

window.onload = function() {
	percent = 0;
	load();
}