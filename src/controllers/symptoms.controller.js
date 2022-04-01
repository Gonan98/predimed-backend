import Symptom from '../models/symptom.model';

export const create = async (req, res) => {
    const { name } = req.body;

    try {
        await Symptom.create({ name });
        res.status(201).json({
            message: 'Symptom created successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
};

export const getById = async (req, res) => {
    try {
        const symptom = await Symptom.findByPk(req.params.id);

        if (!symptom) return res.status(404).json({
            message: 'Symptom not found'
        });

        res.status(200).json(symptom);

    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
}

export const getAll = async (req, res) => {
    try {
        const symptoms = await Symptom.findAll({});
        res.status(200).json(symptoms);
    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
};

export const updateById = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        await Symptom.update(
            {
                name
            },
            {
                where: {
                    id,
                },
            }
        );
        res.status(200).json({
            message: 'Symptom updated successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
};

export const deleteById = async (req, res) => {
    try {
        await Symptom.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(201).json({
            message: 'Symptom deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
};