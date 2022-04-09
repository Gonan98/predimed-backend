import Diagnostic from '../models/diagnostic.model';
import Disease from '../models/disease.model';
import sequelize from '../db'

export const create = async (req, res) => {

    const { hour, date, estableishment, destinyService, specialties, motive, anamnesis, diagnosticSupport } = req.body

    try {

        res.status(201).json({
            message: 'Diagnostic created successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: error,
        });
    }
};


