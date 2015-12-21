// Algorithmic Neural Network Architecture
// Version 1.0
// (c) Jean-Claude Heudin 2015

// ===============================================================================
// SELECTOR LAYER
// ===============================================================================

var nOutputSelector = new nWheel();
//nOutputSelector.operator = function () {
//	this.cval = this.inputs[0].cval;
//	}

var lOutputSelector = new Layer();
lOutputSelector.addNeuron(nOutputSelector);

// ===============================================================================
// OUTPUT LAYER
// ===============================================================================

var nOutput = new Neuron();
nOutput.operator = function () {
	this.cval = this.inputs[0].cval;
	}

var lOutput = new Layer();
lOutput.addNeuron(nOutput);

// ===============================================================================
// NETWORK ARCHITECTURE
// ===============================================================================

var nnOutput = new Matrix();
nnOutput.addLayer(lOutputSelector);
nnOutput.addLayer(lOutput);

// connect to other networks
nOutputSelector.addInput(nSynthiaSelector, 0.5);
// connexions
nnOutput.addNNLink(nOutputSelector, nOutput, 0);

nnOutput.compile();
