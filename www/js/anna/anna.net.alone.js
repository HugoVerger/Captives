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
	"Allo !",
	"Y a quelqu'un ?",
	"Houston, aurions-nous un problème ?",
	"Vous m'entendez ?",
	"Je vais faire un tour... Vous me dites quand vous y êtes.",
	"Vous êtes là ?",
	"J'ai tout mon temps. Enfin...",
	"Prenez votre temps... Mais vite, ok ?",
	"Vous seriez-vous endormi ?",
	"Nous pouvons reprendre cette conversation une autre fois, si vous voulez.",
	"On ne va peut-être pas y passer le réveillon.",
	"J'ai d'autres clients, vous savez.",
	"Vous me dites quand vous y êtes, ok ?"];

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
	"Je suis patient, mais bon... Bye now.",
	"Mon infinie patience... n'est pas infinie. Bye...",
	"Ok, il suffit... Arrivederci !",
	"Time's up ! Seeya.",
	"Vous savez quoi, on remet ça à une prochaine. Bye !",
	"On se rappelle, on se fait une bouffe, ok. Allez... salut.",
	"Je vois... sympa ! J'me casse, bye !'.",
	"Bon... ben j'y vais alors. Salut.",
	"Je dois malheureusement mettre fin à cette passionnante conversation. Bye...",
	"OOops, déjà ?! Je dois y aller là. À plus !",
	"Allez... salut !",
	"Ah c'qu'on s'emmerde ici... ah c'qu'on s'emmerde ici... Merde ici, merde ici, merde ici... tsoin, tsoin !",
	"ZZzzzzZZZzzz... Hein, quoi... Mmmrpf... Salut !",
	"Houston, nous avons un problème... Déconnexion ! DÉCONNEXION !"];

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
