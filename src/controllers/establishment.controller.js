import Establishment from "../models/establishment.model"

export const getEstablishments = async (req, res) => {

    const qUbigeo = req.query.ubigeo_id;
    console.log(qUbigeo);
    if (!qUbigeo) return res.status(400).json({ message: 'ubigeo_id query is missing' })

    try {
        const establishments = await Establishment.findAll({
            where: {
                ubigeoId: qUbigeo
            },
            order: ['name']
        });

        res.status(200).json(establishments)
    } catch (err) {
        res.status(500).json(err)
    }
}