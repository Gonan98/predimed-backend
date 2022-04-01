import Diagnostic from '../models/diagnostic.model';

export const create = async (req, res) => {
    const { name } = req.body;

    try {
        await Diagnostic.create({ name });
        res.status(201).json({
            message: 'Diagnostic created successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
};

export const getById = async (req, res) => {
    try {
        const diagnostic = await Diagnostic.findByPk(req.params.id);

        if (!diagnostic) return res.status(404).json({
            message: 'Diagnostic not found'
        });

        res.status(200).json(diagnostic);

    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
}

export const getAll = async (req, res) => {
    try {
        const diagnostics = await Diagnostic.findAll({});
        res.status(200).json(diagnostics);
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
        await Diagnostic.update(
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
            message: 'Diagnostic updated successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
};

export const deleteById = async (req, res) => {
    try {
        await Diagnostic.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(201).json({
            message: 'Diagnostic deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
};