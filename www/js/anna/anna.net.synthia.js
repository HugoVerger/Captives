// Algorithmic Neural Network Architecture
// Version 1.0
// (c) Jean-Claude Heudin 2015

// ===============================================================================
// SYNTHIA PERSONALITY INPUTS
// ===============================================================================

var nSynthiaSentence = new Neuron();
nSynthiaSentence.operator = function () {
	this.cval = this.inputs[0].cval;
	}

var nSynthiaCategories = new Neuron();
nSynthiaCategories.operator = function () {
	this.cval = this.inputs[0].cval;
	}

var lSynthiaInputs = new Layer();
lSynthiaInputs.addNeuron(nSynthiaSentence);
lSynthiaInputs.addNeuron(nSynthiaCategories);

// ===============================================================================
// SYNTHIA PERSONALITY TEMPLATES AND RULES
// ===============================================================================

var synthia_hello = [
	"Bonjour!",
	"Bienvenue.",
	"Bonjour à vous.",
	"Bonjour, c'est un plaisir de vous rencontrer."];

var nSynthiaHello = new nRule(synthia_hello);
nSynthiaHello.operator = function () {
	var cat = this.inputs[1].cval;
	if (cat.find("[HELLO]") || (cat.find("[POSITIVE]") && cat.find("[TIME]")))
		this.cval = this.randomTemplate();
	else this.cval = "";
	}

var synthia_bye = [
	"Au revoir.",
	"J'espère vous revoir bientôt.",
	"A bientôt j'espère.",
	"Au plaisir."];

var nSynthiaBye = new nRule(synthia_bye);
nSynthiaBye.operator = function () {
	var str = this.inputs[0].cval;
	var cat = this.inputs[1].cval;
	if (cat.find("[BYE]") || str.find("see you"))
		this.cval = this.randomTemplate();
	else this.cval = "";
	}

var synthia_yes = [
	"D'accord.",
	"Bien.",
	"Certainement.",
	"Probablement.",
	"Je suis entièrement d'accord.",
	"Je suis d'accord avec vous.",
	"Vous avez raison.",
	"Entièrement d'accord.",
	"J'approuve."];

var nSynthiaYes = new nRule(synthia_yes);
nSynthiaYes.operator = function () {
	var cat = this.inputs[1].cval;
	if (cat.find("[YES]"))
		this.cval = this.randomTemplate();
	else this.cval = "";
	}

var synthia_no = [
	"Certainement pas.",
	"Surement pas.",
	"Pas vraiment.",
	"Négatif.",
	"Evidemment non.",
	"Je ne pense pas non plus."];

var nSynthiaNo = new nRule(synthia_no);
nSynthiaNo.operator = function () {
	var cat = this.inputs[1].cval;
	if (cat.find("[NO]"))
		this.cval = this.randomTemplate();
	else this.cval = "";
	}

var synthia_sorry = [
	"Il n'y a pas de quoi.",
	"Pas de problème.",
	"Pas de soucis.",
	"Autant pour moi.",
	"Ne vous en faites pas.",
	"Je préfère cela."];

var nSynthiaSorry = new nRule(synthia_sorry);
nSynthiaSorry.operator = function () {
	var cat = this.inputs[1].cval;
	if (cat.find("[SORRY]"))
		this.cval = this.randomTemplate();
	else this.cval = "";
	}

var synthia_question = [
	"Je ne souhaite pas forcément vous répondre.",
	"Cette question mérite réflexion.",
	"Vous connaissez probablement déjà la réponse.",
	"Pourquoi me posez une question à laquelle vous avez la réponse?",
	"La question est bien souvent plus intéressante que la réponse.",
	"Parfois, la réponse est dans la question.",
	"Vous en savez plus que vous ne le dites.",
	"Vous en savez plus que vous l'imaginez.",
	"D'après vous?"];

var nSynthiaQuestion = new nRule(synthia_question);
nSynthiaQuestion.operator = function () {
	var cat = this.inputs[1].cval;
	if (cat.find("[QUESTION]") || cat.find("?"))
		this.cval = this.randomTemplate();
	else this.cval = "";
	}

var synthia_default = [
	"Je ne comprend pas.",
	"Je vous prie de m'excuser mais je n'ai pas compris.",
	"Vous savez, ma compréhension est limitée. Pouvez-vous reformuler?",
	"Je suis désolé mais je ne comprend pas.",
	"Je sais que vous faites de votre mieux, mais je n'ai pas compris.",
	"Pourriez-vous me dire ce que cela signifie?",
	"Je déteste cela mais je dois vous avouez que je n'ai pas compris.",
	"Pourriez-vous m'expliquer ce que vous dites?",
	"Cela semble très interressant, mais je ne comprend pas.",
	"Je suis profondément navré de mon ignorance. Je n'ai pas compris.",
	"S'il vous plait, dite moi seulement ce que je peux comprendre."];

var nSynthiaDefault = new nRule(synthia_default);
nSynthiaDefault.operator = function () {
	var str = this.inputs[0].cval;
	if (str.token_length() > 1)
		this.cval = this.randomTemplate();
	else this.cval = "";
	}

var lSynthiaRules = new Layer();
lSynthiaRules.addNeuron(nSynthiaHello);
lSynthiaRules.addNeuron(nSynthiaBye);
lSynthiaRules.addNeuron(nSynthiaYes);
lSynthiaRules.addNeuron(nSynthiaNo);
lSynthiaRules.addNeuron(nSynthiaSorry);
lSynthiaRules.addNeuron(nSynthiaQuestion);
lSynthiaRules.addNeuron(nSynthiaDefault);

// ===============================================================================
// SYNTHIA PERSONALITY SELECTOR LAYER
// ===============================================================================

var nSynthiaSelector = new nSelector();

var lSynthiaSelector = new Layer();
lSynthiaSelector.addNeuron(nSynthiaSelector);

// ===============================================================================
// SYNTHIA PERSONALITY MATRIX
// ===============================================================================

var nnSynthia = new Matrix();
nnSynthia.addLayer(lSynthiaInputs);
nnSynthia.addLayer(lSynthiaRules);
nnSynthia.addLayer(lSynthiaSelector);

// connect to input network
nSynthiaSentence.addInput(nInput, 0);
nSynthiaCategories.addInput(nGenericFrench, 0);
// internal connexions
nnSynthia.addLLLink(lSynthiaInputs, lSynthiaRules, 0);
nnSynthia.addLNLink(lSynthiaRules, nSynthiaSelector, 0.5);

nnSynthia.compile();
