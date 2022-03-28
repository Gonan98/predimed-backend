import EstablishmentDestinyService from '../models/establishmentsDestinyService.model';
import functions from '../utils/functions';

export const getEstablishmentsDestinyService = async (req, res) => {
    const { establishmentCode } = req.params
    try {
        const totalData = await EstablishmentDestinyService.count({ where: { establishmentCode } });
        const pagination = req.query.pagination || 1
        const limit = req.query.limit || 10
        const { start, maxPagination, next } = functions.getPaginationInfo({ pagination, limit, totalCount: totalData, url: 'establishments-destiny-services' })
        // last pagination
        if (maxPagination < pagination) {
            res.status(200).json({ next: '', limit, pagination, data: [] });
            return
        }
        const establishmentsDestinyServices = await EstablishmentDestinyService.findAll({ where: { establishmentCode }, offset: start, limit });
        res.status(200).json({ next, limit, pagination, data: establishmentsDestinyServices });
    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
};