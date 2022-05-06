import District from "../models/district.model";
import Patient from "../models/patient.model";

export const addPatient = async (req, res) => {
    const {
        firstName,
        lastName,
        documentNumber,
        birthdate,
        address,
        gender,
        ubigeoId
    } = req.body;

    if (!firstName || !lastName || !documentNumber || !birthdate || !address || !gender || !ubigeoId) {
        return res.status(400).json({ message: 'Some data is missing' });
    }

    try {
        let patient = await Patient.findOne({
            where: {
                documentNumber
            }
        });

        if (patient) return res.status(400).json({ message: 'Patient is already registered' })

        patient = await Patient.create({
            firstName,
            lastName,
            documentNumber,
            birthdate,
            address,
            gender,
            ubigeoId
        });

        res.status(201).json({
            message: 'Patient created successfully',
        });

    } catch (err) {
        res.status(500).json(err);
    }
}

export const getAll = async (req, res) => {
    try {
        const patients = await Patient.findAll();
        res.status(200).json(patients);
    } catch (err) {
        res.status(500).json(err);
    }
}


export const getById = async (req, res) => {
    const { id } = req.params
    try {
        const patient = await Patient.findByPk(id);

        if (!patient) return res.status(400).json({message: 'Patient not found'});

        res.status(200).json(patient);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getByDocumentNumber = async (req, res) => {
    try {
        const patient = await Patient.findOne({ where: { documentNumber: req.params.doc }, include: District });
        if (!patient) return res.status(400).json({message: 'Patient not found'});
        res.status(200).json(patient);
    } catch (err) {
        res.status(500).json({
            message: err,
        });
    }
}
