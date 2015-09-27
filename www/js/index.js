var app = {
    initialize: function() {
        document.addEventListener('click', this.onClick, false);
    },
    onClick: function() {
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
		var backgroundImage = document.getElementById('background-image');
		var loading = document.getElementById('loading');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
		backgroundImage.setAttribute('style', '-webkit-filter: blur(0px);');

		setTimeout(function(){
			loading.setAttribute('style', 'display:none;');
		}, 3000);
    }
};