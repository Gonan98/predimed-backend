import Disease from "../models/disease.model";

export const getDiseases = async (req, res) => {
    try {
        const diseases = await Disease.findAll();
        res.status(200).json(diseases);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getDiseaseById = async (req, res) => {

    const { id } = req.params;

    try {
        const disease = await Disease.findByPk(id);
        res.status(200).json(disease);
    } catch (err) {
        res.status(500).json(err);
    }
}
