import sequelize from '../db';
import Disease from '../models/disease.model';

export const create = async (req, res) => {
    const { name, symptoms } = req.body;

    try {
        const result = await Disease.create({ name });
        console.log('disease result id => ', result)
        let queryInsert = 'INSERT INTO Diagnostics (`diseaseId`,`symptomId`) values '
        symptoms.map((value, index, array) => {
            queryInsert += `(${result.dataValues.id}, ${value})`
            if (index + 1 === symptoms.length) queryInsert += '; '
            else queryInsert += ', '
        })
        console.log('query => ', queryInsert)
        await sequelize.query(queryInsert)
        res.status(201).json({
            message: 'Disease created successfully',
        });
    } catch (error) {
        console.log('error => ', error)
        res.status(500).json({
            message: 'Database error',
        });
    }
};

export const getById = async (req, res) => {
    try {
        const disease = await Disease.findByPk(req.params.id);

        if (!disease) return res.status(404).json({
            message: 'Disease not found'
        });

        res.status(200).json(disease);

    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
}

export const getAll = async (req, res) => {
    try {
        const getAllDiseas = await Disease.findAll({})
        const diseases = getAllDiseas.map((value) => value.dataValues.name)
        const queryAll = await sequelize.query('SELECT diag.id as `id`, dise.name as `disease`, sym.name as `symptom` FROM diagnostics as diag inner join diseases as dise on dise.id = diag.diseaseId inner join symptoms as sym on sym.id = diag.symptomId order by diag.diseaseId;')
        const diseasesDeta = []
        diseases.forEach((disease) => {
            const symptoms = queryAll[0].filter(diagnostic => (diagnostic.disease === disease))
            diseasesDeta.push({ disease, symptoms: symptoms.map(value => value.symptom) })
        })
        res.status(200).json(diseasesDeta);
    } catch (error) {
        console.log('error => ', error)
        res.status(500).json({
            message: 'Database error',
        });
    }
};

export const updateById = async (req, res) => {
    const { id } = req.params;
    const { name, symptoms } = req.body;

    try {
        await Disease.update(
            {
                name
            },
            {
                where: {
                    id,
                },
            }
        );
        const queryDelete = `Delete from Diagnostic where diseaseId = ${id}`
        await sequelize.query(queryDelete)
        let queryInsert = 'INSERT INTO Diagnostic (`diseaseId`,`symptomId`) values '
        symptoms.map((value, index) => {
            queryInsert += `('${id}', '${value.symptomId}')`
            if (index + 1 === symptoms.length) queryInsert += '; '
            else queryInsert += ', '
        })
        console.log('query => ', queryInsert)
        await sequelize.query(queryInsert)
        res.status(200).json({
            message: 'Disease updated successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
};

export const deleteById = async (req, res) => {
    try {
        await Disease.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(201).json({
            message: 'Disease deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
};