import District from '../models/district.model';
import functions from '../utils/functions';

export const getDistricts = async (req, res) => {
    const { provinceId } = req.query
    try {
        let totalData = 0
        let districts = []
        let nextPage = ''
        if (provinceId !== undefined) {
            totalData = await District.count({ where: { provinceId: provinceId } })
        } else {
            totalData = await District.count()
        }
        const pagination = req.query.pagination || 1
        const limit = req.query.limit || 10
        const { start, maxPagination, next } = functions.getPaginationInfo({ pagination, limit, totalCount: totalData, url: 'districts' })
        // last pagination
        if (maxPagination < pagination) {
            res.status(200).json({ next: '', limit, pagination, data: [] });
            return
        }
        nextPage = next
        if (provinceId !== undefined) {
            districts = await District.findAll({ where: { provinceId: provinceId }, offset: start, limit });
            nextPage += `provinceId=${provinceId}`
        } else {
            districts = await District.findAll({ offset: start, limit });
        }
        res.status(200).json({ next: nextPage, limit, pagination, data: districts });
    } catch (error) {
        res.status(500).json({
            message: error,
        });
    }
};