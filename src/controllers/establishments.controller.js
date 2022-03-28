import Establishment from '../models/establishments.model';
import functions from '../utils/functions';

export const getEstablishments = async (req, res) => {
    try {
        const totalData = await Establishment.count();
        const pagination = req.query.pagination || 1
        const limit = req.query.limit || 10
        const { start, maxPagination, next } = functions.getPaginationInfo({ pagination, limit, totalCount: totalData, url: 'establishments' })
        // last pagination
        if (maxPagination < pagination) {
            res.status(200).json({ next: '', limit, pagination, data: [] });
            return
        }
        const establishments = await Establishment.findAll({ offset: start, limit });
        res.status(200).json({ next, limit, pagination, data: establishments });
    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
};