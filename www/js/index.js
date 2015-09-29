var app = {
    onStart: function() {
		var parentElement = document.getElementById('starter');

		parentElement.querySelector('.listening').setAttribute('style', 'display:none;');
		parentElement.querySelector('.received').setAttribute('style', 'display:block;');
		document.getElementById('background-image').setAttribute('style', '-webkit-filter: blur(0px);filter: blur(0px);');

		setTimeout(function(){
			document.getElementById('loading').setAttribute('style', 'display:none;');
			app.onWake();
		}, 3000);
    },
	onWake: function() {
		setTimeout(function(){
			document.getElementById('chat').setAttribute('style', 'display:block;');
			document.getElementById('writer').setAttribute('style', 'display:block;');
		}, 1000);
	},
	submit: function() {
		var question = document.getElementById('question');
		question.innerHTML = document.forms[0].message.value;
		question.setAttribute('style', 'display:block;');
		document.getElementById('answer').setAttribute('style', 'display:none;');
		setTimeout(function(){
			app.answer();
		}, 1500);
	},
	answer: function() {
		var question = document.getElementById('answer');
		var quotes = [
			"It is certain.",
			"It is decidedly so.",
			"Without a doubt.",
			"Yes, definitely.",
			"You may rely on it.",
			"As I see it, yes.",
			"Most likely!",
			"Probably yes.",
			"Yes!",
			"Signs point to yes.",
			"It's better not to tell you now.",
			"I cannot predict now.",
			"Concentrate and ask again.",
			"WTF is that question?!",
			"Don't count on it.",
			"My reply is no.",
			"My sources say no.",
			"The outlook is not so good.",
			"I'm very doubtful...",
			"Wesh !"
		];
		var quote = quotes[Math.floor(Math.random() * quotes.length)];
		question.innerHTML = quote;
		question.setAttribute('style', 'display:block;');
	}
};