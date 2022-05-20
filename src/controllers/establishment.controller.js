import Establishment from "../models/establishment.model"

export const getEstablishmentById = async (req, res) => {
    const { id } = req.params;

    try {
        const establishment = await Establishment.findByPk(id);
        res.status(200).json(establishment);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getDestinyEstablishments = async (req, res) => {
    try {
        const establishments = await Establishment.findAll({
            where: {
                code: {
                    [Op.in]: [5987, 6213, 6210, 23159]
                }
            }
        });

        res.status(200).json(establishments);
    } catch (error) {
        res.status(500).json(err)
    }
}