import fs from 'fs';
import { NeuralNetwork } from "brain.js";

const prob = {
    leucemia: 0,
    linfoma: 0,
    tsc: 0,
    neuroblastoma: 0,
    tumoresOseos: 0,
    sarcomas: 0,
    retinoblastomas: 0,
    tcg: 0,
    tumorHepatico: 0,
    histiocitosis: 0
}

const trainingData = [
    {
        input: [1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0],
        output: { ...prob, leucemia: 1 }
    },
    {
        input: [1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0],
        output: { ...prob, linfoma: 1 }
    },
    {
        input: [0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1],
        output: { ...prob, tsc: 1 }
    },
    {
        input: [0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0],
        output: { ...prob, neuroblastoma: 1 }
    },
    {
        input: [0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
        output: { ...prob, tumoresOseos: 1 }
    },
    {
        input: [0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0],
        output: { ...prob, sarcomas: 1 }
    },
    {
        input: [0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],
        output: { ...prob, retinoblastomas: 1 }
    },
    {
        input: [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0],
        output: { ...prob, tcg: 1 }
    },
    {
        input: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
        output: { ...prob, tumorHepatico: 1 }
    },
    {
        input: [0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
        output: { ...prob, histiocitosis: 1 }
    }
];

function saveModel(network) {
    const networkState = network.toJSON();
    fs.writeFileSync('network_state.json', JSON.stringify(networkState), 'utf-8');
}

function loadModel() {
    try {
        const model = fs.readFileSync('network_state.json', 'utf-8');
        return JSON.parse(model);
    } catch (error) {
        return null;
    }
}

function main() {

    const model = loadModel();
    const net = new NeuralNetwork();

    if (model) {
        net.fromJSON(model);
    } else {
        net.train(trainingData);
        saveModel(net);
    }
    
    const result = net.run([0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0]);

    for (const desease in result) {
        console.log(desease, ': ', Number(Math.round(result[desease]+'e2')+'e-2'));
    }
}

main();