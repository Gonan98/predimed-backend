import Symptom from "../models/symptom.model";

export const getSymptoms = async (req, res) => {
    try {
        const symptoms = await Symptom.findAll();
        res.status(200).json(symptoms);
    } catch (err) {
        res.status(500).json({
            message: 'Database error'
        });
    }
}