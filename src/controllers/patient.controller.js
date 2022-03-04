import Location from "../models/location.model";
import Patient from "../models/patient.model";
import Referred from "../models/referred.model";

export const addPatient = async (req, res) => {
    const {
        firstName,
        lastName,
        documentNumber,
        birthdate,
        address,
        gender,
        diagnostic,
        anamnesis,
        department,
        province,
        district
    } = req.body;

    if (!firstName || !lastName || !documentNumber || !birthdate || !address || !gender) {
        return res.status(400).json({ message: 'Some data is missing' });
    }

    try {
        let patient = await Patient.findOne({
            where: {
                documentNumber
            }
        });

        if (!patient) {

            let location = await Location.findOne({
                where: { district }
            });

            if (!location) {
                location = await Location.create({
                    department,
                    province,
                    district
                });
            }

            patient = await Patient.create({
                firstName,
                lastName,
                documentNumber,
                birthdate,
                address,
                locationId: location.id,
                gender
            });
        }

        await Referred.create({
            userId: req.user.id,
            patientId: patient.id,
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

export const getPatientsReferred = async (req, res) => {

    try {
        const referred = await Referred.findAll({
            include: Patient,
            where: {
                userId: req.user.id,
            }
        });

        res.status(200).json(referred);

    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
}
