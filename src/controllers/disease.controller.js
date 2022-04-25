import Disease from "../models/disease.model";

export const getDiseases = async (req, res) => {
    try {
        const diseases = await Disease.findAll();
        res.status(200).json(diseases);
    } catch (err) {
        res.status(500).json({
            message: 'Database error'
        });
    }
}