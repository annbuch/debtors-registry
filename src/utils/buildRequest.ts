import { type FiltersState } from "../store/filtersSlice";

export function buildRequest(filters: FiltersState) {
    return {
        pagination: {
            offset: (filters.page - 1) * 20,
            count: 20,
        },

        sort: {
            sortOrder: 1,
        },

        filters: {
            number: filters.number,
            status:
                filters.status === "" ? null : Number(filters.status),
            declarantTypes: filters.declarant,
            manager: filters.manager,
            procedure: filters.procedure,
            start: {
                from: filters.startFrom || null,
                to: filters.startTo || null,
            },
            end: {
                from: filters.endFrom || null,
                to: filters.endTo || null,
            },
            debtor: {
                unp: filters.unp,
                name: filters.debtorName,
                region: filters.region,
                type: filters.organizationType,
            },
        },
    };
}