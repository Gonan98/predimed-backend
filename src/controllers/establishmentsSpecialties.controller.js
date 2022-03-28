import EstablishmentSpecialties from '../models/establishmentsSpecialties.model';
import functions from '../utils/functions';

export const getEstablishmentsSpecialties = async (req, res) => {
    const { establishmentCode } = req.params
    try {
        const totalData = await EstablishmentSpecialties.count({ where: { establishmentCode } });
        const pagination = req.query.pagination || 1
        const limit = req.query.limit || 10
        const { start, maxPagination, next } = functions.getPaginationInfo({ pagination, limit, totalCount: totalData, url: 'establishments-specialties' })
        // last pagination
        if (maxPagination < pagination) {
            res.status(200).json({ next: '', limit, pagination, data: [] });
            return
        }
        const establishmentsSpecialties = await EstablishmentSpecialties.findAll({ where: { establishmentCode }, offset: start, limit });
        res.status(200).json({ next, limit, pagination, data: establishmentsSpecialties });
    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
};