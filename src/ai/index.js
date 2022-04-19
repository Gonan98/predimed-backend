import fs from 'fs';
import { NeuralNetwork } from "brain.js";

const trainingData = [
    {
        input: [1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0],
        output: { leucemia: 1 }
    },
    {
        input: [1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0],
        output: { linfoma: 1 }
    },
    {
        input: [0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1],
        output: { tsc: 1 }
    },
    {
        input: [0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0],
        output: { neuroblastoma: 1 }
    },
    {
        input: [0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
        output: { tumoresOseos: 1 }
    },
    {
        input: [0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0],
        output: { sarcomas: 1 }
    },
    {
        input: [0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],
        output: { retinoblastomas: 1 }
    },
    {
        input: [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0],
        output: { tcg: 1 }
    },
    {
        input: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
        output: { tumorHepatico: 1 }
    },
    {
        input: [0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
        output: { histiocitosis: 1 }
    }
];

function saveModel(network) {
    const networkState = network.toJSON();
    fs.writeFileSync('network_state.json', JSON.stringify(networkState), 'utf-8');
}

function loadModel() {
    fs.readFile('network_state.json', 'utf-8', (err, data) => {
        if (err) return '';
        return JSON.parse(data);
    });
}

function main() {

    const model = loadModel();
    const net = new NeuralNetwork({ hiddenLayers: [3] });

    if (model) {
        net.fromJSON(model);
    } else {
        net.train(trainingData, {
            log: err => console.error(err),
            iterations: 1000
        });
        saveModel(net);
    }

    const result = net.run([1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0]);

    console.log(result);

    console.log('\n-----Rounded Result-----');
    for (const desease in result) {
        console.log(desease, ': ', Number(Math.round(result[desease]+'e2')+'e-2'));
    }
}

main();