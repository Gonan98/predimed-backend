import Province from '../models/province.model';

export const getDistricts = async (req, res) => {
    const { provinceId } = req.query
    try {
        let districts = []
        if (provinceId !== undefined) {
            districts = await Province.findAll({ where: { provinceId: provinceId } });
        } else {
            districts = await Province.findAll({});
        }
        res.status(200).json(districts);
    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
};