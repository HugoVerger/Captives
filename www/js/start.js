function start() {
	$("#title").css("opacity", "1");
	//$("#start").css("opacity", "1");
	$("#start").bind("click", function() {
		document.location.href='test.html';
	});
}

window.onload = function() {
	setTimeout('start()', 5000);
}