import Province from '../models/province.model';

export const getProvinces = async (req, res) => {
    const { departmentId } = req.query
    try {
        let departments = []
        if (departmentId !== undefined) {
            departments = await Province.findAll({ where: { departmentId: departmentId } });
        } else {
            departments = await Province.findAll({});
        }
        res.status(200).json(departments);
    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
};