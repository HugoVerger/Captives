setTimeout(function(){
	$("#video").fadeOut(2000, function()
	{
		$("#background-image").css("display", "block");
		var audio = new Audio('data/ringtone.mp3');
		audio.volume = 0.5;
		audio.loop = true;
		audio.play();
		$(window).click(function() {
			localStorage.setItem(1337, 1);
			document.location.href="chat.html";
		});
	});
}, 6000);