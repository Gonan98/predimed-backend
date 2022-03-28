import Department from '../models/department.model';

export const getDepartments = async (req, res) => {
    try {
        const departments = await Department.findAll({});
        res.status(200).json(departments);
    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
};