import Province from '../models/province.model';
import functions from '../utils/functions';

export const getProvinces = async (req, res) => {
    const { departmentId } = req.query
    try {
        let totalData = 0
        let provinces = []
        let nextPage = ''
        if (departmentId !== undefined) {
            totalData = await Province.count({ where: { departmentId: departmentId } })
        } else {
            totalData = await Province.count()
        }
        const pagination = req.query.pagination || 1
        const limit = req.query.limit || 10
        const { start, maxPagination, next } = functions.getPaginationInfo({ pagination, limit, totalCount: totalData, url: 'provinces' })
        // last pagination
        if (maxPagination < pagination) {
            res.status(200).json({ next: '', limit, pagination, data: [] });
            return
        }
        nextPage = next
        if (departmentId !== undefined) {
            provinces = await Province.findAll({ where: { departmentId: departmentId }, offset: start, limit });
            nextPage += `departmentId=${departmentId}`
        } else {
            provinces = await Province.findAll({ offset: start, limit });
        }
        res.status(200).json({ next: nextPage, limit, pagination, data: provinces });
    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
};