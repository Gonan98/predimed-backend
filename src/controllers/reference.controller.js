import Reference from '../models/referred.model';
import Patient from '../models/patient.model';
import sequelize from '../db'

export const add = async (req, res) => {
    const { patientId, condition, date, establishmentOriginId, establishmentDestinyId, serviceDestinyId, specialtieId, motive, anamnesis, support } = req.body
    const { resumeAnamnesis, temperature, resumenPhysicalExam, fc, fr, pa } = anamnesis
    const { process, labExam } = support

    try {

        let count = await Reference.count({})
        count = count + 1
        const number = count.toString().padStart(6, '0')

        const referred = await Reference.create({
            date,
            establishmentOriginId,
            establishmentDestinyId,
            establishmentDestinyServiceId: serviceDestinyId,
            establishmentSpecialtiesId: specialtieId,
            motive,
            resumeAnamnesis,
            resumenPhysicalExam,
            temperature,
            pa,
            fc,
            fr,
            patientId,
            patientHistoryId,
            userId,
            condition,
            number
        });

        const { id } = referred
        let queryAddLab = 'insert into referreds_support_diagnostic_lab (`referred_id`, `name`) values '
        labExam.forEach((value, index) => {
            queryAddLab += `(${id}, '${value}') `
            queryAddLab += index + 1 === labExam.length ? '; ' : ', '
        })

        let queryAddProcess = 'insert into referreds_support_diagnostic_process (`referred_id`, `establishment_service_id`) values '
        process.forEach((value, index) => {
            queryAddProcess += `(${id}, ${value}) `
            queryAddProcess += index + 1 === labExam.length ? '; ' : ', '
        })

        await sequelize.query(queryAddLab)
        await sequelize.query(queryAddProcess)

        res.status(201).json({
            message: 'Reference created successfully',
        });

    } catch (error) {
        res.status(500).json({
            message: error,
        });
    }
}

export const getAll = async (req, res) => {
    const { documentNumber } = req.query
    try {
        let querySearch = `SELECT ref.id as id, ref.number as 'number', pa.first_name as firstName, pa.last_name as lastName, pa.document_number as documentNumber FROM referreds ref inner join patients pa on pa.id = ref.patient_id `
        if (docMedic !== undefined)
            querySearch += ` where pa.document_number like %${documentNumber}%`
        const references = await sequelize.query(querySearch)
        res.status(200).json(references[0]);
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
        const reference = await Reference.findByPk(id)
        const patient = await Patient.findByPk(reference.dataValue.patientId)

        const queryProcess = `select es.code as 'code', es.name as 'name' from referreds_support_diagnostic_process pr inner join establishments_services es on es.id = pr.establishment_service_id where pr.referred_id = ${id}`

        const queryLab = `select name from referreds_support_diagnostic_lab where referred_id = ${id}`

        const getProcess = await sequelize.query(queryProcess)
        const getExamLab = await sequelize.query(queryLab)

        const result = {
            ...reference.dataValue,
            patient: {...patient.dataValue},
            anamnesis: {
                resumeAnamnesis: reference.dataValue.resumeAnamnesis, 
                temperature: reference.dataValue.temperature, 
                resumenPhysicalExam: reference.dataValue.resumenPhysicalExam, 
                fc: reference.dataValue.fc, 
                fr: reference.dataValue.fr, 
                pa: reference.dataValue.pa
            },
            support: {
                process: getProcess[0],
                labExam: getExamLab[0]
            }
        }

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            message: error,
        });
    }
}


export const deleteById = async (req, res) => {
    const { id } = req.params
    try {
        await Reference.destroy({ where: { id } });
        res.status(201).json({
            message: 'Reference deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: error,
        });
    }
}

export const updateById = async (req, res) => {
    const { id } = req.params
    const { patientId, condition, date, establishmentOriginId, establishmentDestinyId, serviceDestinyId, specialtieId, motive, anamnesis, support } = req.body
    const { resumeAnamnesis, temperature, resumenPhysicalExam, fc, fr, pa } = anamnesis
    const { process, labExam } = support

    try {
        await Reference.update(
            {
                date,
                establishmentOriginId,
                establishmentDestinyId,
                establishmentDestinyServiceId: serviceDestinyId,
                establishmentSpecialtiesId: specialtieId,
                motive,
                resumeAnamnesis,
                resumenPhysicalExam,
                temperature,
                pa,
                fc,
                fr,
                patientId,
                patientHistoryId,
                userId,
                condition,
            },
            { where: { id } }
        );

        let queryAddLab = 'insert into referreds_support_diagnostic_lab (`referred_id`, `name`) values '
        const queryDeleteLab = `delete from referreds_support_diagnostic_lab where referred_id = ${id}`
        labExam.forEach((value, index) => {
            queryAddLab += `(${id}, '${value}') `
            queryAddLab += index + 1 === labExam.length ? '; ' : ', '
        })

        let queryAddProcess = 'insert into referreds_support_diagnostic_process (`referred_id`, `establishment_service_id`) values '
        const queryDeleteProcess = `delete from referreds_support_diagnostic_process where referred_id = ${id}`
        process.forEach((value, index) => {
            queryAddProcess += `(${id}, ${value}) `
            queryAddProcess += index + 1 === labExam.length ? '; ' : ', '
        })

        await sequelize.query(queryDeleteLab)
        await sequelize.query(queryDeleteProcess)
        
        await sequelize.query(queryAddLab)
        await sequelize.query(queryAddProcess)

        res.status(201).json({
            message: 'Reference update successfully',
        });

    } catch (error) {
        res.status(500).json({
            message: error,
        });
    }
}
