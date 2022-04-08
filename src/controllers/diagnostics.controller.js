import Diagnostic from '../models/diagnostic.model';
import Disease from '../models/disease.model';
import PatientHistory from '../models/patientHistory.model'
import sequelize from '../db'

export const create = async (req, res) => {

    const { diseases, patientId, condition, resume } = req.body

    try {
        const countHistory = await PatientHistory.count({})
        const number = countHistory.toString().padStart(8, '0')
        const addHistory = await PatientHistory.create({ number, condition, patientId, resume })
        const id = addHistory.id
        console.log('addhistory => ', addHistory)
        let queryHistoryDetail = 'INSERT INTO patient_history_disease (`patientHistoryId`, `diseaseId`,`percent`) values '
        diseases.forEach((value, index) => {
            queryHistoryDetail += `(${id}, ${value.diseaseId}, ${value.percent})`
            queryHistoryDetail += diseases.length === index + 1 ? ';' : ', '
        })
        console.log('query => ', queryHistoryDetail)
        await sequelize.query(queryHistoryDetail)
        res.status(201).json({
            message: 'History Diagnostic created successfully',
        });
    } catch (error) {
        console.log('error => ', error)
        res.status(500).json({
            message: 'Database error',
        });
    }
};


export const consult = async (req, res) => {
    const { symptoms } = req.body
    try {

        const getAllDiseas = await Disease.findAll({})
        const diseases = getAllDiseas.map((value) => ({ id: value.dataValues.id, name: value.dataValues.name }))
        const queryAll = await sequelize.query('SELECT sym.id as `id`,sym.name as `symptom`,dise.name as `disease` FROM diagnostics as diag inner join diseases as dise on dise.id = diag.diseaseId inner join symptoms as sym on sym.id = diag.symptomId order by diag.diseaseId;')
        const diseasesDeta = []
        diseases.forEach((disease) => {
            const allSymptoms = queryAll[0].filter(diagnostic => (diagnostic.disease === disease.name))
            diseasesDeta.push({ disease: { id: disease.id, name: disease.name }, symptoms: allSymptoms.map(value => ({ name: value.symptom, id: value.id })) })
        })

        let result = []
        diseasesDeta.forEach(disease => {
            const idSymptoms = disease.symptoms.map(symptom => symptom.id)
            const haveDisease = idSymptoms.every(v => symptoms.includes(v));
            if (haveDisease)
                result.push(disease)
        })

        const percent = 100 / result.length
        result = result.map(value => ({ ...value, percent: percent }))
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
        const diagnostic = await PatientHistory.findByPk(req.params.id);
        const diagnosticDetail = await sequelize.query('select * from patient_history_disease ')

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