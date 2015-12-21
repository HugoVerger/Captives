// Algorithmic Neural Network Architecture
// Version 1.0
// (c) Jean-Claude Heudin 2015

// ===============================================================================
// INPUT LAYER
// ===============================================================================

var nInput = new Neuron();
nInput.operator = function () {
	this.cval = speech.parse_french();
	}

var lInput = new Layer();
lInput.addNeuron(nInput);

// ===============================================================================
// BASIC LANGUAGE PROCESSING LAYER
// ===============================================================================

// french generic categories extractor
var nGenericFrench = new nCategory("FRENCH");
nGenericFrench.operator = function () {
	// autobuild
	if (!this.built) this.build();
	// get string
	var s = this.inputs[0].cval;
	this.cval = this.category.apply("GENERIC", s);
	}
nGenericFrench.build = function () {
	if (this.built) return true;
	build_french(this.category);
	this.built = true;
	return true;
	}

var lParser = new Layer();
lParser.addNeuron(nGenericFrench);

// ===============================================================================
// NETWORK ARCHITECTURE
// ===============================================================================

var nnInput = new Matrix();
nnInput.addLayer(lInput);
nnInput.addLayer(lParser);

// connexions
nnInput.addNNLink(nInput, nGenericFrench, 0);

nnInput.compile();
