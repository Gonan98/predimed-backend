import EstablishmentService from '../models/establishmentsService.model';
import functions from '../utils/functions';

export const getEstablishmentsServices = async (req, res) => {
    const { establishmentCode } = req.params
    try {
        const totalData = await EstablishmentService.count({ where: { establishmentCode } });
        const pagination = req.query.pagination || 1
        const limit = req.query.limit || 10
        const { start, maxPagination, next } = functions.getPaginationInfo({ pagination, limit, totalCount: totalData, url: 'establishments-services' })
        // last pagination
        if (maxPagination < pagination) {
            res.status(200).json({ next: '', limit, pagination, data: [] });
            return
        }
        const establishmentsServices = await EstablishmentService.findAll({ where: { establishmentCode }, offset: start, limit });
        res.status(200).json({ next, limit, pagination, data: establishmentsServices });
    } catch (error) {
        res.status(500).json({
            message: 'Database error'
        });
    }
};