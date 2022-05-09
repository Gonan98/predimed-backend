export class Neuron {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

export class NN {
    constructor(inputs, outputs) {
        this.inputs = inputs;
        this.outputs = outputs;
    }

    getMax() {
        return this.outputs.reduce((max, o) => max.value > o.value ? max : o);
    }
}