export default {
    getPaginationInfo: ({ pagination, limit, totalCount, url = '' } = {}) => {
        const start = (pagination - 1) * limit
        const maxPagination = Math.ceil(totalCount / limit)
        const next = maxPagination > pagination ? `${process.env.URL_API}${url}?pagination=${parseInt(pagination) + 1}` : '';
        return { start, maxPagination, next }
    }
}