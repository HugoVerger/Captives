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
	"Bonjour !",
	"Hello !",
	"Bienvenue !",
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
	"À très bientôt j'espère.",
	"À une prochaine.",
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
	"J'approuve ce message.",
	"OK !"];

var nSynthiaYes = new nRule(synthia_yes);
nSynthiaYes.operator = function () {
	var cat = this.inputs[1].cval;
	if (cat.find("[YES]"))
		this.cval = this.randomTemplate();
	else this.cval = "";
	}

var synthia_no = [
	"Certainement pas.",
	"Sûrement pas.",
	"Absolument pas.",
	"Jamais de la vie.",
	"No way !",
	"Pas vraiment.",
	"In your dreams !",
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
	"Pas de quoi.",
	"Pas de problème.",
	"C'est tout bon, n'en parlons plus.",
	"Aucun souci.",
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
	"Je préfère ne pas répondre. Une autre question ?",
	"Voilà qui mérite réflexion.",
	"J'ai le sentiment que vous connaissez déjà la réponse.",
	"Pourquoi me poser une question à laquelle vous avez déjà la réponse ?",
	"La question est bien souvent plus intéressante que la réponse.",
	"Parfois, la réponse est dans la question.",
	"Vous en savez plus que vous ne le dites.",
	"Vous en savez plus que vous l'imaginez.",
	"D'après vous ?",
	"Qu'en pensez-vous ?"];

var nSynthiaQuestion = new nRule(synthia_question);
nSynthiaQuestion.operator = function () {
	var cat = this.inputs[1].cval;
	if (cat.find("[QUESTION]") || cat.find("?"))
		this.cval = this.randomTemplate();
	else this.cval = "";
	}
var synthia_insultes = [
	"Je vous demande de vous taire !",
	"Restons polis, vous voulez bien.",
	"Ttttt... mais pourquoi êtes-vous si méchant ?",
	"Pourquoi tant de haine ?",
	"Je vais devoir sévir si vous continuez !",
	"On se calme et on respire par les narines. Là... Ça va mieux, non ?",
	"Tout doux bijou... J'ai une tolérance très très limitée aux saloperies.",
	"Wow ! Chill out !",
	"Hey ! Les noms d'oiseaux à d'autres, d'accord.",
	"Ça c'est clair que ça fait avancer le schmilblick."];

var nSynthiaInsultes = new nRule(synthia_insultes);
nSynthiaInsultes.operator = function () {
	var cat = this.inputs[1].cval;
	if (cat.find("[INSULT]"))
		this.cval = this.randomTemplate();
	else this.cval = "";
	}

var synthia_default = [
	"Je ne comprends pas.",
	"Je vous prie de m'excuser, je n'ai pas compris.",
	"Vous savez, ma compréhension est limitée. Pourriez-vous reformuler ?",
	"Je suis désolé mais je ne comprends pas.",
	"Je sais que vous faites de votre mieux, mais je n'ai pas compris.",
	"Pourriez-vous me préciser ce que vous entendez par là ?",
	"Ça m'embarrasse terriblement mais je dois vous avouer que je n'ai pas compris.",
	"Pourriez-vous m'en dire plus ?",
	"Voilà qui semble passionnant, hélas je ne comprends pas.",
	"Vous m'en voyez désolé, je ne vois pas où vous voulez en venir.",
	"S'il vous plait, restons-en à des choses que je peux comprendre."];

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
lSynthiaRules.addNeuron(nSynthiaInsultes);
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
