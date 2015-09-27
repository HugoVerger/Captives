var app = {
    initialize: function() {
        document.addEventListener('click', this.onClick, false);
    },
    onClick: function() {
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
		var backgroundImage = document.getElementById('background-image');
		var appDiv = document.getElementById('app');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
		backgroundImage.setAttribute('style', 'filter: blur(0px);');

		setTimeout(function(){
			appDiv.setAttribute('style', 'display:none;');
		}, 5000);
    }
};