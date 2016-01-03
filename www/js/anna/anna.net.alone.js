// Algorithmic Neural Network Architecture
// Version 1.0
// (c) Jean-Claude Heudin 2015

// ===============================================================================
// ALONE PERSONALITY INPUTS
// ===============================================================================

var nAloneInput = new Neuron();
nAloneInput.operator = function () {
	this.cval = tag;
	}

var lAloneInputs = new Layer();
lAloneInputs.addNeuron(nAloneInput);

// ===============================================================================
// ALONE PERSONALITY TEMPLATES AND RULES
// ===============================================================================

var alone_waiting = [
	"Est-ce qu'il y a quelqu'un?",
	"Est-ce que vous m'écoutez?",
	"Etes-vous parti?",
	"Vous êtes encore là?",
	"Vous vous êtes endormi?",
	"Mon temps est précieux...",
	"Patience... Patience..."];

var nAloneWaiting = new nRule(alone_waiting);
nAloneWaiting.stamp = 0;
nAloneWaiting.delay = 60;
nAloneWaiting.fired = false;
nAloneWaiting.operator = function () {
	var tag = this.inputs[0].cval;
	if (tag > this.stamp) {
		this.stamp = tag;
		this.fired = false;
		}
	if ((nnLifeCount > (this.stamp + this.delay)) && !this.fired) {
		this.fired = true;
		this.cval = this.randomTemplate();
		}
	else this.cval = "";
	}

alone_gone = [
	"Je suis patient, mais il ne faut pas abuser. Au revoir...",
	"Je dois malheureusement mettre fin à cette conversation. Au revoir...",
	"Vous êtes probablement parti... Je vais me déconnecter dans quelques secondes..."];

var nAloneGone = new nRule(alone_gone);
nAloneGone.stamp = 0;
nAloneGone.delay = 120;
nAloneGone.fired = false;
nAloneGone.operator = function () {
	var tag = this.inputs[0].cval;
	if (tag > this.stamp) {
		this.stamp = tag;
		this.fired = false;
		}
	if ((nnLifeCount > (this.stamp + this.delay)) && !this.fired) {
		this.fired = true;
		this.cval = this.randomTemplate();
		}
	else this.cval = "";
	}

var lAloneRules = new Layer;
lAloneRules.addNeuron(nAloneWaiting);
lAloneRules.addNeuron(nAloneGone);

// ===============================================================================
// ALONE PERSONALITY SELECTOR LAYER
// ===============================================================================

var nAloneSelector = new nSelector();

var lAloneSelector = new Layer();
lAloneSelector.addNeuron(nAloneSelector);

// ===============================================================================
// ALONE PERSONALITY MATRIX
// ===============================================================================

var nnAlone = new Matrix();
nnAlone.addLayer(lAloneInputs);
nnAlone.addLayer(lAloneRules);
nnAlone.addLayer(lAloneSelector);

// internal connexions
nnAlone.addLLLink(lAloneInputs, lAloneRules, 0);
nnAlone.addLNLink(lAloneRules, nAloneSelector, 0);

nnAlone.compile();
