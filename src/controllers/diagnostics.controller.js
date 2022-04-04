import Diagnostic from '../models/diagnostic.model';
import Disease from '../models/disease.model';
import sequelize from '../db'

export const create = async (req, res) => {

    try {

        res.status(201).json({
            message: 'Diagnostic created successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
};


export const consult = async (req, res) => {
    const { symptoms } = req.body
    try {

        const getAllDiseas = await Disease.findAll({})
        const diseases = getAllDiseas.map((value) => value.dataValues.name)
        const queryAll = await sequelize.query('SELECT diag.id as `id`, dise.name as `disease`, sym.name as `symptom` FROM diagnostics as diag inner join diseases as dise on dise.id = diag.diseaseId inner join symptoms as sym on sym.id = diag.symptomId order by diag.diseaseId;')
        const diseasesDeta = []
        diseases.forEach((disease) => {
            const allSymptoms = queryAll[0].filter(diagnostic => (diagnostic.disease === disease))
            diseasesDeta.push({ disease, symptoms: allSymptoms })
        })

        let result = []
        diseasesDeta.forEach(disease => {
            const idSymptoms = disease.symptoms.map(symptom => symptom.id)
            const haveDisease = idSymptoms.every(v => symptoms.includes(v));
            if (haveDisease)
                result.push(disease)
        })

        const percent = 100 / result.length
        result = result.map(value => ({ ...value, percent: `${percent} %` }))
        res.status(201).json(result);
    } catch (error) {
        console.log('error => ', error)
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

    try {

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