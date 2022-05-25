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
        const max = this.outputs.reduce((max, o) => max.value > o.value ? max : o);
        max.value = +(Math.round(max.value + 'e+2') + 'e-2');
        return max;
    }
}