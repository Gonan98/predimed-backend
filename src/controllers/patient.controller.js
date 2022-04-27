import Patient from "../models/patient.model";

export const add = async (req, res) => {
    const {
        firstName,
        lastName,
        documentNumber,
        birthdate,
        address,
        gender,
        districtId
    } = req.body;

    if (!firstName || !lastName || !documentNumber || !birthdate || !address || !gender || !districtId) {
        return res.status(400).json({ message: 'Some data is missing' });
    }

    try {
        let patient = await Patient.findOne({
            where: {
                documentNumber
            }
        });

        if (patient)
            throw "Patient existed"

        patient = await Patient.create({
            firstName,
            lastName,
            documentNumber,
            birthdate,
            address,
            districtId,
            gender
        });

        res.status(201).json({
            message: 'Patient created successfully',
        });

    } catch (error) {
        res.status(500).json({
            message: error,
        });
    }
}

export const getAll = async (req, res) => {
    const { docNumber } = req.query
    try {
        let patients = []
        if (docNumber !== undefined) patients = await Patient.findAll({ where: { documentNumber: docNumber } })
        else patients = await Patient.findAll({})
        res.status(200).json(patients);
    } catch (error) {
        console.log('error => ', error)
        res.status(500).json({
            message: error,
        });
    }
}


export const getById = async (req, res) => {
    const { id } = req.params
    try {
        const patient = await Patient.findByPk(id)
        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({
            message: error,
        });
    }
}


export const deleteById = async (req, res) => {
    const { id } = req.params
    try {
        await Patient.destroy({ where: { id } });
        res.status(201).json({
            message: 'Patient deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: error,
        });
    }
}

export const updateById = async (req, res) => {
    const { id } = req.params
    const {
        firstName,
        lastName,
        documentNumber,
        birthdate,
        address,
        gender,
        districtId
    } = req.body;

    if (!firstName || !lastName || !documentNumber || !birthdate || !address || !gender || !districtId) {
        return res.status(400).json({ message: 'Some data is missing' });
    }

    try {
        await Patient.update(
            {
                firstName,
                lastName,
                documentNumber,
                birthdate,
                address,
                gender,
                districtId
            },
            { where: { id } }
        );

        res.status(201).json({
            message: 'Patient update successfully',
        });

    } catch (error) {
        res.status(500).json({
            message: error,
        });
    }
}
