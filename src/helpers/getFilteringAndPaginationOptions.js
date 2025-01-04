export const getPaginationAndFilteringOptions = (query) => {
    const { page = 1, limit = 10, status, priority, due_date } = query;

    const filter = {};
    if (status) {
        filter.status = status;
    }
    if (priority) {
        filter.priority = priority;
    }
    if (due_date) {
        filter.due_date = new Date(due_date)
    };

    const pagination = {
        skip: (page - 1) * limit,
        limit: parseInt(limit, 10),
    };

    return { filter, pagination };
};