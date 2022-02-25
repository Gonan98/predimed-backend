import Patient from "../models/patient.model";
import Referred from "../models/referred.model";

export const addPatient = async (req, res) => {
    const {
        medicalRecord,
        firstName,
        lastName,
        dni,
        birthdate,
        address,
        gender,
        diagnostic,
        anamnesis
    } = req.body;

    if (!medicalRecord || !firstName || !lastName || !dni || !birthdate || !address || !gender) {
        return res.status(400).json({ message: 'Some data is missing' });
    }

    try {

        let patient = await Patient.findOne({
           where: {
               dni
           }
        });

        if (!patient) {
            patient = await Patient.create({
                medicalRecord,
                firstName,
                lastName,
                dni,
                birthdate,
                address,
                gender
            });
        }

        await Referred.create({
            user_id: req.user.id,
            patient_id: patient.id,
            diagnostic,
            anamnesis
        });

        res.status(201).json({
            message: 'Patient created successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
}

export const getReferred = async (req, res) => {
    try {
        const referred = Referred.findAll({
            include: Patient,
            where: {
                user_id: req.user.id
            }
        });

        res.status(200).json(referred);

    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
}

export const getReferredById = async (req, res) => {
    try {
        const refer = Referred.findOne({
            include: Patient,
            where: {
                user_id: req.user.id,
                patient_id: req.params.patientId
            }
        })
    } catch (error) {
        res.status(500).json(error);
    }
}