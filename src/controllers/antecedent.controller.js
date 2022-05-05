import AntecedentType from "../models/antecedent-type.model";
import Antecedent from "../models/antecedent.model";

export const addAntecedent = async (req, res) => {
    const { detail, issueDate, patientId, antecedentTypeId } = req.body;

    try {
        await Antecedent.create({
            detail,
            issueDate,
            patientId,
            antecedentTypeId
        });

        res.status(201).json({
            message: 'Antecedent saved successfuly'
        });
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getAntecedentsByPatient = async (req, res) => {
    const qPatientId = req.query.patientId;
    if (!qPatientId) return res.status(400).json({ message: 'Query parameter <patient> is missing' });
    try {
        const antecedents = await Antecedent.findAll({
            where: { patientId: qPatientId },
            include: AntecedentType
        });

        res.status(200).json(antecedents);
    } catch (error) {
        res.status(500).json(error);
    }
}