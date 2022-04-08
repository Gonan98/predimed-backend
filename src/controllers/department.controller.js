import Department from '../models/department.model';
import functions from '../utils/functions';

export const getDepartments = async (req, res) => {
    try {
        const totalData = await Department.count()
        const pagination = req.query.pagination || 1
        const limit = req.query.limit || 10
        const { start, maxPagination, next } = functions.getPaginationInfo({ pagination, limit, totalCount: totalData, url: 'departments' })
        // last pagination
        if (maxPagination < pagination) {
            res.status(200).json({ next: '', limit, pagination, data: [] });
            return
        }
        const departments = await Department.findAll({ offset: start, limit });
        res.status(200).json({ next, limit, pagination, data: departments });
    } catch (error) {
        console.log('error => ', error)
        res.status(500).json({
            message: 'Database error',
        });
    }
};