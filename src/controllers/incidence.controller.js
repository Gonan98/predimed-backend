import sequelize from "../db";
import Incidence from "../models/incidence.model";

export const add = async (req, res) => {
    const { establishmentId, status, topic, phone, description, registerType, priority, userId } = req.body
    try {
        await Incidence.create({
            'user_id': userId,
            'establishment_id': establishmentId,
            status,
            topic,
            phone,
            description,
            registerType,
            priority
        });

        res.status(201).json({
            message: 'Incidence created successfully',
        });

    } catch (error) {
        res.status(500).json({
            message: error,
        });
    }
}

export const getAll = async (req, res) => {
    const { docMedic } = req.query
    try {
        let querySearch = `select inc.id as 'id', us.document_medic as 'docMedic', inc.register_type as 'type', inc.status as 'status' from heroku_660b17d3437b56e.incidences inc
        inner join  heroku_660b17d3437b56e.users us on us.id = inc.user_id`
        if (docMedic !== undefined)
            querySearch += ` where us.document_medic like %${docMedic}%`
        const incidences = await sequelize.query(querySearch)
        res.status(200).json(incidences[0]);
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
        const incidence = await Incidence.findByPk(id)
        res.status(200).json(incidence);
    } catch (error) {
        res.status(500).json({
            message: error,
        });
    }
}


export const deleteById = async (req, res) => {
    const { id } = req.params
    try {
        await Incidence.destroy({ where: { id } });
        res.status(201).json({
            message: 'Incidence deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: error,
        });
    }
}

export const updateById = async (req, res) => {
    const { id } = req.params
    const { establishmentId, status, topic, phone, description, registerType, priority, userId, solutionDetail, dateSolution } = req.body

    try {
        await Incidence.update(
            {
                'establishment_id': establishmentId,
                status,
                topic,
                phone,
                description,
                registerType,
                priority,
                'user_id': userId,
                solutionDetail,
                dateSolution
            },
            { where: { id } }
        );

        res.status(201).json({
            message: 'Incidence update successfully',
        });

    } catch (error) {
        res.status(500).json({
            message: error,
        });
    }
}
