export interface Manager {
    id: number;
    name: string;
    type: number;
}

export interface Organization {
    shortName: string;
    legalAddress: {
        region: number;
    };
}

export interface DebtorModel {
    id: number;
    organization: Organization;
}

export interface CaseItem {
    id: number;
    manager: Manager;
    debtorModel: DebtorModel;
    startDate: string;
    procedureType: number;
    status: number;
}

export interface CasesResponse {
    items: CaseItem[];
    count: number;
}

export interface CasesRequest {
    pagination: {
        offset: number;
        count: number;
    };

    sort: {
        sortOrder: number;
    };

    filters: {
        number: string;
        status: number | null;
        declarantTypes: number[] | null;
        manager: string;
        procedure: string;
        start: {
            from: string | null;
            to: string | null;
        };

        end: {
            from: string | null;
            to: string | null;
        };

        debtor: {
            unp: string;
            name: string;
            region: string;
            type: string;
        };
    };
}