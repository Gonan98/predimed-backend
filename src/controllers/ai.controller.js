import NN from '../ai';
import AIResponse from '../models/ai.model';

export const doPrediction = (req, res) => {

    const { inputs } = req.body;

    if (!inputs) return res.status(400).json({ message: 'There are no inputs!' });

    inputs.forEach((value, index) => {
        AIResponse.inputs[`s${index+1}`] = value
    });

    const outputs = NN.run(AIResponse.inputs);

    AIResponse.outputs = outputs;

    res.status(200).json(AIResponse);
}