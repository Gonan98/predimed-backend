import { NeuralNetwork } from 'brain.js'
import model from '../../network_state.json';
import { NN } from '../models/nn.model';

export const doPrediction = (req, res) => {
    if (!req.body) return res.status(400).json({ message: 'There are no data to predict!' });

    const net = new NeuralNetwork();
    net.fromJSON(model);

    const mappedInputs = {};
    req.body.forEach(input => {
        mappedInputs[input.name] = input.value
    });

    const result = net.run(mappedInputs);
    const outputs = Object.entries(result).map(entry => ({ name: entry[0], value: entry[1] }));
    const nn = new NN(req.body, outputs);

    res.status(200).json({
        inputs: nn.inputs,
        outputs: nn.outputs,
        maxOutput: nn.getMax()
    });
}