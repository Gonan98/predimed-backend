import fs from 'fs';
import { NeuralNetwork } from 'brain.js';

const net = new NeuralNetwork();

try {
    const model = fs.readFileSync('network_state.json', 'utf-8');
    net.fromJSON(JSON.parse(model));
} catch (error) {
    throw new Error('No se pudo cargar el modelo correctamente');
}

export default net;